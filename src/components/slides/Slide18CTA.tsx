'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';

export function Slide18CTA() {
  return (
    <SlideLayout glowColor="violet" glowPosition="center">
      <div className="text-center max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 50, filter: 'blur(20px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8 }}
          className="text-hero gradient-text mb-8"
        >
          Přestaňte makat jak blbí
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-title text-[var(--text-secondary)] mb-12"
        >
          Začněte pracovat chytře.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="glass-card p-8 inline-block accent-border"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-6">
              <span className="text-display gradient-text-cool">SENTRIA</span>
              <span className="text-title text-[var(--text-muted)]">+</span>
              <span className="text-display gradient-text">LACO</span>
            </div>
            <p className="text-body text-[var(--text-muted)]">
              ERP + AI = Váš nový standard
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-12 space-y-4"
        >
          <p className="text-title text-[var(--text-primary)]">
            Zavolejte a domluvme si demo
          </p>
          <p className="text-body gradient-text-warm font-semibold">
            +420 XXX XXX XXX
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="mt-16"
        >
          <p className="text-small text-[var(--text-muted)]">
            Děkuji za pozornost 🙏
          </p>
        </motion.div>
      </div>
    </SlideLayout>
  );
}
