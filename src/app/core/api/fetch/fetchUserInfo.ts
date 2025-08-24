import { createSupabaseServerClientReadOnly } from '../../config/supabase/SupabaseServerClientReadOnly';

export async function fetchUserInfo() {
  const supabase = await createSupabaseServerClientReadOnly();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data } = await supabase
    .from('Users')
    .select('email, username, phone, address, password')
    .eq('user_id', user.id)
    .single();

  return data ?? null;
}
