import type { Metadata } from 'next';
import { DM_Serif_Display, DM_Sans } from 'next/font/google';
import './globals.css';

import llama from '@/public/images/llama.jpg';

const dm_serif_display = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-dm-serif-display',
  weight: '400',
});
const poppins = DM_Sans({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Matt Tompkins, Frontend Web Developer',
  description:
    'A people-first web developer specializing in: Custom Wordpress Themes & Plugins | Headless Wordpress Development | React & NextJS Development',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.mtweb.dev',
    siteName: 'Matt Tompkins, Frontend Web Developer',
    images: [{ url: llama.src, alt: 'A llama' }],
  },
  icons: './favicon.ico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${poppins.variable} ${dm_serif_display.variable}`} lang="en">
      <body className="">{children}</body>
    </html>
  );
}
