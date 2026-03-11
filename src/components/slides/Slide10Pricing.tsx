'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';
import { GlassCard } from '../ui/GlassCard';

const tiers = [
  {
    name: 'Start',
    price: 'X XXX',
    features: ['Fakturace', 'Základní reporting', '1 uživatel'],
    highlighted: false,
  },
  {
    name: 'Business',
    price: 'X XXX',
    features: ['Vše ze Start', 'Sklad', 'Výkazy', '5 uživatelů'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Dle potřeb',
    features: ['Vše z Business', 'API integrace', 'Neomezení uživatelé'],
    highlighted: false,
  },
];

export function Slide10Pricing() {
  return (
    <SlideLayout glowColor="cyan" glowPosition="bottom-right">
      <div className="max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-display text-center gradient-text-cool mb-12"
        >
          Ceník
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
            >
              <GlassCard
                className={`text-center h-full ${tier.highlighted ? 'ring-2 ring-cyan-500/50' : ''}`}
                accent={tier.highlighted}
              >
                <h3 className="text-title text-[var(--text-primary)] mb-2">
                  {tier.name}
                </h3>
                <div className="text-display gradient-text-cool mb-4">
                  {tier.price}
                  {tier.price !== 'Dle potřeb' && <span className="text-body text-[var(--text-muted)]"> Kč/měs</span>}
                </div>
                <ul className="space-y-2">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="text-body text-[var(--text-secondary)] flex items-center gap-2 justify-center">
                      <span className="text-cyan-400">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center text-small text-[var(--text-muted)] mt-8"
        >
          * Ceny jsou ilustrativní, doplňte reálné hodnoty
        </motion.p>
      </div>
    </SlideLayout>
  );
}
