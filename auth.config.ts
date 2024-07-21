import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { eq } from 'drizzle-orm';
import NextAuth from 'next-auth';
import type { NextAuthConfig } from 'next-auth';
import Google from 'next-auth/providers/google';
import GoogleProvider from '@auth/core/providers/google';
import Resend from 'next-auth/providers/resend';
import { users } from '~database/models/users';
import drizzle from '~drizzle';
import env from '~env';
import { sendVerificationRequest } from '~utils/auth/magic-links';

export default {
  adapter: DrizzleAdapter(drizzle),
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
    Resend({
      apiKey: process.env.AUTH_RESEND_KEY,
      from: env.EMAIL_FROM,
      sendVerificationRequest,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return { ...token, id: user.id, email: user.email, name: user.name };
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (session.user) {
        return {
          ...session,
          user: {
            ...token,
          },
        };
      }
      return session;
    },
   async redirect({ url, baseUrl }) {
      if (url.startsWith('/')) {
        return `${baseUrl}${url}`;
      } else if (new URL(url).origin === baseUrl) {
        return url;
      }
      return baseUrl;
    },
    async signIn({ user, account, profile, email, credentials }) {
      if (user) {
        const existingUser = await drizzle
          .select()
          .from(users)
          .where(eq(users.email, user?.email!));

        if (existingUser) {
          return true;
        }
      }
      return true;
    },
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      const openRoutes = ['/get-started', '/verify-request']; // specify routes you want to protect in this array
      if (!openRoutes.includes(pathname)) return !!auth;
      return true;
    },
  },
  pages: {
    signIn: '/auth/get-started',
    newUser: '/auth/get-started',
    verifyRequest: '/auth/verify-request',
    error:'/auth/failed-verification'
  },
} satisfies NextAuthConfig;
