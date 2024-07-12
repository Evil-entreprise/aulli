import { createTransport } from 'nodemailer';
import { MagicLinkEmail } from '~emails/magic-link';
import { Resend } from 'resend';
import type { Theme } from '@auth/core/types';
import { EmailConfig } from 'next-auth/providers';

const resend = new Resend(process.env.AUTH_RESEND_KEY!);
export async function sendVerificationRequest(params: {
  identifier: string;
  url: string;
  provider: EmailConfig;
  token: string;
  theme: Theme;
  request: Request;
}): Promise<any> {
  const { identifier, url, provider } = params;
  const { host } = new URL(url);
  // NOTE: You are not required to use `nodemailer`, use whatever you want.

  try {
    const result = await resend.emails.send({
      to: identifier,
      from: provider.from,
      subject: `Sign in to ${host}`,
      text: text({ url, host }),
      react: MagicLinkEmail({ url, host }),
    });

    return { success: true, result };
  } catch (error) {
    console.error(error);
    throw new Error('Failed to send the verification Email.');
  }
}

function text({ url, host }: { url: string; host: string }) {
  return `Sign in to ${host}\n${url}\n\n`;
}

//TODO: use resend
