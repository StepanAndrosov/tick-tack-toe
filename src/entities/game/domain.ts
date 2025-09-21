import { GameId, UserId } from "@/kernel/ids"

export type Player = {
    id: UserId
    login: string
    rating: number
}

export type GameEntity = GameIdle | GameInProgress | GameOver | GameOverDraw

export type GameIdle = {
    id: GameId
    status: 'idle'
    field: Field
    creator: Player
    players: Player[]
}

export type GameInProgress = {
    id: GameId
    players: Player[]
    field: Field
    status: 'in_progress'
}

export type GameOver = {
    id: GameId
    players: Player[]
    field: Field
    status: 'game_over'
    winner: Player
}

export type GameOverDraw = {
    id: GameId
    players: Player[]
    field: Field
    status: 'game_over_draw'
}

export type Field = Cell[]

export type Cell = GameSymbol | null
export type GameSymbol = string

export const GameSymbol = {
    X: "X",
    O: "O"
}
export const getGameCurrentStep = (game: GameInProgress | GameOver | GameOverDraw) => {
    const symbols = game.field.filter(s => s !== null).length

    return symbols % 2 === 0 ? GameSymbol.X : GameSymbol.O
}

export const getNextSymbol = (gameSymbol: GameSymbol) => {
    if (gameSymbol === GameSymbol.X) {
        return GameSymbol.O
    } else return GameSymbol.X
}

