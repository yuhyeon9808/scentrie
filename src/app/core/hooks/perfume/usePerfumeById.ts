import { useQuery } from '@tanstack/react-query';
import { PerfumeById } from '../../types/perfume';
import { fetchPerfumeById } from '../../api/fetch/fetchPerfumeById';

export function usePerfumeById(id: number) {
  return useQuery<PerfumeById | null>({
    queryKey: ['perfume', id],
    queryFn: () => fetchPerfumeById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
}
