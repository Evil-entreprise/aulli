'use server';
import { signIn } from '~auth';
import emailSchema from '~schema/email';
import { z } from 'zod';

export default async function ResendAuthAction(email: FormDataEntryValue) {
  try {
    const validatedEmail = emailSchema.parse(email);
    if (validatedEmail) {
      await signIn('resend', {
        email,
        redirectTo: '/auth/verify-request',
      });
      return { message: 'Check your email for the magic link', error: null };
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log(error);
      return { message: null, error: 'Invalid email format' };
    }
    return { message: null, error: 'An unexpected error occurred' };
  }
}
