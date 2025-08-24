'use server';

import { createSupabaseServerClient } from '../../config/supabase/createSupabaseServerClient';

export async function joinAction(formData: FormData) {
  const email = String(formData.get('email')).trim();
  const password = String(formData.get('password'));
  const username = String(formData.get('name')).trim();
  const phone = String(formData.get('phone')).trim();
  const addr1 = String(formData.get('addr1')).trim();
  const addr2 = String(formData.get('addr2')).trim();
  const address = [addr1, addr2].join(' ');
  const code = String(formData.get('code')).trim();

  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error('[SIGNUP ERROR]', error);
    return { message: error.message };
  }

  const user = data.user;
  if (!user) {
    return { message: '회원 생성에 실패했습니다.' };
  }

  const { error: insertError } = await supabase.from('Users').insert({
    user_id: user.id,
    email,
    password,
    username,
    phone,
    address,
    code,
  });

  if (insertError) {
    console.error('[USERS INSERT ERROR]', insertError);
    return { message: insertError.message };
  }

  return { userId: user.id };
}
