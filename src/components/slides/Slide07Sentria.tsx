'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';

export function Slide07Sentria() {
  return (
    <SlideLayout glowColor="cyan" glowPosition="center">
      <div className="text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="mb-8"
        >
          <div className="inline-block glass-card p-8 accent-border">
            <h1 className="text-hero gradient-text-cool font-bold tracking-tight">
              SENTRIA
            </h1>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-title text-[var(--text-secondary)] mb-6"
        >
          ERP systém pro malé a střední firmy
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {['Modulární', 'Škálovatelný', 'České prostředí'].map((tag, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-body text-[var(--text-muted)]"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-body text-[var(--text-muted)] mt-12"
        >
          Začněte s tím, co potřebujete. Přidávejte, až budete růst.
        </motion.p>
      </div>
    </SlideLayout>
  );
}
