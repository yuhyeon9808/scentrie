'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useUIStore } from '@/app/core/store/useUIStore';
import { BRANDS, NOTEMOODTABS } from '@/app/core/constants/perfumeMeta';
import { MENUS } from '@/app/core/constants/menuItem';
import { useQuizStore } from '@/app/core/store/useQuizStore';
import AccordionMenu from './AccordionMenu';
import { GuardedLink } from '@/component/common/AuthGuardLink';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Menu({ isOpen, onClose }: MenuProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const menuItemClass =
    'block px-7 py-3 rounded-md transition hover:bg-primary-w hover:text-primary-p hover:font-semibold';

  const toggle = isOpen ? 'translate-x-0' : '-translate-x-full';

  const setActiveMenu = useUIStore((state) => state.setActiveMenu);

  return (
    <div
      className={`fixed top-0 left-0 z-40 min-h-screen w-[320px] transform bg-primary-p transition-transform duration-300 ${toggle}`}
    >
      <button
        type="button"
        className="absolute right-4 top-4 text-[1.1rem] font-bold"
        onClick={onClose}
      >
        ✕
      </button>

      <ul className="space-y-4 p-6 pt-20 text-[1.1rem] ">
        <li
          onClick={() => {
            setActiveMenu('전체 상품');
          }}
        >
          <Link href="/product/1" className={menuItemClass} onClick={onClose}>
            전체 상품 보기
          </Link>
        </li>

        <li>
          <AccordionMenu
            label="브랜드"
            keyword="brand"
            openSection={openSection}
            setOpenSection={setOpenSection}
          />

          {openSection === 'brand' && (
            <ul className="mt-2 space-y-2 pl-4">
              {BRANDS.map((brand) => (
                <li key={brand.id}>
                  <Link
                    href={`/brand/${brand.name}`}
                    className={menuItemClass}
                    onClick={() => {
                      setActiveMenu(brand.name);
                      onClose();
                    }}
                  >
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li>
          <AccordionMenu
            label="향 키워드 필터"
            keyword="filter"
            openSection={openSection}
            setOpenSection={setOpenSection}
          />

          {openSection === 'filter' && (
            <ul className="mt-2 space-y-2 pl-4">
              {NOTEMOODTABS.map((tab) => (
                <li key={tab.path}>
                  <Link
                    href={tab.path}
                    className={menuItemClass}
                    onClick={() => {
                      setActiveMenu('전체 상품');
                      onClose();
                    }}
                  >
                    {tab.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {MENUS.map((menu) => {
          const handleClick = () => {
            if (menu.href === '/fragrance_finder') {
              useQuizStore.getState().reset();
              useQuizStore.persist?.clearStorage?.();
            }
            onClose();
          };
          return (
            <li key={menu.label}>
              {menu.href.startsWith('/mypage') ? (
                <GuardedLink
                  href={menu.href}
                  className={menuItemClass}
                  onClickCapture={handleClick}
                >
                  {menu.label}
                </GuardedLink>
              ) : (
                <Link
                  href={menu.href}
                  className={menuItemClass}
                  onClickCapture={handleClick}
                >
                  {menu.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
