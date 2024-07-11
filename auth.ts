import NextAuth from 'next-auth';
import config from '~auth.config';

import { DrizzleAdapter } from '@auth/drizzle-adapter';
import drizzle from '~drizzle';
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: DrizzleAdapter(drizzle),
  ...config,
});
