'use client';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cx } from '~utils/cx';

export default function FadeInBackground({
  children,
  clx,
}: Readonly<{
  children: ReactNode;
  clx?: string;
}>) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.36, 0.44, 0.74, 0.75] }}
      className={cx('h-dvh w-screen flex items-center justify-center', clx)}
    >
      {children}
    </motion.div>
  );
}
