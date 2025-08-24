'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import ProductCard from './ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import shuffle from 'lodash/shuffle';
import { useUIStore } from '@/app/core/store/useUIStore';
import { fetchPerfumes } from '@/app/core/api/fetch/perfumes';
import { filterPerfumesByWord } from '@/app/core/utils/filterPerfumes';
import Skeleton from '@/component/common/Skeleton';
import { groupPage } from '@/app/core/utils/groupPage';
import { PageNavigator } from '@/component/common/PageNavigator';

export default function ProductCardList({
  limit,
  query,
  page,
}: {
  limit?: number;
  query?: string;
  page?: string;
}) {
  const activeMenu = useUIStore((state) => state.activeMenu);
  const isLimited = typeof limit === 'number' && limit > 0;

  const {
    data: perfumes = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: isLimited ? ['perfumes', 'random', limit] : ['perfumes', 'all'],
    queryFn: fetchPerfumes,
    select: (all) => {
      if (!isLimited) return all;
      return all.length <= (limit ?? 0)
        ? all
        : shuffle([...all]).slice(0, limit);
    },
    staleTime: isLimited ? 0 : 5 * 60 * 1000,
    refetchOnMount: isLimited ? 'always' : false,
    refetchOnWindowFocus: isLimited ? 'always' : false,
  });

  const searchQuery = query?.trim();

  const list = React.useMemo(() => {
    if (searchQuery) {
      return filterPerfumesByWord(perfumes, searchQuery);
    }

    if (activeMenu === '전체 상품') {
      return perfumes;
    }

    return filterPerfumesByWord(perfumes, activeMenu);
  }, [perfumes, searchQuery, activeMenu]);

  const { paginated, startPage, endPage, allPage, currentPage } = groupPage({
    page: String(page ?? 1),
    data: list,
  });
  if (error) return <p>오류 발생: {(error as Error).message}</p>;

  if (isLoading) {
    return (
      <div className="w-full mx-auto">
        <div className="w-full rail flex flex-wrap sm:gap-[34px] gap-[16px]">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Skeleton key={idx} />
          ))}
        </div>
      </div>
    );
  }

  if (isLimited) {
    return (
      <section className="w-full">
        <div className="rail mx-auto">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={12}
            slidesPerView={2}
            slidesPerGroup={1}
            breakpoints={{
              320: { slidesPerView: 1, slidesPerGroup: 1 },
              548: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 12 },
              582: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 34 },
              866: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 34 },
              1150: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 34 },
            }}
            style={{ paddingBottom: 70 }}
          >
            {perfumes.map((p) => (
              <SwiperSlide key={p.id} className="w-full flex justify-center">
                <div className="w-[250px]">
                  <ProductCard perfume={p} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
  }

  if (list.length === 0) {
    return (
      <div className="w-full mx-auto">
        <div className="w-full rail flex flex-wrap sm:gap-[34px] gap-[16px]">
          <p className="mx-auto sm:py-28 py-14 text-font-32 opacity-80">
            검색된 상품이 없습니다.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto">
      <div className="w-full rail flex flex-wrap sm:gap-[34px] gap-[16px]">
        {paginated.map((p) => (
          <ProductCard perfume={p} key={p.id} />
        ))}
      </div>

      <div className="mt-10 flex justify-center w-full">
        {endPage !== 1 && (
          <PageNavigator
            basePath="/product"
            currentPage={currentPage}
            startPage={startPage}
            endPage={endPage}
            allPage={allPage}
          />
        )}
      </div>
    </div>
  );
}
