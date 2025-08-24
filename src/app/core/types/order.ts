export interface Brand {
  id: number;
  name: string;
  en_name: string;
}
export interface Perfumes {
  id: number;
  name: string;
  Brands: Brand;
}
export interface PerfumeVariant {
  id: number;
  volume: number;
  price: number;
  variant_image_url: string;
  Perfumes: Perfumes;
}
export interface OrderItem {
  id: number;
  order_no: string;
  ordered_at: string;
  status: string;
  quantity: number;
  user_id: string;
  PerfumeVariants: PerfumeVariant | null;
}
