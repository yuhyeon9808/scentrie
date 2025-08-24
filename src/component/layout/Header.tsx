'use client';
import { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '@/assets/img/logo.png';
import logo_m from '@/assets/img/logo_m.png';

import Image from 'next/image';
import Link from 'next/link';
import Menu from '@/component/layout/ui/Menu';
import SearchInput from './ui/SearchInput';
import CartIcon from './ui/CartIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed z-20 flex h-[70px] w-full items-center justify-between px-1  sm:px-header-middle-sm md:px-header-middle-md lg:px-header-middle-lg bg-primary-p shadow-md">
        <div className="flex">
          <FontAwesomeIcon
            icon={faBars}
            className="!w-[1.5rem] !h-[1.5rem] cursor-pointer rounded-md p-2 hover:bg-primary-w hover:text-primary-p"
            onClick={() => setIsMenuOpen(true)}
            aria-label="메뉴 열기"
          />
          <Link href="/">
            <Image
              src={logo}
              alt="센트리에"
              width={120}
              height={25}
              className="ml-2 mt-2 shrink-0 sm:ml-5 hidden sm:block"
            />
            <Image
              src={logo_m}
              alt="센트리에"
              width={40}
              height={40}
              className="ml-1 sm:hidden"
            />
          </Link>
        </div>

        <div className="flex items-center">
          <SearchInput />
          <CartIcon />
        </div>
      </header>

      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
