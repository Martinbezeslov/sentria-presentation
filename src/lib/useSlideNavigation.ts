'use client';

import { useState, useEffect, useCallback } from 'react';
import { TOTAL_SLIDES } from './slides-data';

export function useSlideNavigation() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [direction, setDirection] = useState(0);

  const goToSlide = useCallback((slideNum: number) => {
    if (slideNum >= 1 && slideNum <= TOTAL_SLIDES) {
      setDirection(slideNum > currentSlide ? 1 : -1);
      setCurrentSlide(slideNum);
    }
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 1) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(1);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(TOTAL_SLIDES);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide]);

  return {
    currentSlide,
    direction,
    nextSlide,
    prevSlide,
    goToSlide,
    isFirst: currentSlide === 1,
    isLast: currentSlide === TOTAL_SLIDES,
    progress: (currentSlide / TOTAL_SLIDES) * 100,
  };
}
