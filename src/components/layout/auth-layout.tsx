import type { ReactNode } from "react";

import { Navbar } from "@/components/layout/navbar";

type AuthLayoutProps = Readonly<{
  children: ReactNode;
}>;

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-dvh bg-muted/30 text-foreground">
      <Navbar variant="public" />
      <main className="mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-md items-center px-4 py-10">
        {children}
      </main>
    </div>
  );
}
