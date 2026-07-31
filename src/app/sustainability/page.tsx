import type { Metadata } from 'next';
import { Leaf, HeartPulse, Users, Landmark, type LucideIcon } from 'lucide-react';

import { PageHero } from '@/components/layout/page-hero';
import { FadeUp } from '@/components/motion/fade-up';
import { RevealGroup } from '@/components/motion/reveal-group';
import { WaveDivider } from '@/components/motion/wave-divider';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { sustainabilityPillars } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Sustainability',
  description:
    "Interpetro's commitment to environmental stewardship, health and safety, community impact, and governance across our operations.",
};

const iconMap: Record<string, LucideIcon> = { Leaf, HeartPulse, Users, Landmark };

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="Operating Responsibly, For the Long Run"
        description="Environmental stewardship, health and safety, community impact, and governance sit at the center of how we operate."
      />

      <section className="section bg-white">
        <div className="container-narrow">
          <FadeUp className="max-w-2xl">
            <span className="eyebrow">Our Four Pillars</span>
            <h2 className="mt-4 text-3xl sm:text-4xl text-ink">
              Sustainability is how we operate, not an afterthought
            </h2>
            <WaveDivider className="mt-6" />
          </FadeUp>

          <RevealGroup className="grid sm:grid-cols-2 gap-6 lg:gap-8 mt-14">
            {sustainabilityPillars.map((pillar) => {
              const Icon = iconMap[pillar.icon] ?? Leaf;
              return (
                <Card key={pillar.title} data-reveal className="p-8">
                  <div className="h-12 w-12 rounded-md bg-brand-green/15 flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-brand-green-deep" />
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-2">{pillar.title}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed mb-4">{pillar.summary}</p>

                  <Accordion type="single" collapsible>
                    <AccordionItem value="details" className="border-t border-border border-b-0">
                      <AccordionTrigger className="text-sm py-4">
                        See our commitments
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          {pillar.points.map((point) => (
                            <li key={point} className="flex items-start gap-2.5 text-sm">
                              <span className="h-1.5 w-1.5 rounded-full bg-brand-green mt-1.5 shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </Card>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      <section className="section bg-surface-light">
        <div className="container-narrow max-w-3xl">
          <FadeUp>
            <span className="eyebrow">Health, Safety &amp; Environment</span>
            <h2 className="mt-4 text-3xl sm:text-4xl text-ink">A Zero-Harm Standard</h2>
            <WaveDivider className="mt-6" />
            <p className="mt-6 text-ink-muted leading-relaxed">
              Every Interpetro site operates under a rigorous health, safety, and environment
              management system aligned with international standards. We conduct regular
              audits, safety drills, and independent assurance reviews across all operated
              assets — because no volume of production justifies compromising the safety of
              our people or the communities where we work.
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
