'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';
import { GlassCard } from '../ui/GlassCard';

const useCases = [
  {
    icon: '🅿️',
    title: 'Parkování',
    example: '"Kde zaparkuju u klienta na Vinohradech?"',
    result: 'Najde parkovací dům + cenu + navigaci',
  },
  {
    icon: '🚗',
    title: 'Cesta',
    example: '"Kolik mi zabere cesta k Novákovi?"',
    result: 'Spočítá čas s aktuální dopravou',
  },
  {
    icon: '🍽️',
    title: 'Oběd',
    example: '"Najdi oběd do 150 Kč u centra"',
    result: 'Doporučí restaurace z vašich oblíbených',
  },
  {
    icon: '📅',
    title: 'Kalendář',
    example: '"Přesuň schůzku s Petrem na příští týden"',
    result: 'Najde volný slot, pošle pozvánku',
  },
];

export function Slide17Everyday() {
  return (
    <SlideLayout glowColor="violet" glowPosition="top-left">
      <div className="max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-display text-center gradient-text mb-10"
        >
          Každodenní použití
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.15 }}
            >
              <GlassCard className="h-full">
                <div className="flex items-start gap-4">
                  <div className="text-[40px]">{useCase.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-title text-[var(--text-primary)] mb-2">{useCase.title}</h3>
                    <p className="text-body text-[var(--text-secondary)] italic mb-2">
                      {useCase.example}
                    </p>
                    <p className="text-small text-[var(--accent-cyan)]">
                      → {useCase.result}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-center text-body text-[var(--text-muted)] mt-8"
        >
          Všechno přes Telegram. Hlas nebo text.
        </motion.p>
      </div>
    </SlideLayout>
  );
}
