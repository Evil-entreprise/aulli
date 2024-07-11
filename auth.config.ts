import NextAuth from 'next-auth';
import type { NextAuthConfig } from 'next-auth';
import Google from 'next-auth/providers/google';
import Nodemailer from 'next-auth/providers/nodemailer';
import drizzle from '~drizzle';
import env from '~env';
import { sendVerificationRequest } from '~utils/auth/magic-links';

export default {
  providers: [
    Google,
    Nodemailer({
      server: env.EMAIL_SERVER,
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
      return baseUrl;
    },
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      const protectedRoutes = ['/middlewareProtected']; // specify routes you want to protect in this array
      if (protectedRoutes.includes(pathname)) return !!auth;
      return true;
    },
  },
} satisfies NextAuthConfig;
