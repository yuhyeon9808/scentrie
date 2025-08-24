import Link from 'next/link';
import React from 'react';

interface WhiteBtnProps {
  label: string;
  width?: number;
  maxW?: number;
  height?: number;
  py?: number;
  font?: number;
  href?: string;
  click?: React.MouseEventHandler;
  test?: boolean;
  login?: boolean;
  type?: 'button' | 'submit';
}

export default function WhiteBtn({
  label,
  width,
  maxW,
  height,
  font,
  py,
  href,
  click,
  test,
  login,
  type = 'button',
}: WhiteBtnProps) {
  const style: React.CSSProperties = {
    maxWidth: maxW ? `${maxW}px` : undefined,
    width: width ? `${width}px` : undefined,
    height: height ? `${height}px` : undefined,
    padding: py != null ? `${py}rem 0px` : undefined,
    fontSize: font ? `${font}px` : undefined,
  };

  const baseClass =
    'inline-flex items-center justify-center rounded-md bg-primary-w text-primary-p font-bold px-3 py-2 hover:opacity-80 sm:text-font-20 text-font-16 shrink-0';

  const testSize = test ? 'w-full' : '';
  const loginSize = login ? 'sm:w-[365px] w-[320px] h-[56px]' : '';
  const className = `${testSize} ${baseClass} ${loginSize}`;

  return href ? (
    <Link href={href} className={className} style={style}>
      {label}
    </Link>
  ) : (
    <button type={type} onClick={click} className={className} style={style}>
      {label}
    </button>
  );
}
