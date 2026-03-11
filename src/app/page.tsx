'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useSlideNavigation } from '@/lib/useSlideNavigation';
import { TOTAL_SLIDES } from '@/lib/slides-data';
import {
  Slide01Hook,
  Slide02Problem,
  Slide03Accounting,
  Slide04Excel,
  Slide05Hours,
  Slide06WhatsApp,
  Slide07Sentria,
  Slide08Features,
  Slide09Demo,
  Slide10Pricing,
  Slide11Summary,
  Slide12OneMoreThing,
  Slide13LacoFero,
  Slide14GPTvsClaude,
  Slide15Diagram,
  Slide16Flow,
  Slide17Everyday,
  Slide18CTA,
} from '@/components/slides';

const slideComponents: Record<number, React.ComponentType> = {
  1: Slide01Hook,
  2: Slide02Problem,
  3: Slide03Accounting,
  4: Slide04Excel,
  5: Slide05Hours,
  6: Slide06WhatsApp,
  7: Slide07Sentria,
  8: Slide08Features,
  9: Slide09Demo,
  10: Slide10Pricing,
  11: Slide11Summary,
  12: Slide12OneMoreThing,
  13: Slide13LacoFero,
  14: Slide14GPTvsClaude,
  15: Slide15Diagram,
  16: Slide16Flow,
  17: Slide17Everyday,
  18: Slide18CTA,
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

export default function Home() {
  const { currentSlide, direction, nextSlide, prevSlide, progress, isFirst, isLast } = useSlideNavigation();

  const CurrentSlideComponent = slideComponents[currentSlide];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[var(--bg-primary)]">
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/5 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-[var(--accent-violet)] to-[var(--accent-cyan)]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Slide counter */}
      <div className="absolute top-4 right-4 z-50 text-small text-[var(--text-muted)]">
        {currentSlide} / {TOTAL_SLIDES}
      </div>

      {/* Navigation hints */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 text-small text-[var(--text-muted)] opacity-50">
        ← → nebo mezerník pro navigaci
      </div>

      {/* Navigation buttons */}
      {!isFirst && (
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-4 text-2xl text-white/30 hover:text-white/70 transition-colors"
          aria-label="Previous slide"
        >
          ‹
        </button>
      )}
      {!isLast && (
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-4 text-2xl text-white/30 hover:text-white/70 transition-colors"
          aria-label="Next slide"
        >
          ›
        </button>
      )}

      {/* Slides */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
