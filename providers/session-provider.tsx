import { ReactNode } from 'react';
import { SessionProvider as SessionWrapper } from 'next-auth/react';

export default function SessionProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <SessionWrapper>{children}</SessionWrapper>;
}
