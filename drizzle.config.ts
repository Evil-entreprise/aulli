import { defineConfig } from 'drizzle-kit';
import type { Config } from 'drizzle-kit';
import { Dialect } from 'drizzle-orm';

export default defineConfig({
  schema: './drizzle/schema.ts',
  out: './drizzle/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    ssl: false,
  },
  verbose: true,
  strict: true,
});
