import { GameId } from "@/kernel/ids";
import { GameClient } from "./game-client";
import { getCurrentUser } from "@/entities/user/server";
import { redirect } from "next/navigation";
import { GameDomain } from "@/entities/game";

export async function Game({ gameId }: { gameId: GameId }) {
  const user = await getCurrentUser();

  const game: GameDomain.GameEntity = {
    id: "1",
    players: [
      { id: "1", login: "qwer", rating: 900 },
      { id: "2", login: "1234", rating: 980 },
    ],
    field: [null, null, null, "X", "O", "O", null, null, null],
    status: "in_progress",
  };

  return <GameClient defaultGame={game} player={user!} />;
}
