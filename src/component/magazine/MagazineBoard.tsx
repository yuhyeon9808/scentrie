'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import WhiteBtn from '../common/WhiteBtn';
import { groupPage } from '@/app/core/utils/groupPage';
import { PageNavigator } from '../common/PageNavigator';
import { useIsAdmin } from '@/app/core/hooks/auth/useIsAdmin';
import { useMagazines } from '@/app/core/hooks/magazine/useMagazines';
import MagazineSearchInput from './ui/MagazineSearchInput';

function MagazineBoardSkeleton() {
  return (
    <div className="w-full md:px-28 sm:min-h-[1143px] min-h-[943px]">
      <div className="flex flex-col items-center sm:py-28 py-14">
        <span className="pb-14 font-medium text-font-48">MAGAZINE</span>
        <div className="mb-7 w-full">
          <div className="skeleton h-[512px] w-full"></div>
        </div>
        <div className="my-10 self-end"></div>
        <div className="flex">
          <input
            type="text"
            placeholder="검색"
            className="w-[215px] sm:w-[250px] mr-3 rounded-md border px-5 py-2"
            name="search"
          />
          <WhiteBtn label="찾기" font={16} type="submit" />
        </div>
      </div>
    </div>
  );
}

export default function MagazineBoard({ page }: { page: string }) {
  const { data, isLoading, error } = useMagazines();
  const [query, setQuery] = useState('');
  const isAdmin = useIsAdmin();

  if (isLoading) return <MagazineBoardSkeleton />;
  if (error) return <div>에러가 발생했어요</div>;
  if (!data) return null;

  const filtered = query
    ? data.filter((item) =>
        item.title
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.toLowerCase().replace(/\s+/g, ''))
      )
    : data;

  const { paginated, startPage, endPage, allPage, currentPage } = groupPage({
    page,
    data: filtered,
  });

  return (
    <div className="w-full md:px-28">
      <div className="flex flex-col items-center sm:py-28 py-14">
        <span className="pb-14 font-medium text-font-48">MAGAZINE</span>

        <div className="mb-7 w-full border-y">
          <ul className="flex w-full select-text flex-col divide-y">
            {paginated.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/magazine/detail/${encodeURIComponent(item.id)}`}
                  className="flex justify-between p-5"
                >
                  <span>{item.title}</span>
                  <span className="hidden sm:block">{item.email}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <PageNavigator
          basePath="/magazine"
          currentPage={currentPage}
          startPage={startPage}
          endPage={endPage}
          allPage={allPage}
        />

        <div className="my-10 self-end">
          {isAdmin && (
            <Link href="/magazine/magazineEditor">
              <WhiteBtn label="글쓰기" width={100} py={0.5} font={16} />
            </Link>
          )}
        </div>
        <MagazineSearchInput setQuery={setQuery} />
      </div>
    </div>
  );
}
