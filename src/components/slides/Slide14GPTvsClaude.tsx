'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';
import { GlassCard } from '../ui/GlassCard';

export function Slide14GPTvsClaude() {
  return (
    <SlideLayout glowColor="violet" glowPosition="center">
      <div className="max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-display text-center mb-12"
        >
          <span className="text-[var(--text-muted)]">ChatGPT</span>
          {' '}vs{' '}
          <span className="gradient-text">LACO</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <GlassCard className="h-full opacity-60">
              <h3 className="text-title text-[var(--text-muted)] mb-6 text-center">ChatGPT</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-red-400">✕</span>
                  <span className="text-body text-[var(--text-muted)]">Generické odpovědi</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-red-400">✕</span>
                  <span className="text-body text-[var(--text-muted)]">Nezná váš kontext</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-red-400">✕</span>
                  <span className="text-body text-[var(--text-muted)]">Zapomíná mezi chaty</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-red-400">✕</span>
                  <span className="text-body text-[var(--text-muted)]">Nemá přístup k nástrojům</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <GlassCard className="h-full" accent>
              <h3 className="text-title gradient-text mb-6 text-center">LACO</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span className="text-body text-[var(--text-secondary)]">Zná vaše pravidla a styl</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span className="text-body text-[var(--text-secondary)]">Pamatuje si kontext</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span className="text-body text-[var(--text-secondary)]">Dlouhodobá paměť</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span className="text-body text-[var(--text-secondary)]">Kalendář, web, soubory</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
}
