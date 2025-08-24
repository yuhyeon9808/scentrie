import ProductView from '@/component/product/ProductView';
import React from 'react';

export default async function All({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  return <ProductView page={page} />;
}
