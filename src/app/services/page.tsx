import type { Metadata } from 'next';
import Link from 'next/link';

import { PageHero } from '@/components/layout/page-hero';
import { FadeUp } from '@/components/motion/fade-up';
import { RevealGroup } from '@/components/motion/reveal-group';
import { Button } from '@/components/ui/button';
import { ServiceCard } from '@/components/services/service-card';
import { services } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Exploration & production, gas development, energy trading, infrastructure, power generation, and HSE advisory across the energy value chain.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Services Across the Energy Value Chain"
        description="From upstream development to trading and infrastructure, our teams deliver energy solutions with discipline and care."
      />

      <section className="section bg-white">
        <div className="container-narrow">
          <RevealGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                summary={service.summary}
                detail={service.detail}
                icon={service.icon}
              />
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="relative bg-brand-blue overflow-hidden">
        <div className="container-narrow py-24 text-center">
          <FadeUp>
            <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-xl mx-auto leading-tight">
              Looking for a partner across the value chain?
            </h2>
            <p className="mt-4 text-white/80 max-w-lg mx-auto">
              Speak with our team about exploration, gas development, trading, or
              infrastructure opportunities.
            </p>
            <div className="mt-9">
              <Button asChild variant="accent" size="lg">
                <Link href="/contact">Talk to Our Team</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
