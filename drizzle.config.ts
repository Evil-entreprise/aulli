import { defineConfig } from 'drizzle-kit';
import type { Config } from 'drizzle-kit';

export default defineConfig({
  schema: './drizzle/schema.ts',
  out: './drizzle/migrations',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    // ssl: true,
  },
  dialect: 'postgresql',
  verbose: true,
  strict: true,
}) satisfies Config;
