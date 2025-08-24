import Link from 'next/link';
import React from 'react';

interface BtnProps {
  label: string;
  href?: string;
  click?: React.MouseEventHandler;
  isAnswer?: boolean;
}

export default function PurpleBtn({ label, href, click, isAnswer }: BtnProps) {
  return href ? (
    <Link
      href={href}
      onClick={click}
      className="block w-full rounded-md py-4 text-center bg-primary-p text-primary-w md:text-font-32 sm:text-font-24 text-font-20 hover:opacity-80"
    >
      {label}
    </Link>
  ) : (
    <button
      type="button"
      onClick={click}
      className="block w-full rounded-md py-4 text-center bg-primary-p text-primary-w md:text-font-32 sm:text-font-24 text-font-20 hover:opacity-80"
      disabled={isAnswer}
    >
      {label}
    </button>
  );
}
