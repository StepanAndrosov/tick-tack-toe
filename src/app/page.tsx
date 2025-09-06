import { GamesList } from "@/features/game-list/server";

export default async function Home() {
  return (
    <div className="flex flex-col gap-4 container mx-auto pt-10 lg:pt-20">
      <h1 className="text-2xl font-semibold">Games:</h1>
      <GamesList />
    </div>
  );
}
