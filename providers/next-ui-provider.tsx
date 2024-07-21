'use client';
import React, { ReactNode } from 'react';
import { NextUIProvider } from '@nextui-org/react';

import { useRouter } from 'next/navigation';
export default function UIProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const router = useRouter();

  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
}
