'use client';
import React from 'react';
import RecommendOptions from './RecommendOptions';
import BorderBtn from '@/component/common/BorderBtn';
import WhiteBtn from '../common/WhiteBtn';
import { useRouter } from 'next/navigation';
import { RecItem, Result } from '@/app/core/types/fragranceFinder';
import { useQuizStore } from '@/app/core/store/useQuizStore';

interface Props {
  item: Result;
  rec: RecItem[];
}

export default function FragranceFinderResult({ item, rec }: Props) {
  const router = useRouter();

  const handleRestart: React.MouseEventHandler = (e) => {
    e.preventDefault();
    useQuizStore.getState().reset();
    useQuizStore.persist?.clearStorage?.();
    router.replace('/fragrance_finder');
  };

  const handleShare = async (e?: React.MouseEvent) => {
    e?.preventDefault?.();
    const url = window.location.href;
    const title = '센트리에 취향 결과';
    const text = '내 향수 취향 결과를 공유합니다';
    try {
      await navigator.share({ title, text, url });
    } catch {}
  };

  if (!item) {
    return (
      <div className="flex flex-col items-center">
        <div className="flex w-full flex-col items-center sm:mt-28 h-auto rounded-md bg-sub-bg text-center text-muted text-font-30 lg:w-[80%]">
          <div className="w-full px-6 xl:w-[1000px] h-[1460px] sm:py-28 py-14"></div>
          <div className="w-full lg:w-[1000px] px-6  grid grid-cols-2 gap-8 sm:py-28 py-14">
            <BorderBtn label="테스트 다시하기" click={handleRestart} />
            <WhiteBtn label="친구에게 공유하기" click={handleShare} test />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full flex-col items-center sm:mt-28 h-auto rounded-md bg-sub-bg text-center text-muted text-font-30 lg:w-[80%]">
        <div className="w-full px-6 xl:w-[1000px] sm:py-28 py-14">
          <div className="flex flex-col gap-2 font-bold text-subtitle lg:text-font-64 sm:text-font-48 text-font-30">
            <span className="block">{item.code}</span>
            <span className="block">{item.title}</span>
            <p className="md:text-font-30 sm:text-font-20 text-font-16 text-muted font-medium">
              {item.detail}
            </p>
            <p className="pb-14 md:text-font-24 sm:text-font-20 text-font-16 text-muted font-medium">
              {item.notes.join(', ')}
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <RecommendOptions rec={rec} />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[950px] px-6  grid grid-cols-2 gap-8 sm:py-28 py-14">
        <BorderBtn label="테스트 다시하기" click={handleRestart} />
        <WhiteBtn label="친구에게 공유하기" click={handleShare} test />
      </div>
    </div>
  );
}
