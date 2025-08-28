import React from 'react';
import Brands from './Brands';

export default function BrandPerfume() {
  return (
    <div className="flex flex-col items-center py-main-section-y">
      <p className="pb-main-title-b font-bold md:text-font-40 sm:text-font-32 text-font-24 hidden sm:block">
        다양한 브랜드의 향수를 만나보세요.
      </p>

      <div className="sm:hidden text-font-24 font-bold pb-main-title-b text-center ">
        <p>다양한 브랜드의</p>
        <p>향수를 만나보세요.</p>
      </div>

      <Brands />
    </div>
  );
}
