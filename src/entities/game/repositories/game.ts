import { Game, Prisma, User } from "@/generated/prisma";
import { prisma } from "@/shared/lib/db";
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

function dbGameToGameEntity(game: Game & { players: User[], winner?: User | null }): GameEntity {

    switch (game.status) {
        case 'idle': {
            const [creator] = game.players
            if (!creator) throw new Error('creator should be in the game')
            return {
                id: game.id,
                creator,
                players: game.players,
                status: game.status
            } satisfies GameIdle
        }
        case 'in_progress':
        case 'game_over_draw': {
            return {
                id: game.id,
                players: game.players,
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
                players: game.players,
                status: game.status,
                field: fieldSchema.parse(game.field),
                winner: game.winner
            } satisfies GameOver
        }
    }
}

const fieldSchema = z.array(z.union([z.string(), z.null()]))

export const gameRepository = {
    gamesList
}