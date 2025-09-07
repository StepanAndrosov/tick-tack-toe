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

