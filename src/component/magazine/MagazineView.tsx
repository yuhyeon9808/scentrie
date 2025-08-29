'use client';

import React from 'react';
import BorderBtn from '@/component/common/BorderBtn';
import WhiteBtn from '../common/WhiteBtn';
import Image from 'next/image';
import { MagazineViewProps } from '@/app/core/types/magazine';

import { BASE_URL } from '@/app/core/constants/etc';
import { useIsAdmin } from '@/app/core/hooks/auth/useIsAdmin';
import { useMagazineMutations } from '@/app/core/hooks/magazine/useMagazineMutations';

export default function MagazineView({ magazine }: MagazineViewProps) {
  const isAdmin = useIsAdmin();
  const { deleteMutation } = useMagazineMutations();

  return (
    <div>
      <div className="flex flex-col items-center sm:py-28 py-14">
        <div className="md:w-[80%] w-[90%]">
          <div className="flex self-start pb-7 font-bold text-font-30 select-text">
            {magazine.title}
          </div>
          <div className="border-t pb-7" />

          <Image
            src={BASE_URL + encodeURIComponent(magazine.cover_image)}
            alt={magazine.title}
            width={300}
            height={300}
            className="pb-5"
          />
          {magazine.sub_image_1 && (
            <Image
              src={BASE_URL + encodeURIComponent(magazine.sub_image_1)}
              alt={magazine.title}
              width={300}
              height={300}
              className="pb-5"
            />
          )}

          {magazine.sub_image_2 && (
            <Image
              src={BASE_URL + encodeURIComponent(magazine.sub_image_2)}
              alt={magazine.title}
              width={300}
              height={300}
              className="pb-5"
            />
          )}
          <div className="whitespace-pre-line leading-6 text-font-20 select-text">
            {magazine.content}
          </div>

          <div className="mt-28 flex justify-end gap-3">
            {isAdmin && (
              <WhiteBtn
                label="삭제하기"
                width={95}
                py={1}
                click={() => deleteMutation.mutate(magazine.id)}
              />
            )}
            <BorderBtn label="목록으로" maxW={95} href="/magazine/1" py={1} />
          </div>
        </div>
      </div>
    </div>
  );
}
