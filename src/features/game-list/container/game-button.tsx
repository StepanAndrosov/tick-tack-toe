"use client";

import { Button } from "@/shared/ui/button";
import { createGameAction } from "../actions/create-game";
import { useActionState } from "react";

export async function CreateButton() {
  // useActionState(createGameAction);

  return <Button onClick={createGameAction}>Create game</Button>;
}
