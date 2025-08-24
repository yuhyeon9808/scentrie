'use client';
import React from 'react';
import BorderBtn from '../common/BorderBtn';
import Skeleton from '../common/Skeleton';
import { BRANDS } from '@/app/core/constants/perfumeMeta';
import { useUIStore } from '@/app/core/store/useUIStore';
import ProductCardList from '../product/ui/ProductCardList';
import { usePerfumes } from '@/app/core/hooks/perfume/usePerfumes';

function BrandSkeleton({ activeMenu }: { activeMenu: string }) {
  return (
    <div className="w-full sm:py-28 py-14">
      <div className="flex flex-col items-center">
        <span className="sm:text-font-48 text-font-32 leading-none mb-14 transition-opacity duration-150">
          {activeMenu}
        </span>
      </div>

      <div className="w-full mx-auto">
        <div className="rail flex flex-wrap w-full gap-[16px] sm:gap-[34px] pb-14">
          {BRANDS.map((brand) => (
            <BorderBtn key={brand.id} label={brand.name} menu />
          ))}
        </div>

        <div className="w-full mx-auto">
          <div className="rail flex flex-wrap w-full gap-[16px] sm:gap-[34px]">
            {Array.from({ length: 8 }).map((_, idx) => (
              <Skeleton key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Brand() {
  const { isLoading, error } = usePerfumes();
  const activeMenu = useUIStore((s) => s.activeMenu);
  const setActiveMenu = useUIStore((s) => s.setActiveMenu);
  if (isLoading) return <BrandSkeleton activeMenu={activeMenu} />;

  if (error) return <p>오류 발생: {(error as Error).message}</p>;

  return (
    <div className="w-full sm:py-28 py-14">
      <div className="flex flex-col items-center">
        <span className="sm:text-font-48 text-font-32 leading-none mb-14 transition-opacity duration-150">
          {activeMenu}
        </span>
      </div>

      <div className="w-full mx-auto">
        <div className="rail flex flex-wrap w-full gap-[16px] sm:gap-[34px] pb-14">
          {BRANDS.map((brand) => (
            <BorderBtn
              key={brand.id}
              label={brand.name}
              click={() => {
                setActiveMenu(brand.name);
              }}
              menu
            />
          ))}
        </div>

        <ProductCardList />
      </div>
    </div>
  );
}
