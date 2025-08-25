'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import BorderBtn from '@/component/common/BorderBtn';
import WhiteBtn from '../common/WhiteBtn';
import { PerfumeById } from '@/app/core/types/perfume';
import { addToCart } from '@/app/core/action/cart/addToCart';
import { useQueryClient } from '@tanstack/react-query';
import AccordionDetail from './ui/AccordionDetail';
import { useRecentProducts } from '@/app/core/hooks/useRecentProducts';
import { useVariantSelector } from '@/app/core/hooks/perfume/useVariantSelector';
import { useAuthGuard } from '@/app/core/hooks/auth/useAuthGuard';

export default function ProductDetail({ perfume }: { perfume: PerfumeById }) {
  const { addRecentProduct } = useRecentProducts();

  useEffect(() => {
    if (!perfume) return;
    addRecentProduct({
      id: String(perfume.id),
      name: perfume.name,
      brand: perfume.brand!.name,
      image: perfume.thumbnail_url,
    });
  }, [perfume, addRecentProduct]);

  const { volumes, selected, setSelected, imageSrc, setUseVariantImg } =
    useVariantSelector(perfume.variants, perfume.main_image_url);

  const qc = useQueryClient();
  const clickedOnce = useRef(false);
  const { requireLogin } = useAuthGuard();

  const addCart = async () => {
    if (!requireLogin('/cart')) return;
    if (!selected.variantId) return;

    await addToCart(perfume.id, 1, selected.variantId);

    if (!clickedOnce.current) {
      await qc.refetchQueries({ queryKey: ['cart'] });
      clickedOnce.current = true;
    } else {
      qc.invalidateQueries({ queryKey: ['cart'] });
    }
  };

  return (
    <div className="flex justify-center px-6 sm:px-16 md:px-20 xl:px-32">
      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-15 sm:py-28 py-14">
        <div className="lg:w-[480px]">
          <div className="lg:sticky lg:top-28">
            <div className="relative aspect-square w-full rounded-lg bg-sub-bg ">
              <Image
                src={imageSrc!}
                alt={perfume.name}
                fill
                sizes="(max-width: 768px) 100vw, 520px"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        <div className="lg:min-w-[550px]">
          <div className="flex-1 flex flex-col sm:gap-5 gap-3">
            <div className="flex items-center gap-4 mt-7 lg:mt-0">
              <div className="flex flex-col md:flex-row md:items-center md:gap-2 font-bold sm:text-font-24 text-font-20 select-text">
                <span>{`[ ${perfume.brand?.name} ]`}</span>
                <span>{perfume.name}</span>
              </div>
            </div>

            <span className="font-semibold text-font-20">
              {selected.price?.toLocaleString()}원
            </span>

            <div className="w-full grid grid-cols-4 sm:gap-4 gap-3">
              {volumes.map((vol) => (
                <BorderBtn
                  key={vol.id}
                  label={`${vol.volume}ml`}
                  py={0.5}
                  click={() => {
                    setUseVariantImg(true);
                    setSelected({
                      variantId: vol.id,
                      volume: vol.volume,
                      price: vol.price,
                    });
                  }}
                />
              ))}
            </div>

            <WhiteBtn label="장바구니에 담기" click={addCart} />

            <AccordionDetail perfume={perfume} />
          </div>
        </div>
      </div>
    </div>
  );
}
