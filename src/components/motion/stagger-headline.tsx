'use client';

import * as React from 'react';
import { useGSAP } from '@gsap/react';

import { gsap, prefersReducedMotion } from '@/lib/gsap';

interface StaggerHeadlineProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2';
  delay?: number;
}

/** Splits a headline into words and staggers them up into place — used once, in the hero. */
export function StaggerHeadline({ text, className, as = 'h1', delay = 0.15 }: StaggerHeadlineProps) {
  const ref = React.useRef<HTMLHeadingElement>(null);
  const words = text.split(' ');
  const Tag = as;

  useGSAP(
    () => {
      if (!ref.current) return;
      const wordEls = ref.current.querySelectorAll('span[data-word]');

      if (prefersReducedMotion()) {
        gsap.set(wordEls, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(wordEls, { opacity: 0, y: 40 });
      gsap.to(wordEls, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.08,
        delay,
      });
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-2 align-top">
          <span data-word className="inline-block will-change-transform">
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </span>
        </span>
      ))}
    </Tag>
  );
}
