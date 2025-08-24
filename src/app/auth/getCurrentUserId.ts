'use client';

import { createSupabaseBrowserClient } from '../core/config/supabase/supabaseBrowser';

export async function getCurrentUserId(): Promise<string | null> {
  const supabase = createSupabaseBrowserClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) return null;
  return data.user.id;
}
