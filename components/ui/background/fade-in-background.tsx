'use client';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

export default function FadeInBackground({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: [0.36, 0.44, 0.74, 0.75] }}
      className='h-dvh w-dvw flex items-center justify-center'
    >
      {children}
    </motion.div>
  );
}
