'use client';

import React from 'react';
import Skeleton from '../common/Skeleton';
import ProductCardList from './ui/ProductCardList';
import { usePerfumes } from '@/app/core/hooks/perfume/usePerfumes';

export default function ProductView({
  keyword = '',
  page,
}: {
  keyword?: string;
  page?: string;
}) {
  const query = keyword ? decodeURIComponent(keyword) : '';
  const { isLoading, error } = usePerfumes();

  if (isLoading) {
    return (
      <div className="mx-auto w-full sm:py-28 py-14">
        <div className="flex justify-center">
          <span className="mb-14 leading-none sm:text-font-48 text-font-30 opacity-0 font-medium">
            전체 상품
          </span>
        </div>
        <div className="rail mx-auto flex flex-wrap justify-center gap-[34px]">
          {Array.from({ length: 12 }).map((_, idx) => (
            <Skeleton key={idx} />
          ))}
        </div>
      </div>
    );
  }

  if (error) return <p>오류 발생: {(error as Error).message}</p>;

  return (
    <div className="mx-auto w-full sm:py-28 py-14">
      <div className="rail flex flex-wrap justify-center gap-[34px]">
        <span className="mb-14 leading-none sm:text-font-48 text-font-30 font-medium">
          {query ? query : '전체 상품'}
        </span>
      </div>
      <ProductCardList query={query} page={page} />
    </div>
  );
}
