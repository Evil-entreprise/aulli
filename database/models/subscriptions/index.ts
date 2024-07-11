import { pgEnum } from 'drizzle-orm/pg-core';

const plan_type = pgEnum('plan_type', ['TRIAL', 'MONTHLY', 'YEARLY']);
export default plan_type;
