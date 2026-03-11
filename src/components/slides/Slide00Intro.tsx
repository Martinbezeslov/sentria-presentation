'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';
import Image from 'next/image';

const facts = [
  { emoji: '📹', text: 'Podnikám od 2016 (video produkce)' },
  { emoji: '🎓', text: 'Prodej.se – naučili jsme 500+ lidí natáčet' },
  { emoji: '💼', text: 'Klienti: Samsung, Notino, Rohlík, CSG...' },
  { emoji: '🔧', text: 'Poslední rok: vlastní systémy pro firmu' },
];

export function Slide00Intro() {
  return (
    <SlideLayout glowColor="orange" glowPosition="top-right">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">
        {/* Photo section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden glass-card"
        >
          <Image
            src="/bezeslov-hero.png"
            alt="Martin Tuma - Bezeslov"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Text section */}
        <div className="flex-1 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body text-[var(--text-muted)] mb-2"
          >
            Možná mě znáte z video produkce nebo workshopů...
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-display gradient-text-warm mb-8"
          >
            Dneska mám něco jiného
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-title text-[var(--text-secondary)] mb-8"
          >
            Něco, na čem jsme pracovali poslední rok a co nám šetří desítky hodin měsíčně.
          </motion.p>

          <div className="space-y-3">
            {facts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-3 text-body text-[var(--text-muted)]"
              >
                <span className="text-xl">{fact.emoji}</span>
                <span>{fact.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
