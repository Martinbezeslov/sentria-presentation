'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';

const points = [
  { emoji: '🎯', text: 'Přehled o penězích v reálném čase' },
  { emoji: '⏰', text: 'Evidence hodin bez bolesti' },
  { emoji: '📊', text: 'Data pro lepší rozhodnutí' },
  { emoji: '🚀', text: 'Růst bez chaosu' },
];

export function Slide11Summary() {
  return (
    <SlideLayout glowColor="cyan" glowPosition="center">
      <div className="max-w-4xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-display text-center gradient-text-cool mb-12"
        >
          Co získáte
        </motion.h2>

        <div className="space-y-4 max-w-2xl mx-auto">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
              className="glass-card p-5 flex items-center gap-4"
            >
              <span className="text-[36px]">{point.emoji}</span>
              <span className="text-title text-[var(--text-secondary)]">{point.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-center mt-12"
        >
          <p className="text-body text-[var(--text-muted)]">
            A to není všechno...
          </p>
        </motion.div>
      </div>
    </SlideLayout>
  );
}
