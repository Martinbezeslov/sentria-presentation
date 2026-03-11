'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';

export function Slide03Accounting() {
  return (
    <SlideLayout glowColor="orange" glowPosition="top-right">
      <div className="text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[120px] mb-6"
        >
          🧾
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-display gradient-text-warm mb-8"
        >
          "Vždyť mám účetní..."
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="space-y-4"
        >
          <p className="text-title text-[var(--text-secondary)]">
            Účetní zpracuje faktury.
          </p>
          <p className="text-title text-[var(--text-muted)]">
            Ale kdo hlídá, že jste je vůbec vystavili?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-12 glass-card p-6 inline-block"
        >
          <p className="text-body text-[var(--text-secondary)]">
            Účetní pracuje s tím, co dostane.<br/>
            <span className="gradient-text-warm font-semibold">Ne s tím, co jste zapomněli.</span>
          </p>
        </motion.div>
      </div>
    </SlideLayout>
  );
}
