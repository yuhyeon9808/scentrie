'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/component/layout/Footer';

export default function FooterGuard() {
  const pathname = usePathname();

  const hideFooter = pathname.startsWith('/login');

  if (hideFooter) return null;
  return <Footer />;
}
