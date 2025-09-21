import { Game, Prisma, User } from "@/generated/prisma";
import { prisma } from "@/shared/lib/db";
import { removePassword } from "@/shared/lib/password";
import z from "zod";
import { GameEntity, GameIdle, GameOver } from "../domain";

async function gamesList(where?: Prisma.GameWhereInput) {
    const games = await prisma.game.findMany({
        where,
        include: {
            winner: true,
            players: true
        }
    })

    return games.map(dbGameToGameEntity)
}

async function createGame(game: GameIdle) {

    const created = await prisma.game.create({
        data: {
            id: game.id,
            status: game.status,
            field: Array(9).fill(null),
            players: { connect: { id: game.creator.id } }
        },
        include: {
            players: true,
            winner: true,
        }
    })

    return dbGameToGameEntity(created)
}

function dbGameToGameEntity(game: Game & { players: User[], winner?: User | null }): GameEntity {
    const players = game.players.map(removePassword)
    switch (game.status) {
        case 'idle': {
            const [creator] = players
            if (!creator) throw new Error('creator should be in the game')
            return {
                id: game.id,
                creator,
                players: game.players,
                status: game.status,
                field: fieldSchema.parse(game.field)
            } satisfies GameIdle
        }
        case 'in_progress':
        case 'game_over_draw': {
            return {
                id: game.id,
                players,
                status: game.status,
                field: fieldSchema.parse(game.field)

            }
        }
        case 'game_over': {
            if (!game.winner) {
                throw new Error('winner should be in game over')
            }
            return {
                id: game.id,
                players,
                status: game.status,
                field: fieldSchema.parse(game.field),
                winner: removePassword(game.winner)
            } satisfies GameOver
        }
    }
}

const fieldSchema = z.array(z.union([z.string(), z.null()]))

export const gameRepository = {
    gamesList,
    createGame
}