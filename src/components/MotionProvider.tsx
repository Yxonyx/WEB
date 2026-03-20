'use client';

import { LazyMotion, domAnimation } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * Wraps app in LazyMotion to enable tree-shakeable framer-motion.
 * Components should use `m` instead of `motion` when inside this provider.
 * The `domAnimation` feature set is ~5KB vs ~35KB for the full `motion` import.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      {children}
    </LazyMotion>
  );
}
