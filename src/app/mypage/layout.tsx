import LogoutButton from '@/component/mypage/ui/LogoutButton';
import MenuTab from '@/component/common/MenuTab';
import React from 'react';
import { fetchUserInfo } from '../core/api/fetch/fetchUserInfo';
import { MYPAGETABS } from '../core/constants/perfumeMeta';

export default async function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let userInfo: { email?: string } | null = null;

  userInfo = await fetchUserInfo();

  return (
    <div className="flex w-full flex-col items-center sm:py-28 py-14">
      <div className="lg:w-[80%] w-[90%]">
        <div className="flex justify-end gap-5 pb-14">
          <span>{userInfo?.email}</span>
          <LogoutButton />
        </div>
        <MenuTab tabs={MYPAGETABS} />
        <div>{children}</div>
      </div>
    </div>
  );
}
