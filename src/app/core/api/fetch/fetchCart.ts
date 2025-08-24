import { createSupabaseBrowserClient } from '../../config/supabase/supabaseBrowser';
import { CartItem } from '../../types/cart';

export async function fetchCartList(): Promise<CartItem[]> {
  const supabase = createSupabaseBrowserClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return [];

  const { data, error } = await supabase
    .from('CartItems')
    .select(
      `
    id, quantity,
    Perfumes!CartItems_perfume_id_fkey (id,
      name,
      Brands!Perfumes_brand_id_fkey ( name )
    ),
    PerfumeVariants!CartItems_volume_id_fkey ( id, volume, price, variant_image_url )
  `
    )
    .eq('user_id', user.id)
    .order('id', { ascending: false });

  if (error || !data) return [];

  return data.map((d) => ({
    id: d.id,
    perfume_id: d.Perfumes.id,
    variant_id: d.PerfumeVariants.id,
    name: d.Perfumes.name,
    brand: d.Perfumes.Brands.name,
    volume: d.PerfumeVariants.volume,
    price: d.PerfumeVariants.price,
    quantity: d.quantity ?? 1,
    variant_image_url: d.PerfumeVariants.variant_image_url,
  }));
}
