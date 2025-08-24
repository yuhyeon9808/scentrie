'use client';
import { useQuery } from '@tanstack/react-query';
import fetchMagazine from '../../api/fetch/magazines';

export function useMagazines() {
  return useQuery({
    queryKey: ['magazines', 'all'],
    queryFn: fetchMagazine,
    staleTime: 5 * 60 * 1000,
  });
}
