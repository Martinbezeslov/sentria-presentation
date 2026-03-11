'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';
import { GlassCard } from '../ui/GlassCard';

export function Slide05Hours() {
  return (
    <SlideLayout glowColor="orange" glowPosition="top-left">
      <div className="max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-display text-center gradient-text-warm mb-12"
        >
          Evidence hodin
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <GlassCard className="h-full">
              <div className="text-center">
                <div className="text-[60px] mb-4">👔</div>
                <h3 className="text-title text-[var(--text-primary)] mb-4">Majitel</h3>
                <p className="text-body text-[var(--text-muted)]">
                  "Vždyť já vím, co dělám. Nepotřebuju si psát hodiny."
                </p>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <p className="text-small text-red-400">
                    → Nevíte, kolik vás zakázka OPRAVDU stála
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <GlassCard className="h-full">
              <div className="text-center">
                <div className="text-[60px] mb-4">👷</div>
                <h3 className="text-title text-[var(--text-primary)] mb-4">Zaměstnanci</h3>
                <p className="text-body text-[var(--text-muted)]">
                  "Napíšu to večer... nebo zítra... nebo za týden."
                </p>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <p className="text-small text-red-400">
                    → Nepřesná data = špatné rozhodnutí
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
}
