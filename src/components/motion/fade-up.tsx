'use client';

import * as React from 'react';
import { useGSAP } from '@gsap/react';

import { gsap, prefersReducedMotion } from '@/lib/gsap';

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Trigger the animation as soon as it mounts (hero content) instead of on scroll */
  immediate?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

export function FadeUp({
  children,
  className,
  delay = 0,
  y = 28,
  immediate = false,
  as = 'div',
}: FadeUpProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const Tag = as as any;

  useGSAP(
    () => {
      if (!ref.current) return;
      if (prefersReducedMotion()) {
        gsap.set(ref.current, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(ref.current, { opacity: 0, y });

      const anim = () =>
        gsap.to(ref.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay,
          ease: 'power3.out',
        });

      if (immediate) {
        anim();
      } else {
        gsap.to(ref.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      }
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
