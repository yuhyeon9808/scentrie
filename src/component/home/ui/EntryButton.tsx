import Link from 'next/link';

interface EntryButtonProps {
  href: string;
  variant?: 'border' | 'filled';
}

export default function EntryButton({
  href,
  variant = 'border',
}: EntryButtonProps) {
  const style =
    variant === 'border'
      ? 'px-5 py-2 rounded-xl border-2 xl:text-font-20 text-font-16 hover:bg-primary-w hover:text-primary-p hover:border-none'
      : 'px-5 py-2 rounded-xl bg-primary-p text-primary-w xl:text-font-20 text-font-16 hover:bg-primary-w hover:text-primary-p';

  return (
    <Link href={href} className={style}>
      바로가기 &gt;
    </Link>
  );
}
