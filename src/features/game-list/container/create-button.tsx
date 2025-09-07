"use client";

import { mapLeft, right } from "@/shared/lib/either";
import { useActionState } from "@/shared/lib/react";
import { Button } from "@/shared/ui/button";
import { createGameAction } from "../actions/create-game";

export function CreateButton() {
  const [data, dispatch, isPending] = useActionState(
    createGameAction,
    right(undefined),
  );

  return (
    <div className="flex flex-col gap-1">
      <Button
        disabled={isPending}
        onClick={dispatch}
        error={mapLeft(
          data,
          (e) =>
            ({
              ["can-create-only-one-game"]: "You can create only one game",
              ["user-not-found"]: "User not found",
            })[e],
        )}
      >
        Create game
      </Button>
    </div>
  );
}
