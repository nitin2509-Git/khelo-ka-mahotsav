import "./globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import { RootProviders } from "@/components/providers/root-providers";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh bg-background font-sans antialiased">
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
