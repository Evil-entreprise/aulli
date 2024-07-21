import { z } from 'zod';

const supportedEmailProviders = [
  'gmail.com',
  'yahoo.com',
  'yandex.com',
  'outlook.com',
  'icloud.com',
  'aol.com',
  'protonmail.com',
  'zoho.com',
  'gmx.com',
  'mail.com',
];

const isSupportedEmail = (email: string) => {
  const domain = email.split('@')[1];
  return supportedEmailProviders.includes(domain);
};

const emailSchema = z
  .string()
  .email('Invalid email address')
  .refine((email: string) => isSupportedEmail(email), {
    message: `Email needs to be one of the following providers: ${supportedEmailProviders.join(
      ', '
    )}`,
  });

export default emailSchema;
