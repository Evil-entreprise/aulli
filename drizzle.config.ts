import { defineConfig } from 'drizzle-kit';
import env from '~env';
export default defineConfig({
  schema: './drizzle/schema.ts',
  out: './database/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env['AUTH_DRIZZLE_URL'],
  },
  verbose: true,
  strict: true,
});
