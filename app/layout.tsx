import type { Metadata } from 'next';
import { DM_Serif_Display, Poppins } from 'next/font/google';
import './globals.css';

const dm_serif_display = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-dm-serif-display',
  weight: '400',
});
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Matt Tompkins, Frontend Web Developer',
  description:
    'A people-first web developer specializing in: Custom Wordpress Themes & Plugins | Headless Wordpress Development | React & NextJS Development',
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
