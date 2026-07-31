'use client';

import * as React from 'react';
import { useGSAP } from '@gsap/react';

import { gsap, prefersReducedMotion } from '@/lib/gsap';

interface SignatureWaveProps {
  className?: string;
  delay?: number;
}

/**
 * The single recurring signature element of the site: a current-line drawn from
 * the green curve in the Interpetro mark. It draws itself once on the hero load,
 * then holds as a quiet, permanent horizon line — the same motion is reused at
 * smaller scale as the section-divider throughout the rest of the site.
 */
export function SignatureWave({ className, delay = 1.1 }: SignatureWaveProps) {
  const pathRef = React.useRef<SVGPathElement>(null);

  useGSAP(() => {
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
      duration: 2.2,
      delay,
      ease: 'power3.out',
    });
  }, []);

  return (
    <svg
      viewBox="0 0 1440 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        ref={pathRef}
        d="M0 78C160 20 320 100 480 62C640 24 800 96 960 58C1120 20 1280 92 1440 46"
        stroke="#9BD600"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
