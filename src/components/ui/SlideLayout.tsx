'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideLayoutProps {
  children: ReactNode;
  glowColor?: 'violet' | 'cyan' | 'orange';
  glowPosition?: 'top-left' | 'top-right' | 'center' | 'bottom-left' | 'bottom-right';
}

const glowPositions = {
  'top-left': '-top-1/4 -left-1/4',
  'top-right': '-top-1/4 -right-1/4',
  'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  'bottom-left': '-bottom-1/4 -left-1/4',
  'bottom-right': '-bottom-1/4 -right-1/4',
};

const glowColors = {
  violet: 'glow-violet',
  cyan: 'glow-cyan',
  orange: 'glow-orange',
};

export function SlideLayout({ children, glowColor = 'violet', glowPosition = 'top-right' }: SlideLayoutProps) {
  return (
    <div className="slide-container">
      {/* Ambient glow */}
      <div className={`ambient-glow ${glowColors[glowColor]} ${glowPositions[glowPosition]}`} />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 w-full h-full flex flex-col items-center justify-center"
      >
        {children}
      </motion.div>
    </div>
  );
}
