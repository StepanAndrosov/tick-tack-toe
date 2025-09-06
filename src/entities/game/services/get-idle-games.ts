import { GameIdle } from "../domain";
import { gameRepository } from "../repositories/game";

export async function getIdleGames() {
    const games = await gameRepository.gamesList({
        status: 'idle'
    })

    return games as GameIdle[]
}