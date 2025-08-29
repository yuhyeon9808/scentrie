import React from 'react';
import MagazineList from './MagazineList';

export default function ScentrieMagazine() {
  return (
    <div className="flex w-full flex-col items-center pb-main-section-y">
      <p className="pb-main-title-b font-bold md:text-font-40 text-font-30">
        SCENTRIE MAGAZINE
      </p>
      <MagazineList />
    </div>
  );
}
