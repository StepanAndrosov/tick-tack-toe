import { getIdleGames } from "@/entities/game/server";
import { CreateButton } from "../ui/game-button";
import { GameCard } from "../ui/game-card";
import { Layout } from "../ui/layout";

export async function GamesList() {
  const games = await getIdleGames();

  return (
    <Layout actions={<CreateButton action={() => new Promise(() => {})} />}>
      {games.map((game) => (
        <GameCard key={game.id} creator={game.creator} />
      ))}
    </Layout>
  );
}
