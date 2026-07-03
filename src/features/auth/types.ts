import type { User } from "@supabase/supabase-js";

import type { UserRole } from "@/types/domain";

export type AuthSessionUser = Pick<User, "id" | "email" | "created_at"> &
  Readonly<{
    role?: UserRole;
  }>;

export type AuthState = Readonly<{
  user: AuthSessionUser | null;
}>;
