import React from 'react';
import Image from 'next/image';
import subBn from '@/assets/img/subBanner_bg.png';
import EntryButton from './ui/EntryButton';

export default function SubBanner() {
  return (
    <div className="flex w-full flex-col md:flex-row items-center bg-[#D4B2C2] min-h-[256px]">
      <div className="relative w-full md:w-1/2 aspect-[770/400] min-h-[256px]">
        <Image
          src={subBn}
          alt="향수 정기 구독"
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </div>
      <div className="flex flex-col justify-center items-center py-8  font-semibold text-primary-p md:w-1/2 lg:text-font-32 sm:text-font-24 text-font-20">
        <div>
          <p>매달 새롭게,</p>
          <p>세르니에의 다양한 브랜드와 함께 </p>
          <p>당신을 위한 향을 만나보세요.</p>
          <div className="mt-4">
            <EntryButton href="/product/detail/41" variant="filled" />
          </div>
        </div>
      </div>
    </div>
  );
}
