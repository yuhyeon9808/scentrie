import { createSupabaseBrowserClient } from '../../config/supabase/supabaseBrowser';

export async function addToCart(
  perfumeId: number,
  quantity = 1,
  volumeId: number
) {
  const supabase = createSupabaseBrowserClient();

  const {
    data: { user },
    error: uerr,
  } = await supabase.auth.getUser();
  if (uerr || !user) {
    console.warn('로그인이 필요합니다.', uerr?.message);
    return { ok: false, message: 'not-authenticated' };
  }

  const info = {
    user_id: user.id,
    perfume_id: perfumeId,
    volume_id: volumeId,
  };

  const { data: existing, error: selErr } = await supabase
    .from('CartItems')
    .select('id, quantity')
    .match(info)
    .maybeSingle();

  if (selErr) {
    console.error('장바구니 조회 실패:', selErr);
    return { ok: false, message: selErr.message };
  }

  if (existing) {
    const addQuan = existing.quantity + quantity;
    const { data, error } = await supabase
      .from('CartItems')
      .update({ quantity: addQuan })
      .eq('id', existing.id)
      .select()
      .single();

    if (error) {
      console.error('수량 증가 실패:', error);
      return { message: error.message };
    }
    console.log('수량 증가 완료:', data);
    return data;
  } else {
    const { data, error } = await supabase
      .from('CartItems')
      .insert([{ ...info, quantity }])
      .select()
      .single();

    if (error) {
      console.error('장바구니 추가 실패:', error);
      return { message: error.message };
    }
    console.log('장바구니 추가 완료:', data);
    return data;
  }
}
