import { createSupabaseBrowserClient } from '../../config/supabase/supabaseBrowser';

export async function removeCartItem(
  perfumeId: number,
  volumeId: number,
  n = 1
) {
  const supabase = createSupabaseBrowserClient();

  const {
    data: { user },
    error: uerr,
  } = await supabase.auth.getUser();

  if (uerr || !user) return;

  const { data: row, error: selErr } = await supabase
    .from('CartItems')
    .select('id, quantity')
    .eq('user_id', user.id)
    .eq('perfume_id', perfumeId)
    .eq('volume_id', volumeId)
    .maybeSingle();

  if (selErr) return { message: selErr.message };
  if (!row) return { message: 'not-found' };

  const nextQty = row.quantity - n;

  if (nextQty === 0) {
    const { error } = await supabase
      .from('CartItems')
      .delete()
      .eq('id', row.id);

    if (error) {
      console.error('장바구니 삭제 실패:', error);
      return { message: error.message };
    }
    return { message: 'deleted' };
  }

  const { data, error } = await supabase
    .from('CartItems')
    .update({ quantity: nextQty })
    .eq('id', row.id)
    .select()
    .single();

  if (error) {
    console.error('수량 감소 실패:', error);
    return { message: error.message };
  }
  return data;
}

export async function clearCart() {
  const supabase = createSupabaseBrowserClient();

  const {
    data: { user },
    error: uerr,
  } = await supabase.auth.getUser();

  if (uerr || !user) return;

  const { error } = await supabase
    .from('CartItems')
    .delete()
    .eq('user_id', user.id);

  if (error) return { message: error.message };
}
