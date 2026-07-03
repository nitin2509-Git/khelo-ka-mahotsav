import type { ReactNode } from "react";

import { PublicLayout } from "@/components/layout/public-layout";

type MarketingLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return <PublicLayout>{children}</PublicLayout>;
}
