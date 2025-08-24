'use client';
import { useRouter } from 'next/navigation';
import { useAuthGuard } from '@/app/core/hooks/auth/useAuthGuard';

export function GuardedLink({
  href,
  children,
  className,
  onClickCapture,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClickCapture?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  const router = useRouter();
  const { requireLogin } = useAuthGuard();

  const handleClickCapture = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    const needsGuard = href.startsWith('/mypage') || href.startsWith('/cart');

    if (needsGuard) {
      e.preventDefault();
      const ok = await requireLogin(href);
      if (!ok) return;
      onClickCapture?.(e);
      router.push(href);
      return;
    }

    onClickCapture?.(e);
  };

  return (
    <a href={href} className={className} onClickCapture={handleClickCapture}>
      {children}
    </a>
  );
}
