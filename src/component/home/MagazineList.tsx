'use client';
import React from 'react';
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';

import MagazineCard from '@/component/home/MagazineCard';
import Skeleton from '@/component/common/Skeleton';
import { useMagazines } from '@/app/core/hooks/magazine/useMagazines';

export default function MagazineList() {
  const { data, isLoading, error } = useMagazines();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Skeleton w={300} h={300} key={idx} />
        ))}
      </div>
    );
  }

  if (!data) return;
  if (error) return <p>오류 발생: {(error as Error).message}</p>;

  return (
    <div className="mx-auto w-full max-w-[1280px]">
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={24}
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        centeredSlides
        centeredSlidesBounds
        className="magazine-swiper"
      >
        {data.map((mag) => (
          <SwiperSlide key={mag.id} className="!w-[300px]">
            <MagazineCard magazines={mag} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
