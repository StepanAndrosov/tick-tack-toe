"use client";

import { GameLayout } from "../ui/layout";
import { GamePlayers } from "../ui/players";

import { GameStatus } from "../ui/status";
import { GameField } from "../ui/field";
import { GameDomain } from "@/entities/game";

export function GameClient({
  defaultGame,
  player,
}: {
  defaultGame: GameDomain.GameEntity;
  player: GameDomain.Player;
}) {
  // const { game = defaultGame, step } = useGame(defaultGame.id, player);

  const game: GameDomain.GameEntity = {
    id: "1",
    players: [
      { id: "1", login: "qwer", rating: 900 },
      { id: "2", login: "1234", rating: 980 },
    ],
    field: [null, null, null, "X", "O", "O", null, null, null],
    status: "in_progress",
  };
  return (
    <GameLayout
      players={<GamePlayers game={game} />}
      status={<GameStatus game={game} />}
      field={
        <GameField
          game={game}
          onCellClick={(num: number) => {
            console.log(num);
          }}
        />
      }
    />
  );
}
