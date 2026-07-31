'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { StaggerHeadline } from '@/components/motion/stagger-headline';
import { FadeUp } from '@/components/motion/fade-up';
import { SignatureWave } from '@/components/motion/signature-wave';
import { HeroIllustration } from '@/components/home/hero-illustration';
import { siteConfig } from '@/lib/site-data';

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-brand-navy-deep">
      <HeroIllustration />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep via-brand-navy-deep/60 to-brand-navy-deep/20" />

      <div className="container-narrow relative z-10 pt-28 pb-24">
        <FadeUp immediate delay={0}>
          <span className="eyebrow text-brand-green inline-flex items-center gap-2 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
            Integrated Energy &middot; Africa
          </span>
        </FadeUp>

        <StaggerHeadline
          text={siteConfig.tagline}
          className="text-white font-bold text-5xl sm:text-6xl lg:text-7xl max-w-4xl leading-[1.05]"
        />

        <FadeUp immediate delay={0.55} className="mt-8 max-w-xl">
          <p className="text-white/75 text-lg leading-relaxed">
            Interpetro Energy Resources Limited delivers reliable, responsibly developed energy
            across exploration, gas development, and trading — built on long-term partnerships
            that power industry, communities, and growth across the continent.
          </p>
        </FadeUp>

        <FadeUp immediate delay={0.75} className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button asChild variant="accent" size="lg">
            <Link href="/services">Explore Our Services</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </FadeUp>
      </div>

      <div className="absolute bottom-0 inset-x-0 z-10">
        <SignatureWave className="w-full h-16 sm:h-20" />
      </div>

      <div className="absolute bottom-6 right-6 sm:right-10 z-10 hidden sm:flex flex-col items-center gap-2 text-white/50">
        <span className="text-[11px] tracking-[0.2em] uppercase [writing-mode:vertical-rl]">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  );
}
