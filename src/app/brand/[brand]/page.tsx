import Brand from '@/component/brand/Brand';
import React from 'react';

export default async function Brands({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {
  const { brand } = await params;

  return <Brand brand={brand} />;
}
