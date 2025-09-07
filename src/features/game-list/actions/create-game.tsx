"use server";

import { createGame } from "@/entities/game/server";
import { prisma } from "@/shared/lib/db";
import { left, right } from "@/shared/lib/either";

export const createGameAction = async () => {
  const user = await prisma.user.findFirst();
  if (!user) return left("user-not-found" as const);
  const gameCreated = await createGame(user);
  return right(gameCreated);
};
