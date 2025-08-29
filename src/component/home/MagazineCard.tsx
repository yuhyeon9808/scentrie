import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { BASE_URL } from '@/app/core/constants/etc';
import { MagazineCardProps } from '@/app/core/types/magazine';

export default function MagazineCard({ magazines }: MagazineCardProps) {
  return (
    <div className="overflow-hidden rounded-md shadow-md   ">
      <Link href={`/magazine/detail/${magazines.id}`}>
        <Image
          src={BASE_URL + encodeURIComponent(magazines.cover_image)}
          alt={magazines.title}
          width={300}
          height={300}
          className="min-w-[300px] w-[300px] h-[300px] object-contain hover:scale-110 transition-transform duration-200"
        />
      </Link>
    </div>
  );
}
