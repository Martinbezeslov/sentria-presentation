'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';

const flowSteps = [
  { icon: '💬', label: 'Dotaz', desc: '"Napiš nabídku pro klienta XY"' },
  { icon: '🔍', label: 'Kontext', desc: 'Načte pravidla, historii, styl' },
  { icon: '🧠', label: 'Analýza', desc: 'Aplikuje vaše know-how' },
  { icon: '✨', label: 'Výstup', desc: 'Personalizovaná odpověď' },
];

export function Slide16Flow() {
  return (
    <SlideLayout glowColor="violet" glowPosition="bottom-left">
      <div className="max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-display text-center gradient-text mb-16"
        >
          Proces zpracování
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
          {flowSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }}
              className="flex items-center"
            >
              <div className="glass-card p-6 text-center min-w-[160px]">
                <div className="text-[40px] mb-2">{step.icon}</div>
                <p className="text-title text-[var(--text-primary)] mb-1">{step.label}</p>
                <p className="text-small text-[var(--text-muted)]">{step.desc}</p>
              </div>

              {index < flowSteps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.2 }}
                  className="hidden md:block text-2xl text-[var(--accent-violet)] mx-2"
                >
                  →
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="text-center mt-12"
        >
          <p className="text-body text-[var(--text-muted)]">
            Výsledek: odpověď jako byste ji psali sami, ale za zlomek času
          </p>
        </motion.div>
      </div>
    </SlideLayout>
  );
}
