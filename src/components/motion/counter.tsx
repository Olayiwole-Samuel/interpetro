'use client';

import * as React from 'react';
import { useGSAP } from '@gsap/react';

import { gsap, prefersReducedMotion } from '@/lib/gsap';

interface CounterProps {
  to: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

export function Counter({ to, suffix = '', className, duration = 1.6 }: CounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      if (prefersReducedMotion()) {
        ref.current.textContent = `${to}${suffix}`;
        return;
      }

      const counter = { value: 0 };
      gsap.to(counter, {
        value: to,
        duration,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent = `${Math.round(counter.value)}${suffix}`;
          }
        },
      });
    },
    { scope: ref }
  );

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
