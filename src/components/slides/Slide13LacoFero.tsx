'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';
import { GlassCard } from '../ui/GlassCard';

export function Slide13LacoFero() {
  return (
    <SlideLayout glowColor="violet" glowPosition="top-right">
      <div className="max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-display text-center gradient-text mb-12"
        >
          Seznamte se
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <GlassCard className="text-center" accent>
              <div className="text-[80px] mb-4">🤖</div>
              <h3 className="text-display gradient-text-warm mb-2">LACO</h3>
              <p className="text-body text-[var(--text-secondary)]">
                Martinův parťák
              </p>
              <p className="text-small text-[var(--text-muted)] mt-4">
                "Ladislav Conductor"
              </p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <GlassCard className="text-center" accent>
              <div className="text-[80px] mb-4">🤖</div>
              <h3 className="text-display gradient-text-cool mb-2">FERO</h3>
              <p className="text-body text-[var(--text-secondary)]">
                Ondrův asistent
              </p>
              <p className="text-small text-[var(--text-muted)] mt-4">
                "Ferdinand Robot"
              </p>
            </GlassCard>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center text-body text-[var(--text-muted)] mt-10"
        >
          Jiná jména. Stejná technologie. Personalizovaný přístup.
        </motion.p>
      </div>
    </SlideLayout>
  );
}
