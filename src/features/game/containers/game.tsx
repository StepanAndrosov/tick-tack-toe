import { GameId } from "@/kernel/ids";
import { GameClient } from "./game-client";
import { getCurrentUser } from "@/entities/user/server";
import { redirect } from "next/navigation";
import { GameDomain } from "@/entities/game";
import { useGame } from "../model/use-game";
import { GameLayout } from "../ui/layout";
import { GameStatus } from "../ui/status";

export async function Game({ gameId }: { gameId: GameId }) {
  const user = await getCurrentUser();

  const { game, isPending } = useGame(gameId);

  const loadingGame: GameDomain.GameEntity = {
    id: "",
    creator: { id: "", login: "", rating: 1000 },
    players: [
      { id: "", login: "", rating: 1000 },
      { id: "", login: "", rating: 100 },
    ],
    field: [null, null, null, null, null, null, null, null, null],
    status: "idle",
  };

  if (!game || isPending)
    return <GameLayout status={<GameStatus game={loadingGame} />}></GameLayout>;
  return <GameClient defaultGame={game} player={user!} />;
}
