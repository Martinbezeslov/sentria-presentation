'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';

export function Slide15Diagram() {
  return (
    <SlideLayout glowColor="violet" glowPosition="center">
      <div className="max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-display text-center gradient-text mb-12"
        >
          Jak LACO přemýšlí
        </motion.h2>

        <div className="relative">
          {/* Central brain */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="glass-card p-8 accent-border">
              <div className="text-[60px] text-center">🧠</div>
              <p className="text-title gradient-text text-center mt-2">LACO</p>
            </div>
          </motion.div>

          {/* Orbiting elements */}
          <div className="relative h-[400px]">
            {/* Rules */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute left-0 top-1/4 glass-card p-4"
            >
              <div className="text-[32px] mb-2">📜</div>
              <p className="text-body text-[var(--text-secondary)]">Pravidla</p>
              <p className="text-small text-[var(--text-muted)]">Cenotvorba, styl, procesy</p>
            </motion.div>

            {/* Memory */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute right-0 top-1/4 glass-card p-4"
            >
              <div className="text-[32px] mb-2">💾</div>
              <p className="text-body text-[var(--text-secondary)]">Paměť</p>
              <p className="text-small text-[var(--text-muted)]">Klienti, projekty, lekce</p>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="absolute left-1/4 bottom-0 glass-card p-4"
            >
              <div className="text-[32px] mb-2">🔧</div>
              <p className="text-body text-[var(--text-secondary)]">Nástroje</p>
              <p className="text-small text-[var(--text-muted)]">Kalendář, web, soubory</p>
            </motion.div>

            {/* Context */}
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="absolute right-1/4 top-0 glass-card p-4"
            >
              <div className="text-[32px] mb-2">🎯</div>
              <p className="text-body text-[var(--text-secondary)]">Kontext</p>
              <p className="text-small text-[var(--text-muted)]">Kdo jste, co děláte</p>
            </motion.div>

            {/* Connecting lines - SVG */}
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="absolute inset-0 w-full h-full"
              style={{ zIndex: 0 }}
            >
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--accent-violet)" />
                  <stop offset="100%" stopColor="var(--accent-cyan)" />
                </linearGradient>
              </defs>
              {/* Lines from center to each element */}
              <line x1="50%" y1="50%" x2="15%" y2="35%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="8,4" />
              <line x1="50%" y1="50%" x2="85%" y2="35%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="8,4" />
              <line x1="50%" y1="50%" x2="30%" y2="85%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="8,4" />
              <line x1="50%" y1="50%" x2="70%" y2="15%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="8,4" />
            </motion.svg>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
