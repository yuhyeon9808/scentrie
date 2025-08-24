import { BASE_URL } from '@/app/core/constants/etc';
import { RecItem } from '@/app/core/types/fragranceFinder';
import Image from 'next/image';
import React from 'react';

interface RecommendProps {
  rec: RecItem[];
}

export default function RecommendOptions({ rec }: RecommendProps) {
  return rec.map((item) => (
    <div
      key={`${item.brand}-${item.name}`}
      className="rounded-md border border-gray-200 bg-primary-w p-7"
    >
      <div className="flex md:flex-row flex-col items-center">
        <Image
          src={BASE_URL + encodeURIComponent(item.image)}
          width={220}
          height={220}
          alt={item.name}
          className="object-contain"
        />
        <div className="flex flex-col text-left gap-3 justify-center">
          <span className="sm:text-font-32 text-font-24 text-subtitle font-bold">{`${item.brand} - ${item.name}`}</span>
          <div className="md:text-font-24 sm:text-font-20 text-font-16">
            <span className="flex gap-2">{item.notes.join(', ')}</span>
            <p className="pt-3">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  ));
}
