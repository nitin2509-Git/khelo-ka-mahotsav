import type { ReactNode } from "react";

import { AuthLayout } from "@/components/layout/auth-layout";

type AuthRouteLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function AuthRouteLayout({ children }: AuthRouteLayoutProps) {
  return <AuthLayout>{children}</AuthLayout>;
}
