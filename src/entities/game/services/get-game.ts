import { GameId } from "@/kernel/ids";
import { gameRepository } from "../repositories/game";

export const getGameById = async (gameId: GameId) => {
    const game = await gameRepository.getGame({
        id: gameId
    })

    return game
}