'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';

export function Slide01Hook() {
  return (
    <SlideLayout glowColor="orange" glowPosition="center">
      <div className="text-center max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 50, filter: 'blur(20px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-hero gradient-text-warm mb-8"
        >
          Makáte jak blbí...
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-title text-[var(--text-secondary)]"
        >
          ...a pořád nemáte prachy?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-16"
        >
          <p className="text-body text-[var(--text-muted)]">
            Nejste sami. Za chvíli vám ukážu proč.
          </p>
        </motion.div>
      </div>
    </SlideLayout>
  );
}
