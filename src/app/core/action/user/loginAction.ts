'use server';

import { createSupabaseServerClient } from '../../config/supabase/createSupabaseServerClient';

export async function loginAction(formData: FormData) {
  const supabase = await createSupabaseServerClient();
  const email = String(formData.get('email'));
  const password = String(formData.get('password'));

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !data.session) {
    return;
  }

  return { success: true };
}
