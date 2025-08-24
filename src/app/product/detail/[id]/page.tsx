import { fetchPerfumeById } from '@/app/core/api/fetch/fetchPerfumeById';
import ProductDetail from '@/component/product/ProductDetail';
import React from 'react';

export default async function DetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const numId = Number(id);
  const data = await fetchPerfumeById(numId);

  if (!data) return <p>상품을 찾을 수 없습니다.</p>;

  return <ProductDetail perfume={data} />;
}
