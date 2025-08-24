'use client';
import { useEffect } from 'react';
import { useRecentProducts } from '@/app/core/hooks/useRecentProducts';
import type { PerfumeById } from '@/app/core/types/perfume';

export function useTrackRecentProduct(perfume: PerfumeById) {
  const { addRecentProduct } = useRecentProducts();
  useEffect(() => {
    if (!perfume) return;
    addRecentProduct({
      id: String(perfume.id),
      name: perfume.name,
      brand: perfume.brand!.name,
      image: perfume.thumbnail_url,
    });
  }, [perfume, addRecentProduct]);
}
