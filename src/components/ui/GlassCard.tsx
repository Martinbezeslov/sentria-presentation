'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  accent?: boolean;
}

export function GlassCard({ children, className = '', hover = true, accent = false }: GlassCardProps) {
  return (
    <motion.div
      className={`glass-card p-6 ${accent ? 'accent-border' : ''} ${className}`}
      whileHover={hover ? { scale: 1.02, y: -4 } : undefined}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
