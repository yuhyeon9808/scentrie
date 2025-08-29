'use client';
import React from 'react';
import Cart from './Cart';
import Skeleton from '../common/Skeleton';
import WhiteBtn from '../common/WhiteBtn';
import { useUIStore } from '@/app/core/store/useUIStore';
import { useCart } from '@/app/core/hooks/cart/useCart';

function CartSkeleton() {
  return (
    <div className="px-4 sm:px-5 ">
      <div className="flex sm:flex-row flex-col sm:gap-10 gap-5 items-center sm:items-start sm:py-28 py-14">
        <div className="w-[250px] h-[250px] lg:w-[270px] lg:h-[270px] rounded-md mx-auto sm:mx-0">
          <Skeleton w={270} h={270} />
        </div>

        <div className="mx-auto sm:mx-0 w-[250px] lg:w-[270px] sm:w-auto text-left mt-5 sm:mt-0">
          <div className="flex flex-col gap-6 text-font-20 font-medium opacity-90">
            <span className="md:text-font-24 text-lg font-semibold">
              <div className="flex flex-col md:flex-row gap-5 select-text">
                <div className="skeleton w-full h-8"></div>
                <div className="skeleton sm:w-[90%] w-[80%] h-8"></div>
              </div>
            </span>

            <div className="skeleton w-[30%] h-7"></div>
            <div className="skeleton w-[50%] h-7"></div>

            <div className="flex justify-between w-[160px] border rounded-md md:text-font-24">
              <button type="button" className="px-5 py-1">
                -
              </button>
              <div className="px-5 py-1">0</div>
              <button type="button" className="px-5 py-1">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-4 py-6 border-y text-font-20">
        <span className="font-semibold">총 금액</span>
        <span className="font-bold">0원</span>
      </div>
      <div className="flex justify-end sm:py28- py-14">
        <WhiteBtn label="구매하기" width={110} />
      </div>
    </div>
  );
}

export default function CartView() {
  const { data, isLoading, error } = useCart();
  const setActiveMenu = useUIStore((state) => state.setActiveMenu);

  if (isLoading) return <CartSkeleton />;

  if (error) return <div>에러가 발생했어요</div>;

  if (!data || data.length === 0)
    return (
      <div className="flex justify-center">
        <div className="flex flex-col gap-10 px-4 md:px-20 pt-28 pb-96 max-w-[1000px] w-full">
          <p className=" text-font-24 md:text-font-30">
            장바구니에 물품이 없습니다.
          </p>
          <WhiteBtn
            label="담으러가기"
            width={150}
            click={() => setActiveMenu('전체 상품')}
            href="/product/1"
          />
        </div>
      </div>
    );

  return <Cart items={data} />;
}
