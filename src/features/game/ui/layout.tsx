import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import React from "react";

export function GameLayout({
  status,
  field,
  players,
}: {
  status?: React.ReactNode;
  field?: React.ReactNode;
  players?: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tik-Tak-Toe 3X3</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {players}
        {status}
        <div className="flex items-center justify-center">{field}</div>
      </CardContent>
    </Card>
  );
}
