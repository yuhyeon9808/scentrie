'use client';
import Image from 'next/image';
import React from 'react';

import { useUIStore } from '@/app/core/store/useUIStore';
import { BRAND_LOGO } from '@/app/core/constants/perfumeMeta';

export default function Brands() {
  const setActiveMenu = useUIStore((state) => state.setActiveMenu);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-12">
      {BRAND_LOGO.map(({ white, black, name }) => (
        <div
          key={name}
          onClick={() => setActiveMenu(name)}
          className="group relative cursor-pointer w-50 h-20 lg:w-60 lg:h-27 rounded-full border-2 hover:bg-primary-w"
        >
          <Image
            src={white}
            alt={name}
            fill
            sizes="100vw"
            className="block object-contain px-6 py-7 lg:px-7 lg:py-10 group-hover:hidden"
          />
          <Image
            src={black}
            alt={name}
            fill
            sizes="100vw"
            className="hidden object-contain px-6 py-7 lg:px-7 lg:py-10 group-hover:block"
          />
        </div>
      ))}
    </div>
  );
}
