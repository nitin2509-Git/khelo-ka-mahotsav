import type { ReactNode } from "react";

import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";

type AdminLayoutProps = Readonly<{
  children: ReactNode;
}>;

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="grid min-h-dvh bg-muted/30 text-foreground lg:grid-cols-[18rem_1fr]">
      <Sidebar />
      <div className="flex min-w-0 flex-col">
        <Navbar variant="admin" />
        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
