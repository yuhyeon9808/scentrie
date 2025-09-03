import React from 'react';
import Image from 'next/image';
import subBn from '@/assets/img/subBanner_bg.png';
import EntryButton from './ui/EntryButton';

export default function SubBanner() {
  return (
    <div className="flex w-full flex-col md:flex-row items-center bg-[#35203e] min-h-[256px] overflow-hidden">
      <div className="relative w-full md:hidden min-h-[400px]">
        <Image
          src={subBn}
          alt="향수 정기 구독"
          fill
          className="object-cover "
          sizes="(max-width: 767px) 100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center ">
          <div className="max-w-[90%] sm:text-font-30 text-font-24 font-semibold">
            <p>매달 센트리에가</p>
            <p>새롭게 제안하는 특별한 향으로</p>
            <p>당신의 하루를 완성하세요.</p>
            <div className="mt-4">
              <EntryButton href="/product/detail/41" />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex relative w-full md:w-1/2 md:aspect-[770/400] min-h-[263px]">
        <Image
          src={subBn}
          alt="향수 정기 구독"
          fill
          className="object-cover object-[center_20%]"
          sizes="(max-width: 1200px) 50vw, 50vw"
        />
      </div>

      <div className="hidden md:flex flex-col justify-center items-center py-8 font-semibold  md:w-1/2 lg:text-font-30  text-font-24">
        <div>
          <p>매달 센트리에가</p>
          <p>새롭게 제안하는 특별한 향으로</p>
          <p>당신의 하루를 완성하세요.</p>
          <div className="mt-5">
            <EntryButton href="/product/detail/41" />
          </div>
        </div>
      </div>
    </div>
  );
}
