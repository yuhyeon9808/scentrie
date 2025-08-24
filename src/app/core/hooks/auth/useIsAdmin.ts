'use client';

import { useEffect, useState } from 'react';
import { createSupabaseBrowserClient } from '../../config/supabase/supabaseBrowser';

export function useIsAdmin() {
  const [isAdmin, setIsAdmin] = useState(false);
  const supabase = createSupabaseBrowserClient();

  useEffect(() => {
    async function fetchAdmin() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;
      const { data } = await supabase
        .from('Users')
        .select('is_admin')
        .eq('user_id', user.id)
        .maybeSingle();
      setIsAdmin(!!data?.is_admin);
    }
    fetchAdmin();
  }, [supabase]);

  return isAdmin;
}
