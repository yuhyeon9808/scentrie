'use server';

import { revalidatePath } from 'next/cache';
import { createSupabaseServerClient } from '../../config/supabase/createSupabaseServerClient';

export async function updateUserInfo(formData: FormData) {
  const field = String(formData.get('field'));
  const value = String(formData.get('value')).trim();
  const addr1 = String(formData.get('addr1')).trim();
  const addr2 = String(formData.get('addr2')).trim();
  const address = [addr1, addr2].join(' ');
  const code = String(formData.get('code')).trim();
  if (!field || !value || !address || !code) {
    console.log('값이 없어 업데이트 안 함');
    return;
  }

  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    console.error('유저 인증 실패', userError);
    return;
  }

  let updateData: Record<string, string> = {};

  if (field === 'address') {
    updateData = { address: address, code: code };
  } else {
    updateData = { [field]: value };
  }

  const { error } = await supabase
    .from('Users')
    .update(updateData)
    .eq('user_id', user.id);

  if (error) {
    console.error('업데이트 실패', error);
  } else {
    console.log('업데이트 성공!', field, value);
  }

  revalidatePath('/mypage/profile');
}
