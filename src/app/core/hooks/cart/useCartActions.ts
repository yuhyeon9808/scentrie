'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addToCart } from '@/app/core/action/cart/addToCart';

export function useCartActions() {
  const qc = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({
      perfumeId,
      variantId,
    }: {
      perfumeId: number;
      variantId: number;
    }) => addToCart(perfumeId, 1, variantId),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['cart'] });
    },
  });

  return { add: mutation.mutateAsync, isPending: mutation.isPending };
}
