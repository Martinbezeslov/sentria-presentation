'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';

export function Slide09Demo() {
  return (
    <SlideLayout glowColor="cyan" glowPosition="center">
      <div className="text-center max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-display gradient-text-cool mb-8"
        >
          Ukázka v praxi
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card p-8 accent-border"
        >
          <div className="aspect-video bg-gradient-to-br from-cyan-500/10 to-violet-500/10 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-[80px] mb-4">🎬</div>
              <p className="text-title text-[var(--text-secondary)]">
                Live demo / Video ukázka
              </p>
              <p className="text-body text-[var(--text-muted)] mt-2">
                Dashboard → Faktura → Report
              </p>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-body text-[var(--text-muted)] mt-8"
        >
          ↑ Sem vložíte screen recording nebo live demo
        </motion.p>
      </div>
    </SlideLayout>
  );
}
