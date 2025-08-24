"use client";
import { getCurrentUserId } from "@/app/auth/getCurrentUserId";
import type { OrderItem } from "../../types/order";
import { createSupabaseBrowserClient } from "../../config/supabase/supabaseBrowser";

interface FetchOrdersParams {
  from?: string;
  to?: string;
}

export async function fetchOrders({
  from,
  to,
}: FetchOrdersParams): Promise<OrderItem[]> {
  const supabase = createSupabaseBrowserClient();

  const userId = await getCurrentUserId();
  if (!userId) {
    return [];
  }

  let query = supabase
    .from("Orders")
    .select(
      `
    id,
    order_no,
    ordered_at,
    quantity,
    status,
    PerfumeVariants (
      variant_image_url,
      price,
      volume,
      Perfumes (
        name,
        Brands ( name )
      )
    )
  `
    )
    .eq("user_id", userId)
    .order("ordered_at", { ascending: false });

  if (from) query = query.gte("ordered_at", from);
  if (to) query = query.lte("ordered_at", to);

  const { data, error } = await query;
  if (error) {
    console.error("[fetchOrders] supabase error:", error);
    return [];
  }

  return (data ?? []) as OrderItem[];
}
