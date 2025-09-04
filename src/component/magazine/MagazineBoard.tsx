'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import WhiteBtn from '../common/WhiteBtn';
import { groupPage } from '@/app/core/utils/groupPage';
import { PageNavigator } from '../common/PageNavigator';
import { useIsAdmin } from '@/app/core/hooks/auth/useIsAdmin';
import { useMagazines } from '@/app/core/hooks/magazine/useMagazines';
import MagazineSearchInput from './ui/MagazineSearchInput';
import Image from 'next/image';
import { BASE_URL } from '@/app/core/constants/etc';

function CardFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative aspect-[750/428] w-full rounded-md overflow-hidden">
      {children}
    </div>
  );
}

function MagazineBoardSkeleton() {
  const SKELETON_COUNT = 8;

  return (
    <div className="w-full md:px-28">
      <div className="flex flex-col items-center sm:py-28 py-14">
        <span className="pb-14 font-medium text-font-48">MAGAZINE</span>

        <div className="mb-7 w-full flex justify-center">
          <ul className="max-w-[1522px] grid lg:grid-cols-2 grid-cols-1 gap-6">
            {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
              <li key={i}>
                <CardFrame>
                  <div className="absolute inset-0 skeleton" />
                </CardFrame>
              </li>
            ))}
          </ul>
        </div>

        <div className="my-10 self-end" />
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

        <div className="mb-7 w-full flex justify-center">
          <ul className="max-w-[1522px] grid lg:grid-cols-2 grid-cols-1 gap-6 ">
            {paginated.map((item) => (
              <li key={item.id}>
                <Link href={`/magazine/detail/${encodeURIComponent(item.id)}`}>
                  <Image
                    src={BASE_URL + item.cover_image}
                    alt={item.title}
                    width={750}
                    height={428}
                    className="rounded-md transition duration-300 hover:brightness-110 hover:-translate-y-2"
                  />
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
