import React from 'react';
import logo from '@/assets/img/logo.png';
import Link from 'next/link';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FOOTERMENU, FOOTERSNS } from '@/app/core/constants/menuItem';

export default function Footer() {
  return (
    <footer className="flex items-center  h-[390px]  sm:px-header-middle-sm md:px-header-middle-md lg:px-header-middle-lg bg-[#1A0E27]">
      <div className="w-full flex flex-col sm:flex-row gap-5 sm:gap-0  justify-center sm:justify-between px-10 sm:px-0">
        <div className="flex flex-col gap-y-3">
          <Link href="/">
            <Image src={logo} alt="센트리에" width={120} height={25} />
          </Link>
          <p className="ml-1">© 2025 Scentrie All rights reserved.</p>
          <ul className="ml-1 flex cursor-pointer">
            <li>
              <Link href="/">
                <span className="mr-3">이용약관</span>
              </Link>
            </li>
            <li className="mx-2">|</li>
            <li>
              <Link href="/">
                <span className="ml-3">개인정보처리방침</span>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-2 underline">
            {FOOTERMENU.map((item, idx) => (
              <li key={idx}>
                <Link href={item.path}>{item.menu}</Link>
              </li>
            ))}
          </ul>

          <div className="mt-2 flex gap-2">
            {FOOTERSNS.map((sns, idx) => (
              <a
                href={sns.href}
                aria-label={sns.label}
                key={sns.label + idx}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={sns.icon}
                  className="!h-[1.8rem] !w-[1.8rem]"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
