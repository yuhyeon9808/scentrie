'use client';
import { addToCart } from '@/app/core/action/cart/addToCart';
import { removeCartItem } from '@/app/core/action/cart/removeCart';
import { useQueryClient } from '@tanstack/react-query';

export default function Counter({
  perfumeId,
  quantity,
  volumeId,
}: {
  perfumeId: number;
  quantity: number;
  volumeId: number;
}) {
  const qc = useQueryClient();

  const addItem = async () => {
    await addToCart(perfumeId, 1, volumeId);
    await qc.invalidateQueries({ queryKey: ['cart'] });
  };

  const removeItem = async () => {
    await removeCartItem(perfumeId, volumeId, 1);
    await qc.invalidateQueries({ queryKey: ['cart'] });
  };

  return (
    <div className="flex w-[160px] justify-between rounded-md border md:text-font-24">
      <button
        type="button"
        onClick={removeItem}
        className="px-5 py-1 hover:bg-primary-w hover:text-primary-p hover:opacity-70"
      >
        -
      </button>
      <div className="px-5 py-1">{quantity}</div>
      <button
        type="button"
        onClick={addItem}
        className="px-5 py-1 hover:bg-primary-w hover:text-primary-p hover:opacity-70"
      >
        +
      </button>
    </div>
  );
}
