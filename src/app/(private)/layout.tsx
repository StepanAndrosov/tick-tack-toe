import { sessionService } from "@/entities/user/server";
import { Button } from "@/shared/ui/button";
import { redirect } from "next/navigation";
import React from "react";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { session } = await sessionService.verifySession();
  return (
    <div>
      <header className="px-10 py-4 flex gap-4 items-center justify-between border-b border-b-primary/50">
        <div className="text-lg font-semibold">Tik-tak-toe online</div>
        <div className="flex items-center gap-2">
          <span className="text-base">{session.login}</span>
          <form
            action={async () => {
              "use server";
              await sessionService.deleteSession();
              redirect("/sign-in");
            }}
          >
            <Button>Sign out</Button>
          </form>
        </div>
      </header>
      {children}
    </div>
  );
}
