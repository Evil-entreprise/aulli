import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import env from '~env';

const migrationClient = postgres(env['AUTH_DRIZZLE_URL']!, {
  max: 1,
  ssl: 'allow',
});

await migrate(drizzle(migrationClient), {
  migrationsFolder: '../database/migrations',
});

await migrationClient.end();
