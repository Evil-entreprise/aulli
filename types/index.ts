import { users } from '~drizzle/schema';
import { InferSelectModel } from 'drizzle-orm';
import * as z from 'zod';
import type { SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type User = InferSelectModel<typeof users>;

type NewUser = typeof users.$inferInsert;
