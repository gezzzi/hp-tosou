'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  distance?: number;
  scale?: boolean;
  scaleFrom?: number;
  margin?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  distance = 30,
  scale = false,
  scaleFrom = 0.95,
  margin = "-100px",
  ...props
}: ScrollRevealProps) {
  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
        ...(scale ? { scale: scaleFrom } : {}),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        ...(scale ? { scale: 1 } : {}),
      }}
      exit={{
        opacity: 0,
        ...directions[direction],
        ...(scale ? { scale: scaleFrom } : {}),
      }}
      viewport={{ once: false, margin: margin }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
