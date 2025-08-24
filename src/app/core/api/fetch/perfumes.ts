import { createSupabaseBrowserClient } from '../../config/supabase/supabaseBrowser';
import type { Perfume, PerfumeRowRaw } from '../../types/perfume';

export async function fetchPerfumes(): Promise<Perfume[]> {
  const supabase = createSupabaseBrowserClient();

  const { data, error } = await supabase
    .from('Perfumes')
    .select(
      `
      id, name, thumbnail_url,
      brand:Brands!Perfumes_brand_id_fkey(name, en_name),
      PerfumeNotes(Notes(id, name)),
      PerfumeMoods(Moods(id, name))
    `
    )
    .returns<PerfumeRowRaw[]>();

  if (error || !data) {
    console.error('fetchPerfumes error:', error);
    return [];
  }

  return data.map((p) => ({
    id: p.id,
    name: p.name,
    thumbnail_url: p.thumbnail_url ?? '',
    brand: p.brand
      ? { name: p.brand.name ?? '', en_name: p.brand.en_name ?? '' }
      : null,
    PerfumeNotes: (p.PerfumeNotes ?? []).flatMap((x) =>
      x.Notes ? [x.Notes] : []
    ),
    PerfumeMoods: (p.PerfumeMoods ?? []).flatMap((x) =>
      x.Moods ? [x.Moods] : []
    ),
  }));
}
