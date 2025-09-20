"use server";

import { createGame } from "@/entities/game/server";
import { getCurrentUser } from "@/entities/user/server";
import { left, right } from "@/shared/lib/either";
import { redirect } from "next/navigation";

export const createGameAction = async () => {
  const user = await getCurrentUser();
  if (!user) return left("user-not-found" as const);
  const gameCreated = await createGame(user);

  if (gameCreated.type === "right") redirect(`/game/${gameCreated.value.id}`);
  return right(gameCreated);
};
