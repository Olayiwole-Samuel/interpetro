import Link from 'next/link';
import { ShieldCheck, Users2, Globe2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { FadeUp } from '@/components/motion/fade-up';
import { WaveDivider } from '@/components/motion/wave-divider';

const points = [
  { icon: ShieldCheck, text: 'Safety-led operating culture across every asset' },
  { icon: Users2, text: 'Local workforce development and community investment' },
  { icon: Globe2, text: 'Partnerships spanning Africa and international markets' },
];

export function AboutPreview() {
  return (
    <section className="section bg-surface-light overflow-hidden">
      <div className="container-narrow grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <FadeUp>
          <div className="relative rounded-lg overflow-hidden aspect-[4/5] bg-gradient-to-br from-brand-navy via-brand-blue-deep to-brand-blue shadow-elevated">
            <svg
              viewBox="0 0 400 500"
              className="absolute inset-0 h-full w-full opacity-40"
              aria-hidden="true"
            >
              <g stroke="#9BD600" strokeWidth="1.4" fill="none" opacity="0.55">
                <circle cx="200" cy="250" r="60" />
                <circle cx="200" cy="250" r="120" />
                <circle cx="200" cy="250" r="180" />
              </g>
              <g fill="#FFFFFF" opacity="0.9">
                <circle cx="200" cy="250" r="5" />
                <circle cx="120" cy="180" r="4" />
                <circle cx="290" cy="150" r="4" />
                <circle cx="80" cy="330" r="4" />
                <circle cx="310" cy="350" r="4" />
              </g>
              <g stroke="#FFFFFF" strokeWidth="1" opacity="0.35">
                <line x1="200" y1="250" x2="120" y2="180" />
                <line x1="200" y1="250" x2="290" y2="150" />
                <line x1="200" y1="250" x2="80" y2="330" />
                <line x1="200" y1="250" x2="310" y2="350" />
              </g>
            </svg>
            <div className="absolute bottom-0 inset-x-0 p-8">
              <p className="text-white/90 text-sm font-medium">
                Operating across exploration, gas development, and trading — one integrated network.
              </p>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <span className="eyebrow">Who We Are</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
            Built on partnership, engineered for reliability
          </h2>
          <WaveDivider className="mt-6" />
          <p className="mt-6 text-ink-muted leading-relaxed max-w-xl">
            For over a decade, Interpetro Energy Resources Limited has grown from a single
            upstream partnership into an integrated energy company. We combine technical
            discipline with deep local knowledge to deliver energy that industry, communities,
            and governments can depend on.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <span className="h-8 w-8 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                  <Icon className="h-4 w-4 text-brand-blue" />
                </span>
                <span className="text-ink text-sm font-medium pt-1.5">{text}</span>
              </li>
            ))}
          </ul>

          <Button asChild variant="primary" size="lg" className="mt-10">
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </FadeUp>
      </div>
    </section>
  );
}
