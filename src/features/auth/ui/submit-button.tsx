import { Button } from "@/shared/ui/button";
import React from "react";

export function SubmitButton({
  label,
  isPending,
}: {
  label: string;
  isPending?: boolean;
}) {
  return (
    <Button disabled={isPending} type="submit" className="w-full">
      {label}
    </Button>
  );
}
