'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createSupabaseBrowserClient } from '@/app/core/config/supabase/supabaseBrowser';

export function useAuthGuard() {
  const router = useRouter();
  const supabase = createSupabaseBrowserClient();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setIsLoggedIn(!!data.session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_e, session) => {
      setIsLoggedIn(!!session);
    });
    return () => subscription.unsubscribe();
  }, [supabase]);

  const requireLogin = async (next: string): Promise<boolean> => {
    let ok = isLoggedIn;

    if (ok === null) {
      const { data } = await supabase.auth.getSession();
      ok = !!data.session;
      setIsLoggedIn(ok);
    }

    if (!ok) {
      router.replace(`/login?next=${encodeURIComponent(next)}`);
      return false;
    }
    return true;
  };

  const isReady = isLoggedIn !== null;

  return { isLoggedIn, isReady, requireLogin };
}
