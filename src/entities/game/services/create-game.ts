import cuid from "cuid";
import { GameIdle, Player } from "../domain";
import { gameRepository } from "../repositories/game";

export async function createGame(player: Player) {
    const playerGames = await gameRepository.gamesList({
        players: { some: { id: player.id } },
        status: 'idle'
    })
    const isGameInIdleStatus = playerGames.some(game => game.status === 'idle' && game.creator.id === player.id)
    if (isGameInIdleStatus) {
        return {
            type: 'error',
            error: 'can-create-only-one-game'
        } as const
    }
    const game = await gameRepository.createGame({
        id: cuid(),
        creator: player,
        status: 'idle',
        players: []
    })

    return {
        type: 'success',
        game: game as GameIdle
    } as const
}