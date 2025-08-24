import { useQuery } from '@tanstack/react-query';
import { fetchPerfumes } from '../../api/fetch/perfumes';

export function usePerfumes() {
  return useQuery({
    queryKey: ['perfumes', 'all'],
    queryFn: fetchPerfumes,
    staleTime: 5 * 60 * 1000,
  });
}
