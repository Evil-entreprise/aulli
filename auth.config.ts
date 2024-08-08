import type { NextAuthConfig } from 'next-auth';
import Google from 'next-auth/providers/google';
import Resend from 'next-auth/providers/resend';
import { sendVerificationRequest } from '~lib/auth';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import drizzle from '~drizzle';

export default {
  adapter: DrizzleAdapter(drizzle),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
    Resend({
      maxAge: 10 * 60,
      apiKey: process.env.AUTH_RESEND_KEY!,
      from: process.env.EMAIL_FROM!,
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
      return baseUrl;
    },
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      const openRoutes = [
        '/get-started',
        '/verify-request',
        '/manifest.webmanifest',
        '/icons',
      ]; // specify routes you want to protect in this array
      if (!openRoutes.includes(pathname)) return !!auth;
      return true;
    },
  },
  pages: {
    signIn: '/auth/get-started',
    newUser: '/auth/get-started',
    verifyRequest: '/auth/verify-request',
    error: '/auth/failed-verification',
  },
} satisfies NextAuthConfig;
