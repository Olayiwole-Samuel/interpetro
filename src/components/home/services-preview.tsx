import Link from 'next/link';
import { Drill, Flame, LineChart, ArrowRight } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RevealGroup } from '@/components/motion/reveal-group';
import { FadeUp } from '@/components/motion/fade-up';
import { WaveDivider } from '@/components/motion/wave-divider';

const preview = [
  {
    title: 'Exploration & Production',
    summary:
      'Locating and developing hydrocarbon reserves with disciplined engineering and rigorous safety standards.',
    icon: Drill,
  },
  {
    title: 'Gas Development',
    summary:
      'Converting associated and non-associated gas into reliable power and industrial feedstock.',
    icon: Flame,
  },
  {
    title: 'Energy Trading',
    summary:
      'Connecting supply and demand across crude, refined products, and gas markets worldwide.',
    icon: LineChart,
  },
];

export function ServicesPreview() {
  return (
    <section className="section bg-white">
      <div className="container-narrow">
        <FadeUp className="max-w-2xl">
          <span className="eyebrow">What We Do</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl text-ink">
            An integrated presence across the energy value chain
          </h2>
          <WaveDivider className="mt-6" />
        </FadeUp>

        <RevealGroup className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-14">
          {preview.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                data-reveal
                className="group relative overflow-hidden p-8 hover:shadow-elevated hover:-translate-y-1.5"
              >
                <div className="h-12 w-12 rounded-md bg-brand-blue/10 flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">{service.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed mb-6">{service.summary}</p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-power3 group-hover:translate-x-1" />
                </Link>
                <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-brand-green transition-all duration-500 ease-power3 group-hover:w-full" />
              </Card>
            );
          })}
        </RevealGroup>

        <div className="text-center mt-12">
          <Button asChild variant="outlineDark" size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
