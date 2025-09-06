"use server";

import { createGame } from "@/entities/game/server";
import { prisma } from "@/shared/lib/db";

export const createGameAction = async () => {
  const user = await prisma.user.findFirst();
  if (!user)
    return {
      type: "error",
      error: "user-not-found",
    };
  return createGame(user);
};
