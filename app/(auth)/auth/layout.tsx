import React from 'react';
import FadeInBackground from '~components/ui/background/fade-in-background';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aulli | Get Started',
  description:
    'Join Aulli and start your journey with our seamless onboarding process. Get started now and explore the features we have to offer.',
};
export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <FadeInBackground>
      {children}
    </FadeInBackground>
  );
}
