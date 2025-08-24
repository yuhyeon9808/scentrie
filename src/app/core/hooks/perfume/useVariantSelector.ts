'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useSelectedItemStore } from '@/app/core/store/useSelectedItemStore';
import { groupAndSortVariants } from '@/app/core/utils/groupVariantsByPerfumeId';
import { RawVariant } from '../../types/perfume';
import { BASE_URL } from '@/app/core/constants/etc';

export function useVariantSelector(
  variants: RawVariant[],
  fallbackImage?: string
) {
  const grouped = useMemo(() => groupAndSortVariants(variants), [variants]);
  const volumes = useMemo(
    () =>
      Object.values(grouped)
        .flat()
        .map((v: RawVariant) => ({
          id: v.id,
          volume: Number(v.volume),
          price: v.price,
          img: v.variant_image_url,
        })),
    [grouped]
  );

  const selected = useSelectedItemStore((s) => s.selected);
  const setSelected = useSelectedItemStore((s) => s.setSelected);
  const initialized = useRef(false);

  const [useVariantImg, setUseVariantImg] = useState(false);

  useEffect(() => {
    if (initialized.current || volumes.length === 0) return;
    const def =
      volumes.find((vol) => vol.volume === 50) ??
      volumes.find((vol) => vol.volume === 35) ??
      volumes[0];
    if (def) {
      setSelected({ variantId: def.id, volume: def.volume, price: def.price });
      initialized.current = true;
    }
  }, [volumes, setSelected]);

  const selectedVariant = useMemo(
    () => volumes.find((v) => v.id === selected.variantId),
    [volumes, selected.variantId]
  );

  const imageSrc =
    useVariantImg && selectedVariant?.img
      ? BASE_URL + encodeURIComponent(selectedVariant.img)
      : fallbackImage
      ? BASE_URL + encodeURIComponent(fallbackImage)
      : undefined;

  return {
    volumes,
    selected,
    setSelected,
    selectedVariant,
    imageSrc,
    setUseVariantImg,
  };
}
