'use client';
import { useRef } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import { clearCart } from '@/app/core/action/cart/removeCart';
import WhiteBtn from '@/component/common/WhiteBtn';

export default function Modal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const qc = useQueryClient();

  const handleBuy = async () => {
    await clearCart();
    await qc.invalidateQueries({ queryKey: ['cart'] });
    dialogRef.current?.close();
  };

  return (
    <>
      <WhiteBtn
        label="구매하기"
        width={110}
        click={() => dialogRef.current?.showModal()}
      />

      <dialog ref={dialogRef} id="my_modal_2" className="modal">
        <div className="modal-box p-10 sm:text-font-24 text-font-20 text-primary-p">
          <h3 className="font-bold">구매를 진행할까요?</h3>
          <p className="py-4 font-medium">
            결제가 완료되면 장바구니가 비워집니다.
          </p>

          <div className="modal-action flex gap-4">
            <form method="dialog">
              <button className="cursor-pointer rounded-md border border-gray-300 bg-primary-w px-3 py-2 text-subtitle text-font-20">
                취소하기
              </button>
            </form>

            <button
              type="button"
              onClick={handleBuy}
              className="cursor-pointer rounded-md bg-primary-p px-3 py-2 text-primary-w text-font-20"
            >
              구매하기
            </button>
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
