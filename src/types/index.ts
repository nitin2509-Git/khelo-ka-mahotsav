export type SiteConfig = Readonly<{
  name: string;
  description: string;
}>;

export type NavItem = Readonly<{
  title: string;
  href: `/${string}`;
}>;

export type Database = {
  public: {
    Tables: Record<string, never>;
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

export type * from "@/types/domain";
