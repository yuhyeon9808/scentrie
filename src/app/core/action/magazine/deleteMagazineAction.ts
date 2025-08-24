'use server';

import { redirect } from 'next/navigation';
import { createSupabaseServerClient } from '../../config/supabase/createSupabaseServerClient';
import { createSupabaseServiceClient } from '../../config/supabase/supabaseService';

export async function deleteMagazineAction(magazineId: string): Promise<void> {
  const supaUser = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supaUser.auth.getUser();

  if (!user) {
    console.error('로그인 필요');
    return;
  }

  const supaAdmin = createSupabaseServiceClient();

  const { error } = await supaAdmin
    .from('Magazines')
    .delete()
    .eq('id', magazineId);

  if (error) {
    console.error('삭제 실패:', error.message);
    return;
  }

  redirect('/magazine');
}
