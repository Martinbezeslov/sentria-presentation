'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';

const excelProblems = [
  'Verzování? Jaké verzování?',
  'Sdílení = chaos',
  'Žádná automatizace',
  'Data v izolaci',
];

export function Slide04Excel() {
  return (
    <SlideLayout glowColor="orange" glowPosition="center">
      <div className="max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-display text-center mb-4"
        >
          <span className="text-green-500">Excel</span> je skvělý nástroj
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-title text-center text-[var(--text-muted)] mb-12"
        >
          ...ale ne pro řízení firmy
        </motion.p>

        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
          {excelProblems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.15 }}
              className="glass-card p-4 flex items-center gap-3"
            >
              <span className="text-red-400 text-xl">✕</span>
              <span className="text-body text-[var(--text-secondary)]">{problem}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <p className="text-title gradient-text-warm">
            Potřebujete systém, ne tabulku.
          </p>
        </motion.div>
      </div>
    </SlideLayout>
  );
}
