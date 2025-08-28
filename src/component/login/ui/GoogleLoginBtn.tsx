import Image from 'next/image';
import googleIcon from '@/assets/img/google.png';
import { createSupabaseBrowserClient } from '@/app/core/config/supabase/supabaseBrowser';

export default function GoogleLoginBtn() {
  const handleLogin = async () => {
    const supabase = createSupabaseBrowserClient();
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
  };

  return (
    <button
      onClick={handleLogin}
      className="sm:w-[365px] w-[320px] h-[56px] flex items-center justify-center gap-3 rounded-md bg-white border border-gray-300 text-font-20 hover:opacity-80 font-semibold"
    >
      <Image src={googleIcon} alt="Google" width={24} height={24} />
      <span className="text-gray-700 ">구글 계정으로 로그인</span>
    </button>
  );
}
