import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { FadeUp } from '@/components/motion/fade-up';

export function CTA() {
  return (
    <section className="relative bg-brand-blue overflow-hidden">
      <svg
        viewBox="0 0 1440 80"
        className="absolute top-0 inset-x-0 w-full h-10 text-brand-blue"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 40C240 8 480 8 720 40C960 72 1200 72 1440 40V0H0V40Z" fill="currentColor" />
      </svg>

      <div className="container-narrow py-24 sm:py-28 text-center relative z-10">
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
            Let&rsquo;s Build the Future of Energy Together
          </h2>
          <p className="mt-5 text-white/80 max-w-xl mx-auto leading-relaxed">
            Whether you&rsquo;re a partner, investor, or off-taker, our team is ready to discuss
            how Interpetro can support your energy needs.
          </p>
          <div className="mt-10">
            <Button asChild variant="accent" size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
