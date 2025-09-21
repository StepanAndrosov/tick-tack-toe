import { GameDomain } from "@/entities/game";

export function GameStatus({ game }: { game: GameDomain.GameEntity }) {
  switch (game.status) {
    case "idle":
      return <div className="text-lg">Waiting</div>;
    case "in_progress": {
      const currentSymbol = GameDomain.getGameCurrentStep(game);
      return <div className="text-lg">Move: {currentSymbol}</div>;
    }
    case "game_over": {
      const currentSymbol = GameDomain.getGameCurrentStep(game);
      return <div className="text-lg">Winner: {currentSymbol}</div>;
    }
    case "game_over_draw":
      return <div className="text-lg">Draw</div>;
  }
}
