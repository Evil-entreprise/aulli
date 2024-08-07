import type { Metadata, Viewport } from 'next';
import ProviderTree from '~providers';
import { Toaster } from 'sonner';
import { gilroy, inter } from '~fonts';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#47C826',
  width: 'device-width',
  initialScale: 1,
};

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
    icon: [
      {
        url: './favicon.ico',
        media: '(prefers-color-scheme:dark)',
        type: 'image/x-icon',
        rel: 'icon',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        url: './favicon-light.ico',
        media: '(prefers-color-scheme:light)',
      },
    ],
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
      <body
        className={`${gilroy.variable} ${inter.variable} h-dvh w-dvw lima-theme text-foreground bg-background text-antialiased`}
      >
        <Toaster position='bottom-right' />
        <ProviderTree>
          <>{children}</>
        </ProviderTree>
      </body>
    </html>
  );
}
