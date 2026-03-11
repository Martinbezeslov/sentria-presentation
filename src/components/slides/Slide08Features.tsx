'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';
import { GlassCard } from '../ui/GlassCard';

const features = [
  {
    icon: '📊',
    title: 'Fakturace',
    desc: 'Automatické upomínky, přehled pohledávek',
  },
  {
    icon: '📦',
    title: 'Sklad',
    desc: 'Real-time stavy, minimální hladiny',
  },
  {
    icon: '⏱️',
    title: 'Výkazy',
    desc: 'Hodiny na projektu, report jedním klikem',
  },
  {
    icon: '📈',
    title: 'Reporting',
    desc: 'Dashboardy, marže, cash flow',
  },
];

export function Slide08Features() {
  return (
    <SlideLayout glowColor="cyan" glowPosition="top-right">
      <div className="max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-display text-center gradient-text-cool mb-12"
        >
          Co Sentria umí
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
            >
              <GlassCard className="text-center h-full">
                <div className="text-[48px] mb-4">{feature.icon}</div>
                <h3 className="text-title text-[var(--text-primary)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-small text-[var(--text-muted)]">
                  {feature.desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
