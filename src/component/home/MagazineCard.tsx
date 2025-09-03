import Link from 'next/link';
import Image from 'next/image';
import { BASE_URL } from '@/app/core/constants/etc';
import { MagazineCardProps } from '@/app/core/types/magazine';

export default function MagazineCard({ magazines }: MagazineCardProps) {
  return (
    <Link href={`/magazine/detail/${magazines.id}`}>
      <div className="relative w-full aspect-[750/428] overflow-hidden rounded-md shadow-md">
        <Image
          src={BASE_URL + encodeURIComponent(magazines.cover_image.trim())}
          alt={magazines.title}
          fill
          unoptimized
          sizes="(max-width: 1099px) 100vw, 50vw"
          className="object-cover transition duration-300 hover:brightness-110 hover:-translate-y-2"
        />
      </div>
    </Link>
  );
}
