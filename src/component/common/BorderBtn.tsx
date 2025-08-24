'use client';

import { useSelectedItemStore } from '@/app/core/store/useSelectedItemStore';
import { useUIStore } from '@/app/core/store/useUIStore';
import Link from 'next/link';
import React from 'react';

interface props {
  label: string | number;
  click?: React.MouseEventHandler;
  width?: number;
  maxW?: number;
  height?: number;
  py?: number;
  href?: string;
  type?: 'button' | 'submit';
  form?: string;
  menu?: boolean;
  login?: boolean;
  font?: number;
  disabled?: boolean;
}

export default function MenuBtn({
  label,
  click,
  width,
  maxW,
  height,
  py = 1,
  href,
  type = 'button',
  form,
  menu,
  login,
  font,
  disabled,
}: props) {
  const activeMenu = useUIStore((state) => state.activeMenu);
  const selectedItem = useSelectedItemStore((state) => state.selected);

  const baseStyle =
    'inline-flex items-center justify-center rounded-md border border-[var(--text-primary)] sm:text-font-20 text-font-16 font-medium font-semibold hover:bg-primary-w hover:text-primary-p';

  const sizeClass = menu
    ? 'w-[230px] sm:w-[250px]'
    : login
    ? 'sm:w-[365px] w-[320px] h-[56px]'
    : 'w-full';

  const isActive =
    label === activeMenu || label.toString() === `${selectedItem.volume}ml`;

  const activeStyle = isActive
    ? 'bg-primary-w text-primary-p font-semibold'
    : '';

  const className = `${sizeClass}  ${baseStyle} ${activeStyle} `;

  const style: React.CSSProperties = {
    width: width ? `${width}px` : undefined,
    maxWidth: maxW ? `${maxW}px` : undefined,
    height: height ? `${height}px` : undefined,
    padding: `${py}rem 0rem`,
    fontSize: `${font}px`,
  };

  return href ? (
    <Link href={href} className={className} style={style} onClick={click}>
      {label}
    </Link>
  ) : (
    <button
      type={type}
      form={form}
      onClick={click}
      className={className}
      style={style}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
