import Link from "next/link";

import { adminNavItems, siteConfig } from "@/config/site";

export function Sidebar() {
  return (
    <aside className="hidden border-r bg-background lg:block">
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/admin" className="font-semibold tracking-tight">
          {siteConfig.name}
        </Link>
      </div>
      <nav className="grid gap-1 p-4" aria-label="Admin navigation">
        {adminNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
