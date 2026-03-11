'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';

const messages = [
  { text: 'Hele, mohl bys nahodit ERP?', sender: 'them', delay: 0.3 },
  { text: 'Jasně, na co konkrétně?', sender: 'me', delay: 0.6 },
  { text: 'Fakturace, sklad, výroba...', sender: 'them', delay: 0.9 },
  { text: 'To je revoluce celý firmy. Jste ready?', sender: 'me', delay: 1.2 },
  { text: '😬 vlastně to tak moc nepotřebujeme', sender: 'them', delay: 1.5 },
];

export function Slide06WhatsApp() {
  return (
    <SlideLayout glowColor="cyan" glowPosition="center">
      <div className="max-w-2xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-display text-center mb-8"
        >
          Realita <span className="text-green-400">WhatsApp</span> konverzace
        </motion.h2>

        <div className="glass-card p-6 space-y-4">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: msg.sender === 'me' ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: msg.delay }}
              className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`px-4 py-2 rounded-2xl max-w-[80%] ${
                  msg.sender === 'me'
                    ? 'bg-green-600/30 text-green-100 rounded-br-sm'
                    : 'bg-white/10 text-[var(--text-secondary)] rounded-bl-sm'
                }`}
              >
                <p className="text-body">{msg.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="text-center text-title gradient-text-cool mt-8"
        >
          Nepotřebujete revoluci. Potřebujete evolucí.
        </motion.p>
      </div>
    </SlideLayout>
  );
}
