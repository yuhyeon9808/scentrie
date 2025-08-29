import React from 'react';
import ProductCardList from '../product/ui/ProductCardList';

export default function BestSeller() {
  return (
    <div className="flex flex-col items-center py-main-section-y">
      <p className="pb-main-title-b font-bold md:text-font-40 text-font-30 hidden sm:block">
        지금 가장 인기있는 향수를 만나보세요.
      </p>

      <div className="sm:hidden text-font-30 font-bold pb-main-title-b text-center ">
        <p>지금 가장 인기있는</p>
        <p>향수를 만나보세요.</p>
      </div>

      <ProductCardList limit={12} />
    </div>
  );
}
