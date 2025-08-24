import '@/styles/globals.css';

import './core/config/fontawesome';

import { Providers } from './providers';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Header from '@/component/layout/Header';
import FooterGuard from '@/component/layout/ui/FooterGuard';

export const metadata = {
  title: '센트리에',
  description: '향수 큐레이션 플랫폼',
  icons: {
    icon: '/favicon.svg',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <GoogleOAuthProvider clientId="902938857309-77c0hv2d0mcth4abrjqqv0h0mpqtfko0.apps.googleusercontent.com">
          <Providers>
            <Header />
            <main className="pt-[70px]">{children}</main>
          </Providers>
          <FooterGuard />
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
