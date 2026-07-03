import { cache } from "react";

import { createServerSupabaseClient } from "@/lib/supabase";

export const getCurrentUser = cache(async () => {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    return null;
  }

  return data.user;
});
