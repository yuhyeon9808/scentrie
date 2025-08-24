'use client';
import { useQuery } from '@tanstack/react-query';
import { Magazine } from '../../types/magazine';
import { fetchMagazinesById } from '../../api/fetch/fetchMagazinesById';

export function useMagazineById(id: string) {
  return useQuery<Magazine | null>({
    queryKey: ['perfume', id],
    queryFn: () => fetchMagazinesById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
}
