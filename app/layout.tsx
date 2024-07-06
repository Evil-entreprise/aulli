import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'Aulli - The Ultimate Hub for Freelancers and SMBs',
  description:
    'Discover a new way to manage your freelance and business operations with Aulli. Our all-in-one platform streamlines contracts, payments, invoicing, project management, and client relations, providing everything you need to excel. Join Aulli and transform how you deliver value.',
  twitter: {
    card: 'summary_large_image',
    title: 'Aulli - The Ultimate Hub for Freelancers and SMBs',
    description:
      'Discover a new way to manage your freelance and business operations with Aulli. Our all-in-one platform streamlines contracts, payments, invoicing, project management, and client relations, providing everything you need to excel. Join Aulli and transform how you deliver value.',
  },
  icons: {
    icon: './favicon.ico',
    apple: [
      {
        rel: 'apple-touch-icon',
        url: '/icons/logo.svg',
      },
    ],
  },
  manifest: './manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
