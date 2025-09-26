import { GameDomain } from "@/entities/game";
import { GameId } from "@/kernel/ids";
import { useEventSource } from "@/shared/lib/sse/client";

export function useGame(gameId: GameId) {
  const { data, isPending } = useEventSource<GameDomain.GameEntity>(
    `/game/${gameId}/stream`,
  );

  return {
    game: data,
    isPending,
  };
}
