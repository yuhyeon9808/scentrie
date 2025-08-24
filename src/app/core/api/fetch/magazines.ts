"use client";
import { createSupabaseBrowserClient } from "../../config/supabase/supabaseBrowser";

export default async function fetchMagazine() {
  const supabase = createSupabaseBrowserClient();

  const { data, error } = await supabase
    .from("Magazines")
    .select("id, email, title, cover_image");

  if (error) {
    console.error("Magazines 조회 오류:", error);
    throw error;
  }

  return data ?? [];
}
