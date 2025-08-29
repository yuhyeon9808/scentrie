'use client';
import Image from 'next/image';
import WhiteBtn from '../common/WhiteBtn';
import { useRecentProducts } from '@/app/core/hooks/useRecentProducts';
import { BASE_URL } from '@/app/core/constants/etc';

export default function ViewedProducts() {
  const { recent } = useRecentProducts();

  if (recent.length === 0)
    return (
      <div className="flex justify-center py-56 opacity-80 text-font-30">
        최근 본 상품이 없습니다.
      </div>
    );

  return (
    <div className="pt-14">
      <span className="sm:text-font-40 text-font-30 font-bold ">
        VIEWED HISTORY
      </span>
      <div className="mt-14 border-t">
        {recent.map((item) => (
          <div
            className="flex justify-center md:justify-start border-b"
            key={item.id}
          >
            <div className="w-full flex items-center  lg:flex-row flex-col md:pl-5 pl-0  py-10 ">
              <div className="flex justify-center w-full h-[270px] lg:w-[270px] bg-sub-bg rounded-md ">
                <Image
                  src={BASE_URL + encodeURIComponent(item.image)}
                  alt={item.name}
                  width={230}
                  height={230}
                  className="w-[270px] h-[270px]"
                />
              </div>
              <div className="flex flex-col justify-center self-start lg:self-center sm:gap-10 gap-5 text-font-2 lg:ml-14 mt-5 lg:mt-0 text-font-20">
                <div className="sm:text-font-24 text-font-20 font-semibold ">
                  <span className="block md:inline-block">{`[ ${item.brand} ]`}</span>
                  <span>{` ${item.name}`}</span>
                </div>
                <WhiteBtn
                  label="상품 보러 가기"
                  width={150}
                  href={'/product/detail/' + encodeURIComponent(item.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
