import { getIdleGames } from "@/entities/game/server";
import { GameCard } from "../ui/game-card";
import { Layout } from "../ui/layout";
import { CreateButton } from "./game-button";

export async function GamesList() {
  const games = await getIdleGames();

  return (
    <Layout actions={<CreateButton />}>
      {games.map((game) => (
        <GameCard key={game.id} creator={game.creator} />
      ))}
    </Layout>
  );
}
