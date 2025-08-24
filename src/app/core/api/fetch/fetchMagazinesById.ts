import { createSupabaseBrowserClient } from '../../config/supabase/supabaseBrowser';
import { Magazine } from '../../types/magazine';

export async function fetchMagazinesById(id: string): Promise<Magazine | null> {
  const supabase = createSupabaseBrowserClient();

  const { data, error } = await supabase
    .from('Magazines')
    .select('id, title, content, cover_image, sub_image_1, sub_image_2, email')
    .eq('id', id)
    .maybeSingle();

  if (error || !data) return null;

  return {
    id: String(data.id),
    email: data.email,
    title: data.title,
    content: data.content,
    cover_image: data.cover_image,
    sub_image_1: data.sub_image_1 ?? null,
    sub_image_2: data.sub_image_2 ?? null,
  };
}
