'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';
import { GlassCard } from '../ui/GlassCard';

const problems = [
  { stat: '38%', label: 'faktur není zaplaceno včas', color: 'text-orange-400' },
  { stat: '8%', label: 'faktur není zaplaceno VŮBEC', color: 'text-red-400' },
  { stat: '90-120', label: 'dnů čeká stavebnictví na peníze', color: 'text-yellow-400' },
];

export function Slide02Problem() {
  return (
    <SlideLayout glowColor="orange" glowPosition="top-left">
      <div className="max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-display text-center gradient-text-warm mb-12"
        >
          Realita českého podnikání
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
            >
              <GlassCard className="text-center py-8" accent>
                <div className={`text-hero font-bold ${problem.color}`}>
                  {problem.stat}
                </div>
                <div className="text-body text-[var(--text-secondary)] mt-2">
                  {problem.label}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-center text-body text-[var(--text-muted)] mt-10"
        >
          Zdroj: Bisnode, CRIF 2024
        </motion.p>
      </div>
    </SlideLayout>
  );
}
