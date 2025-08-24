export interface Note {
  id: number;
  name: string;
}

export interface Mood {
  id: number;
  name: string;
}

export interface PerfumeVariant {
  id: number;
  perfume_id: number;
  volume: number;
  price: number;
  variant_image_url: string;
}

export interface BrandMini {
  name: string;
  en_name: string;
}

export interface Perfume {
  id: number;
  name: string;
  thumbnail_url: string;
  brand: BrandMini | null;
  PerfumeNotes: Note[];
  PerfumeMoods: Mood[];
}
export interface PerfumeRowRaw {
  id: number;
  name: string;
  thumbnail_url: string | null;
  brand: { name: string | null; en_name: string | null } | null;
  PerfumeNotes: { Notes: Note | null }[] | null;
  PerfumeMoods: { Moods: Mood | null }[] | null;
}

export interface PerfumeById {
  id: number;
  name: string;
  description: string;
  notes: string | null;
  main_image_url: string;
  thumbnail_url: string;
  brand: { name: string; en_name: string } | null;
  variants: PerfumeVariant[];
}

interface RawBrand {
  name: string | null;
  en_name: string | null;
}

export interface RawVariant {
  id: number;
  perfume_id: number;
  volume: number;
  price: number;
  variant_image_url: string;
}

export interface Raw {
  id: number;
  name: string;
  description: string;
  notes: string;
  main_image_url: string;
  thumbnail_url: string;
  brand: RawBrand | null;
  PerfumeVariants: RawVariant[] | null;
}

export interface RecentProduct {
  id: string;
  name: string;
  brand: string;
  image: string;
}
