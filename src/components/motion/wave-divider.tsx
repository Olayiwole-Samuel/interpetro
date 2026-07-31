'use client';

import * as React from 'react';
import { useGSAP } from '@gsap/react';

import { gsap, prefersReducedMotion } from '@/lib/gsap';
import { cn } from '@/lib/utils';

interface WaveDividerProps {
  className?: string;
  variant?: 'straight' | 'curve';
}

/** A thin green line that draws itself left-to-right when it enters the viewport. Used to separate sections. */
export function WaveDivider({ className, variant = 'curve' }: WaveDividerProps) {
  const pathRef = React.useRef<SVGPathElement>(null);
  const wrapRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = pathRef.current;
      if (!el) return;
      const length = el.getTotalLength();

      if (prefersReducedMotion()) {
        gsap.set(el, { strokeDasharray: length, strokeDashoffset: 0 });
        return;
      }

      gsap.set(el, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(el, {
        strokeDashoffset: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: wrapRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });
    },
    { scope: wrapRef }
  );

  const d = variant === 'curve' ? 'M0 12C120 2 240 22 360 12' : 'M0 1H360';

  return (
    <div ref={wrapRef} className={cn('w-24', className)}>
      <svg viewBox="0 0 360 24" fill="none" className="w-full h-6" aria-hidden="true">
        <path ref={pathRef} d={d} stroke="#9BD600" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
}
