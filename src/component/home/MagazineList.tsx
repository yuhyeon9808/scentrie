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
      <div className="flex justify-center aspect-[25/14]">
        <Skeleton w={320} h={428} />
      </div>
    );
  }

  if (error) return <p>오류 발생: {(error as Error).message}</p>;
  if (!data || data.length === 0) return null;

  return (
    <div className="mx-auto w-full sm:px-10 md:px-20">
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={24}
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        watchOverflow
      >
        {data.map((mag) => (
          <SwiperSlide
            key={mag.id}
            className="!h-auto !w-full lg:!w-[calc(50%-12px)] mb-8"
          >
            <MagazineCard magazines={mag} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
