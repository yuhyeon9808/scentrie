'use server';

import { redirect } from 'next/navigation';
import { createSupabaseServerClient } from '../../config/supabase/createSupabaseServerClient';
import { createSupabaseServiceClient } from '../../config/supabase/supabaseService';

export async function createMagazineAction(formData: FormData): Promise<void> {
  const supaUser = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supaUser.auth.getUser();

  if (!user) return;

  const supaAdmin = createSupabaseServiceClient();

  const title = String(formData.get('title') || '');
  const content = String(formData.get('content') || '');
  const file1 = formData.get('file1') as File;
  const file2 = formData.get('file2') as File | null;
  const file3 = formData.get('file3') as File | null;

  const { error: upErr1 } = await supaAdmin.storage
    .from('perfume')
    .upload(file1.name, file1, { upsert: true });

  if (upErr1) {
    console.error('대표 이미지 업로드 실패:', upErr1.message);
    return;
  }

  const coverFileName = file1.name;

  let sub1FileName: string | null = null;
  if (file2) {
    const { error: upErr2 } = await supaAdmin.storage
      .from('perfume')
      .upload(file2.name, file2, { upsert: true });

    if (upErr2) {
      console.error('sub_image_1 업로드 실패:', upErr2.message);
    } else {
      sub1FileName = file2.name;
    }
  }

  let sub2FileName: string | null = null;
  if (file3) {
    const { error: upErr3 } = await supaAdmin.storage
      .from('perfume')
      .upload(file3.name, file3, { upsert: true });

    if (upErr3) {
      console.error('sub_image_2 업로드 실패:', upErr3.message);
    } else {
      sub2FileName = file3.name;
    }
  }

  const { error: dbErr } = await supaUser.from('Magazines').insert({
    title,
    content,
    cover_image: coverFileName,
    sub_image_1: sub1FileName || null,
    sub_image_2: sub2FileName || null,
    email: user.email,
  });

  if (dbErr) {
    console.error('DB insert 실패:', dbErr.message);
    return;
  }

  redirect('/magazine');
}
