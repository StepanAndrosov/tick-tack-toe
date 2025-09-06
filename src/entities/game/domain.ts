
export type Player = {
    id: string
    login: string
    rating: number
}

export type GameEntity = GameIdle | GameInProgress | GameOver | GameOverDraw

export type GameIdle = {
    id: string
    status: 'idle'
    creator: Player
    players: Player[]
}

export type GameInProgress = {
    id: string
    players: Player[]
    field: Field
    status: 'in_progress'
}

export type GameOver = {
    id: string
    players: Player[]
    field: Field
    status: 'game_over'
    winner: Player
}

export type GameOverDraw = {
    id: string
    players: Player[]
    field: Field
    status: 'game_over_draw'
}

export type Field = Cell[]

export type Cell = GameSymbol | null
export type GameSymbol = string

