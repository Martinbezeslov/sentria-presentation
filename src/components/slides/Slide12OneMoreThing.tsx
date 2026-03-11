'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';

export function Slide12OneMoreThing() {
  return (
    <SlideLayout glowColor="violet" glowPosition="center">
      <div className="text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <p className="text-title text-[var(--text-muted)] italic">
            "One more thing..."
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-hero gradient-text mb-8"
        >
          AI asistent
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="text-title text-[var(--text-secondary)]"
        >
          který váš byznys opravdu zná
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="mt-16"
        >
          <p className="text-small text-[var(--text-muted)]">
            — Steve Jobs style reveal —
          </p>
        </motion.div>
      </div>
    </SlideLayout>
  );
}
