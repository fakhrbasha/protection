// app/[locale]/layout.tsx
import type { Metadata } from 'next';
import { IBM_Plex_Sans_Arabic, Inter } from 'next/font/google';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import './globals.css';
import { ReactNode } from 'react';
import { routing } from '@/i18n/routing';
import { NextIntlClientProvider } from 'next-intl';
import { NAV } from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });
const ibm = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
});
export const metadata: Metadata = {};

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  console.log(locale);

  // Ensure that the incoming locale is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head></head>
      <body className={ibm.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NAV />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
