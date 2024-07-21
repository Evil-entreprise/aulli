import React, { ReactNode } from 'react';
import UIProvider from './next-ui-provider';
import SessionProvider from './session-provider';
import { Toaster } from 'sonner';
export default function ProviderTree({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main>
      <SessionProvider>
        <UIProvider>
          
          {children}
        </UIProvider>
      </SessionProvider>
    </main>
  );
}
