'use client';
import { createSupabaseBrowserClient } from '@/app/core/config/supabase/supabaseBrowser';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const onLogout = async () => {
    const supabase = createSupabaseBrowserClient();
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error('로그아웃 실패:', error);
      return;
    }

    router.replace('/');
    router.refresh();
  };

  return (
    <button onClick={onLogout} className="underline">
      SIGN OUT
    </button>
  );
}
