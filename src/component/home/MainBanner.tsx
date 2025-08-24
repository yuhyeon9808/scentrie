import React from 'react';
import Image from 'next/image';
import mainBanner from '@/assets/img/mainBanner_bg.png';
import EntryButton from './ui/EntryButton';

export default function MainBanner() {
  return (
    <div className="relative flex items-center">
      <div className="absolute z-10 font-semibold px-header-middle-base sm:px-header-middle-sm md:px-header-middle-md lg:px-header-middle-lg">
        <div className="mb-5 xl:mb-7  text-font-24 sm:text-font-32 xl:text-font-40">
          <p>향기로 시작하는 오늘</p>
          <p>세르니에가 함께 합니다.</p>
        </div>
        <EntryButton href="/fragrance_finder" />
      </div>
      <Image
        src={mainBanner}
        alt="향수 취향 테스트"
        width={975}
        height={260}
        sizes="100%"
        className="w-full min-h-[275px] object-cover"
      />
    </div>
  );
}
