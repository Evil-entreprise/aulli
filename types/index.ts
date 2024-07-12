import { users } from '~drizzle/schema';
import { InferSelectModel } from 'drizzle-orm';

export type User = InferSelectModel<typeof users>;

type NewUser = typeof users.$inferInsert;
