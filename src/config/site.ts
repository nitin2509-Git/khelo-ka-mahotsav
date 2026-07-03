import { routes } from "@/lib/routes";
import type { NavItem, SiteConfig } from "@/types";

export const siteConfig = {
  name: "Khelo OS",
  description: "Production-grade foundation for the Khelo OS platform.",
} satisfies SiteConfig;

export const adminNavItems = [
  {
    title: "Admin",
    href: routes.admin,
  },
] satisfies NavItem[];
