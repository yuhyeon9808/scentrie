'use client';

import { useEffect } from 'react';
import type { User, Session } from '@supabase/supabase-js';
import Loading from '@/component/common/Loading';
import { createSupabaseBrowserClient } from '@/app/core/config/supabase/supabaseBrowser';
export default function AuthCallback() {
  useEffect(() => {
    const supabase = createSupabaseBrowserClient();
    const doneRef = { current: false };
    const ensureUser = async (user: User) => {
      const payload = {
        user_id: user.id,
        email: user.email ?? null,
      };

      const { data, error } = await supabase
        .from('Users')
        .upsert(payload, { onConflict: 'user_id' })
        .select('*')
        .single();

      if (error) throw error;
      return data;
    };

    const finish = async (session: Session | null) => {
      if (doneRef.current) return;
      if (!session?.user) return;

      try {
        await ensureUser(session.user);
        doneRef.current = true;
        window.location.replace('/');
      } catch (e) {
        console.error('ensureUser 실패:', e);
      }
    };

    supabase.auth.getSession().then(({ data, error }) => {
      console.log('[getSession]', { data, error });
      if (data?.session) finish(data.session);
    });

    const { data: sub } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('[onAuthStateChange]', event, session);
        if (event === 'SIGNED_IN') finish(session);
      }
    );

    return () => {
      sub?.subscription.unsubscribe();
    };
  }, []);

  return <Loading />;
}
