import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { fetchCartList } from '../../api/fetch/fetchCart';
import { CartItem } from '../../types/cart';
import { createSupabaseBrowserClient } from '../../config/supabase/supabaseBrowser';

export function useCart() {
  const qc = useQueryClient();

  const query = useQuery<CartItem[]>({
    queryKey: ['cart'],
    queryFn: fetchCartList,
    staleTime: 0,
    refetchOnWindowFocus: true,
  });

  useEffect(() => {
    const supabase = createSupabaseBrowserClient();

    const channel = supabase
      .channel('cart-changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'CartItems' },
        () => {
          qc.invalidateQueries({ queryKey: ['cart'] });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [qc]);

  return query;
}
