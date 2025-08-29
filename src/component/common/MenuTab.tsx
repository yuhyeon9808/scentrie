'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Tab {
  path: string;
  label: string;
}

interface MenuTabProps {
  tabs: Tab[];
}

export default function MenuTab({ tabs }: MenuTabProps) {
  const pathname = usePathname();

  const count = tabs.length;
  const activeIndex = tabs.findIndex((t) => pathname.startsWith(t.path));
  const tabWidth = 100 / count;
  const segLeft = tabWidth * (activeIndex === -1 ? 0 : activeIndex);

  return (
    <div className="relative w-full pb-4">
      <div className="absolute bottom-0 left-0 h-px w-full bg-primary-w opacity-50" />
      <div
        className="absolute bottom-0 h-[2px] bg-primary-w transition-all duration-500"
        style={{ width: `${tabWidth}%`, left: `${segLeft}%` }}
      />
      <div className="flex justify-around md:text-font-30 sm:text-font-24 text-font-20">
        {tabs.map((item, idx) => (
          <Link
            href={item.path}
            key={idx}
            className="cursor-pointer text-center"
            style={{ width: `${tabWidth}%` }}
          >
            <span
              className={activeIndex === idx ? 'font-semibold' : 'opacity-50'}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
