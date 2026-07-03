"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

type RootProvidersProps = Readonly<{
  children: ReactNode;
}>;

export function RootProviders({ children }: RootProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
