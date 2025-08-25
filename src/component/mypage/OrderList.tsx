'use client';

import React, { useState } from 'react';
import Calendar from './ui/Calendar';
import WhiteBtn from '../common/WhiteBtn';
import MonthBtn from './ui/MonthBtn';
import Image from 'next/image';
import { fetchOrders } from '@/app/core/api/fetch/fetchOrders';
import { OrderItem } from '@/app/core/types/order';
import { BASE_URL } from '@/app/core/constants/etc';

export default function OrderList() {
  const [from, setFrom] = useState<string>('');
  const [to, setTo] = useState<string>('');
  const [orders, setOrders] = useState<OrderItem[]>([]);

  const handleFetchOrders = async () => {
    const data = await fetchOrders({
      from: from || undefined,
      to: to || undefined,
    });
    setOrders(data);
  };

  const handleToday = () => {
    const today = new Date().toISOString().split('T')[0];
    setFrom(today);
    setTo(today);
  };
  const handle3Months = () => {
    const d = new Date();
    const toDate = d.toISOString().split('T')[0];
    d.setMonth(d.getMonth() - 3);
    const fromDate = d.toISOString().split('T')[0];
    setFrom(fromDate);
    setTo(toDate);
  };
  const handle6Months = () => {
    const d = new Date();
    const toDate = d.toISOString().split('T')[0];
    d.setMonth(d.getMonth() - 6);
    const fromDate = d.toISOString().split('T')[0];
    setFrom(fromDate);
    setTo(toDate);
  };

  return (
    <div className=" w-full  ">
      <div className="flex flex-col gap-4 py-6 sm:py-14 md:flex-row md:justify-between ">
        <div className="hidden w-full lg:flex">
          <div className="flex w-full max-w-sm items-center justify-center gap-3 rounded-md border border-primary-w mr-5 ">
            <MonthBtn label="오늘" click={handleToday} />
            <span className="select-none text-primary-w/60">|</span>
            <MonthBtn label="3개월" click={handle3Months} />
            <span className="select-none text-primary-w/60">|</span>
            <MonthBtn label="6개월" click={handle6Months} />
          </div>
        </div>

        <div className="flex w-full gap-3 ">
          <div className="w-full flex md:flex-row flex-col justify-end items-center gap-3 ">
            <Calendar value={from} onChange={setFrom} />
            <span className="pt-1 hidden md:inline">-</span>
            <Calendar value={to} onChange={setTo} />
          </div>
          <WhiteBtn label="조회" click={handleFetchOrders} />
        </div>
      </div>

      <div className="border-y border-primary-w">
        {orders.length === 0 ? (
          <p className="text-center text-gray-400 text-font-20 py-28 sm:text-font-24 font-bold">
            조회된 주문이 없습니다.
          </p>
        ) : (
          <div className="divide-y divide-primary-w">
            {orders.map((order) => {
              const variant = order.PerfumeVariants;
              return (
                <div key={order.id} className="py-4 ">
                  <div className="flex items-center gap-3 px-4 pb-3 sm:px-6 border-b border-primary-w">
                    <p className="text-sm sm:text-base">{`${order.ordered_at} (${order.order_no})`}</p>
                  </div>

                  {variant && (
                    <div className="flex flex-col gap-4 px-4 pb-4 sm:px-6 md:flex-row md:items-start md:gap-6 mt-8">
                      <div className="relative w-full h-[200px] sm:h-[240px] md:w-[260px] md:h-[260px] rounded-md bg-sub-bg ">
                        <Image
                          src={
                            BASE_URL +
                            encodeURIComponent(variant.variant_image_url)
                          }
                          alt={variant.Perfumes.name}
                          fill
                          className="object-contain p-3 sm:p-4"
                          sizes="(max-width: 768px) 100vw, 260px"
                        />
                      </div>

                      <div className="flex flex-1 flex-col justify-center gap-2 sm:gap-3">
                        <div className="flex md:flex-row flex-col text-font-20 sm:text-font-24 font-bold">
                          <span>
                            {`[${variant.Perfumes.Brands.name}]`}&nbsp;
                          </span>
                          <span>{variant.Perfumes.name}</span>
                        </div>
                        <div className="text-font-16 sm:text-font-20">
                          <span className="font-semibold">
                            {`${variant.price.toLocaleString()}원 (${
                              order.quantity
                            }개)`}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 text-font-16 sm:text-font-20">
                          <span>{variant.volume}ml</span>
                          <span className="hidden sm:inline">·</span>
                          <span>{order.status}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
