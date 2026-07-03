import type { ReactNode } from "react";

import { Navbar } from "@/components/layout/navbar";

type PublicLayoutProps = Readonly<{
  children: ReactNode;
}>;

export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar variant="public" />
      <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
