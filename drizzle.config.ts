import { defineConfig } from 'drizzle-kit';
import env from '~env';
import type { Config } from 'drizzle-kit';

type Dialect = 'postgresql' | 'mysql' | 'sqlite';
export default defineConfig({
  dialect: 'postgresql' as Dialect,
  schema: './drizzle/schema.ts',
  out: './drizzle/migrations',
  dbCredentials: {
    url: env.DATABASE_URL!,
    ssl: false,
  },
  verbose: true,
  strict: true,
}) satisfies Config;
