import type { ReactNode } from "react";

import { AdminLayout } from "@/components/layout/admin-layout";

type AdminRouteLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function AdminRouteLayout({ children }: AdminRouteLayoutProps) {
  return <AdminLayout>{children}</AdminLayout>;
}
