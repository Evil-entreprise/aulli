import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import env from '~env';

const migrationClient = postgres(env.DATABASE_URL!, {
  max: 1,
});

try {
  console.log('Initializing migration client:', migrationClient);
  await migrate(drizzle(migrationClient), {
    migrationsFolder: './',
  });
  console.log('Migrations completed successfully');
} catch (error) {
  console.error('Migration failed:', error);
}

await migrationClient.end();
console.log('Migration client ended');
