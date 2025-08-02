import type { Metadata } from 'next';
import { Roboto, Baloo_2 } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
});

const baloo = Baloo_2({
  variable: '--font-baloo',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Coffee Shop',
  description: 'A cozy place to enjoy your favorite coffee',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-roboto bg-base-background antialiased max-w-[1440px] mx-auto px-2">
        <header className="mt-4 sm:mt-8 h-[80px] sm:h-[104px]">
          <Header />
        </header>
        {children}
      </body>
    </html>
  );
}
