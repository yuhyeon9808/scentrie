export interface MagazineBoard {
  id: string;
  title: string;
  email: string | null;
  cover_image: string;
}

export interface Magazine {
  id: string;
  email: string | null;
  title: string;
  content: string;
  cover_image: string;
  sub_image_1?: string | null;
  sub_image_2?: string | null;
}

export interface MagazineCardProps {
  magazines: MagazineBoard;
}

export interface MagazineViewProps {
  magazine: Magazine;
}
