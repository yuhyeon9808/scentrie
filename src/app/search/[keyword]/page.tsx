import React from 'react';
import ProductView from '@/component/product/ProductView';

export default async function SearchPage({
  params,
}: {
  params: Promise<{ keyword: string }>;
}) {
  const { keyword } = await params;
  return <ProductView keyword={keyword} />;
}
