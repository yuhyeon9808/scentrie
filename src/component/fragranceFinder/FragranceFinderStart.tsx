import Image from 'next/image';
import React from 'react';
import finder from '@/assets/img/finder2.png';
import PurpleBtn from './ui/PurpleBtn';

export default function FragranceFinderStart() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col items-center my-28 h-auto rounded-md pb-36 bg-sub-bg lg:w-[80%] w-full text-center text-muted lg:text-font-30 md:text-font-24 text-font-20">
        <div className="w-full sm:px-14 px-5 lg:w-[940px]">
          <span className="block pt-36 pb-3 lg:pb-5 font-bold  text-subtitle lg:text-font-64 sm:text-font-48 text-font-30">
            향수 취향 테스트
          </span>

          <div className="hidden sm:block pb-14 text-font-24">
            <p>오늘의 향기, 어떤 무드를 담고 싶으신가요?</p>
            <p>당신의 취향을 기반으로 향수를 큐레이션해드립니다.</p>
          </div>
          <div className=" sm:hidden pb-14 text-font-16">
            <p>어떤 무드를 담고 싶으신가요?</p>
            <p>당신의 취향을 기반으로</p>
            <p>향수를 큐레이션해드립니다.</p>
          </div>
          <Image
            src={finder}
            alt="향수"
            width={670}
            height={513}
            className="mx-auto mb-20 object-contain"
          />
          <PurpleBtn label="테스트 시작하기" href="/fragrance_finder/1" />
        </div>
      </div>
    </div>
  );
}
