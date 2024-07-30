import { DrizzleAdapter } from '@auth/drizzle-adapter';
import NextAuth from 'next-auth';
import config from '~auth.config';

import drizzle from '~drizzle';
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  debug: true,
  adapter: DrizzleAdapter(drizzle),
  ...config,
});
