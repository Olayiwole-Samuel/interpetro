'use client';

import * as React from 'react';
import { useGSAP } from '@gsap/react';

import { gsap, prefersReducedMotion } from '@/lib/gsap';

interface RevealGroupProps {
  children: React.ReactNode;
  className?: string;
  selector?: string;
  stagger?: number;
}

/** Wrap a grid of cards; each direct child with [data-reveal] fades/lifts in with a stagger as the group scrolls into view. */
export function RevealGroup({ children, className, selector = '[data-reveal]', stagger = 0.12 }: RevealGroupProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const items = ref.current.querySelectorAll(selector);
      if (!items.length) return;

      if (prefersReducedMotion()) {
        gsap.set(items, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(items, { opacity: 0, y: 32 });
      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
