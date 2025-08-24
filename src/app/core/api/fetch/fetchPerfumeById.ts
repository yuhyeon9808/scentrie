import { createSupabaseServerClient } from '../../config/supabase/createSupabaseServerClient';
import { PerfumeById, PerfumeVariant, Raw } from '../../types/perfume';

export async function fetchPerfumeById(
  id: number
): Promise<PerfumeById | null> {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from('Perfumes')
    .select(
      `
      id, name, description, notes, main_image_url,thumbnail_url,
      brand:Brands!Perfumes_brand_id_fkey(name, en_name),
      PerfumeVariants(id, perfume_id, volume, price, variant_image_url)
    `
    )
    .eq('id', id)
    .maybeSingle();

  if (error || !data) return null;

  const row = data as unknown as Raw;

  const variants: PerfumeVariant[] = (row.PerfumeVariants ?? []).map((v) => ({
    id: Number(v.id),
    perfume_id: Number(v.perfume_id),
    volume: Number(v.volume ?? ''),
    price: Number(v.price ?? 0),
    variant_image_url: v.variant_image_url ?? '',
  }));

  return {
    id: row.id,
    name: row.name,
    description: row.description,
    notes: row.notes,
    main_image_url: row.main_image_url,
    thumbnail_url: row.thumbnail_url,
    brand: row.brand
      ? { name: row.brand.name ?? '', en_name: row.brand.en_name ?? '' }
      : null,
    variants,
  };
}
