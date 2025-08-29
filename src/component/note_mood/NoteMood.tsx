'use client';
import React from 'react';
import Skeleton from '../common/Skeleton';
import BorderBtn from '../common/BorderBtn';
import { MOODS, NOTEMOODTABS, NOTES } from '@/app/core/constants/perfumeMeta';
import ProductCardList from '../product/ui/ProductCardList';
import { useUIStore } from '@/app/core/store/useUIStore';
import { usePerfumes } from '@/app/core/hooks/perfume/usePerfumes';

function NoteMoodSkeleton({ activeTab }: { activeTab: string }) {
  const tab = activeTab === '노트' ? NOTES : MOODS;
  return (
    <>
      <div className="w-full mt-14 flex flex-wrap gap-[34px] pb-14">
        {tab.map((item) => (
          <BorderBtn key={item.id} label={item.name} menu />
        ))}
      </div>
      <div className="mx-auto w-full">
        <div className="w-full rail flex flex-wrap gap-[34px] pb-14">
          {Array.from({ length: 8 }).map((_, idx) => (
            <Skeleton key={idx} />
          ))}
        </div>
      </div>
    </>
  );
}

export default function NoteMood({ activeTab }: { activeTab: string }) {
  const { isLoading, error } = usePerfumes();

  const setActiveMenu = useUIStore((state) => state.setActiveMenu);

  if (isLoading) return <NoteMoodSkeleton activeTab={activeTab} />;
  if (error) return <p>오류 발생: {(error as Error).message}</p>;

  const tab = activeTab === '노트' ? NOTES : MOODS;
  const path =
    activeTab === '노트' ? NOTEMOODTABS[0].path : NOTEMOODTABS[1].path;

  return (
    <>
      <div className="w-full mt-14 flex flex-wrap gap-[34px] pb-14">
        {tab.map((item) => (
          <BorderBtn
            key={item.id}
            label={item.name}
            menu
            href={`${path}/${encodeURIComponent(item.name)}`}
            click={() => setActiveMenu(item.name)}
          />
        ))}
      </div>
      <ProductCardList />
    </>
  );
}
