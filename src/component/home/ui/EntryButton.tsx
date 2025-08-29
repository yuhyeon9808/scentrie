import Link from 'next/link';

export default function EntryButton({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="inline-block w-auto text-center font-semibold transition-colors duration-200 md:px-5 md:py-2 px-3 py-1 rounded-xl xl:text-font-20 text-font-16  border-2 border-primary-w text-primary-w hover:bg-primary-w hover:text-primary-p"
    >
      바로가기 &gt;
    </Link>
  );
}
