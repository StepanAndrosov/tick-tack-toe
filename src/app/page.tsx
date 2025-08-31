import { prisma } from "@/shared/lib/db";
import { Button } from "@/shared/ui/button";
import { Card, CardTitle } from "@/shared/ui/card";

export default async function Home() {
  const games = await prisma.game.findMany();

  console.log(games);
  return (
    <div className="p-10 w-full flex flex-col gap-2">
      {games.map((game) => (
        <Card key={game.id} className="w-full max-w-[150px] p-2">
          <CardTitle>{game.name}</CardTitle>
        </Card>
      ))}
      <Button>Hello!</Button>
    </div>
  );
}
