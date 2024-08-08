import React, { ReactNode } from 'react';
import UIProvider from './next-ui-provider';
import SessionProvider from './session-provider';
export default function ProviderTree({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <SessionProvider>
        <UIProvider>{children}</UIProvider>
      </SessionProvider>
    </>
  );
}
