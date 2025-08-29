import Image from 'next/image';

import WhiteBtn from '../common/WhiteBtn';
import { CartItem } from '@/app/core/types/cart';
import { BASE_URL } from '@/app/core/constants/etc';
import Counter from './ui/Counter';
import Modal from './ui/Modal';
import { useUIStore } from '@/app/core/store/useUIStore';

interface CartProps {
  items: CartItem[];
}
export default function Cart({ items }: CartProps) {
  const total = items.reduce((sum, it) => sum + it.price * it.quantity, 0);
  const fmt = (n: number) => n.toLocaleString('ko-KR');

  const setActiveMenu = useUIStore((state) => state.setActiveMenu);

  if (items.length === 0)
    return (
      <div className="flex justify-center">
        <div className="flex flex-col gap-10 px-4 md:px-20 pt-28 pb-96 max-w-[1000px] w-full">
          <p className=" text-font-24 md:text-font-30">
            장바구니에 물품이 없습니다.
          </p>
          <WhiteBtn
            label="담으러가기"
            width={150}
            href="/product/1"
            click={() => setActiveMenu('전체 상품')}
          />
        </div>
      </div>
    );

  return (
    <div className="flex justify-center ">
      <div className="flex w-[90%] max-w-[1000px] flex-col gap-10 sm:py-28 py-14 px-4 md:px-5 mx-auto">
        {items.map((it) => (
          <div
            key={it.id}
            className="flex md:flex-row flex-col gap-3 lg:gap-6 md:items-center"
          >
            <div
              className="md:w-[270px] md:h-[270px] w-full h-auto
                  mx-auto sm:mx-0 sm:mr-5 rounded-md bg-sub-bg"
            >
              <Image
                src={BASE_URL + encodeURIComponent(it.variant_image_url)}
                alt={it.name}
                width={270}
                height={270}
                className="w-[270px] h-[270px] mx-auto rounded-md object-cover"
              />
            </div>

            <div className="w-[284px] sm:w-auto text-left flex flex-col justify-between py-2">
              <div className="flex flex-col gap-6 font-medium text-font-20 opacity-90">
                <span className="font-semibold text-font-20 md:text-font-24">
                  <div className="flex flex-col gap-2 lg:flex-row select-text">
                    <span>{`[ ${it.brand} ] `}</span>
                    <span>{it.name}</span>
                  </div>
                </span>

                <span>{`${it.volume}ml`}</span>
                <span className="font-semibold">{fmt(it.price)}원</span>

                <Counter
                  quantity={it.quantity}
                  volumeId={it.variant_id}
                  perfumeId={it.perfume_id}
                />
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-between px-4 py-6 border-y text-font-20">
          <span className="font-semibold">총 금액</span>
          <span className="font-bold">{fmt(total)}원</span>
        </div>

        <div className="flex justify-end">
          <Modal />
        </div>
      </div>
    </div>
  );
}
