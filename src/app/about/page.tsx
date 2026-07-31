import type { Metadata } from 'next';
import { Target, Eye } from 'lucide-react';

import { PageHero } from '@/components/layout/page-hero';
import { FadeUp } from '@/components/motion/fade-up';
import { RevealGroup } from '@/components/motion/reveal-group';
import { WaveDivider } from '@/components/motion/wave-divider';
import { Card } from '@/components/ui/card';
import { values, timeline } from '@/lib/site-data';
import { leadership } from '@/lib/leadership-data';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Learn about Interpetro Energy Resources Limited's mission, vision, core values, leadership, and growth across Africa's energy sector.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Interpetro"
        title="A Partner Built for the Long Term"
        description="From a single upstream partnership to an integrated energy company — our story is one of discipline, safety, and steady growth."
      />

      {/* Overview */}
      <section className="section bg-white">
        <div className="container-narrow grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <FadeUp>
            <span className="eyebrow">Company Overview</span>
            <h2 className="mt-4 text-3xl sm:text-4xl text-ink leading-tight">
              Reliable energy, delivered with discipline
            </h2>
            <WaveDivider className="mt-6" />
            <p className="mt-6 text-ink-muted leading-relaxed">
              Interpetro Energy Resources Limited operates across the energy value chain —
              from exploration and production through gas development to energy trading. We
              work alongside government, joint-venture partners, and host communities to
              develop energy resources responsibly and reliably.
            </p>
            <p className="mt-4 text-ink-muted leading-relaxed">
              Our approach is deliberately long-term: we build infrastructure and
              relationships designed to outlast any single project cycle, backed by rigorous
              safety and environmental standards.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="relative rounded-lg overflow-hidden aspect-[4/3] bg-gradient-to-br from-brand-navy-deep to-brand-blue-deep shadow-elevated flex items-center justify-center">
              <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full opacity-50" aria-hidden="true">
                <g stroke="#9BD600" strokeWidth="1.5" fill="none" opacity="0.6">
                  <path d="M0 220 C 80 200, 160 240, 240 210 C 300 190, 350 220, 400 200" />
                  <path d="M0 250 C 80 235, 160 265, 240 245 C 300 230, 350 250, 400 235" opacity="0.4" />
                </g>
                <g fill="#FFFFFF" opacity="0.85">
                  <rect x="80" y="120" width="10" height="100" />
                  <rect x="110" y="90" width="10" height="130" />
                  <rect x="140" y="140" width="10" height="80" />
                  <rect x="260" y="100" width="12" height="120" />
                  <rect x="290" y="70" width="12" height="150" />
                </g>
              </svg>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-surface-light">
        <div className="container-narrow grid md:grid-cols-2 gap-6 lg:gap-8">
          <RevealGroup className="contents">
            <Card data-reveal className="p-10">
              <div className="h-12 w-12 rounded-md bg-brand-blue/10 flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-brand-blue" />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-3">Our Mission</h3>
              <p className="text-ink-muted leading-relaxed">
                To deliver reliable, responsibly developed energy that powers industry,
                strengthens communities, and creates lasting value for our partners across
                Africa.
              </p>
            </Card>
            <Card data-reveal className="p-10">
              <div className="h-12 w-12 rounded-md bg-brand-green/15 flex items-center justify-center mb-6">
                <Eye className="h-6 w-6 text-brand-green-deep" />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-3">Our Vision</h3>
              <p className="text-ink-muted leading-relaxed">
                To be Africa&rsquo;s most trusted integrated energy company — recognized for
                safety, integrity, and the quality of our partnerships.
              </p>
            </Card>
          </RevealGroup>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-white">
        <div className="container-narrow">
          <FadeUp className="max-w-xl mx-auto text-center">
            <span className="eyebrow">What Guides Us</span>
            <h2 className="mt-4 text-3xl sm:text-4xl text-ink">Core Values</h2>
            <WaveDivider className="mt-6 mx-auto" />
          </FadeUp>

          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {values.map((value) => (
              <div
                key={value.title}
                data-reveal
                className="rounded-lg border border-border p-7 hover:border-brand-blue/30 hover:shadow-card transition-all duration-300 ease-power3"
              >
                <span className="text-brand-green font-bold text-sm">0{values.indexOf(value) + 1}</span>
                <h3 className="mt-3 text-lg font-bold text-ink">{value.title}</h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">{value.description}</p>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-surface-light">
        <div className="container-narrow">
          <FadeUp className="max-w-xl">
            <span className="eyebrow">Our Journey</span>
            <h2 className="mt-4 text-3xl sm:text-4xl text-ink">A Decade of Steady Growth</h2>
            <WaveDivider className="mt-6" />
          </FadeUp>

          <RevealGroup className="mt-16 relative">
            <div
              className="absolute left-[7px] sm:left-1/2 top-2 bottom-2 w-px bg-border sm:-translate-x-1/2"
              aria-hidden="true"
            />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  data-reveal
                  className={`relative flex sm:items-center gap-6 sm:gap-10 ${
                    i % 2 === 1 ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  <div className="absolute left-0 sm:left-1/2 top-1.5 sm:top-1/2 h-4 w-4 rounded-full bg-brand-green sm:-translate-x-1/2 sm:-translate-y-1/2 ring-4 ring-white" />
                  <div className="pl-10 sm:pl-0 sm:w-1/2" />
                  <div
                    className={`pl-10 sm:pl-0 sm:w-1/2 ${
                      i % 2 === 1 ? 'sm:text-right sm:pr-14' : 'sm:pl-14'
                    }`}
                  >
                    <span className="text-brand-blue font-bold text-lg">{item.year}</span>
                    <h3 className="mt-1 font-bold text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm text-ink-muted leading-relaxed max-w-sm sm:ml-auto">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </RevealGroup>
        </div>
      </section>

      {/* Leadership */}
      <section className="section bg-white">
        <div className="container-narrow">
          <FadeUp className="max-w-xl">
            <span className="eyebrow">Our People</span>
            <h2 className="mt-4 text-3xl sm:text-4xl text-ink">Leadership Team</h2>
            <WaveDivider className="mt-6" />
          </FadeUp>

          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {leadership.map((person) => (
              <div key={person.name} data-reveal className="text-center">
                <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-brand-blue to-brand-navy flex items-center justify-center text-white text-xl font-bold shadow-card">
                  {person.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <h3 className="mt-4 font-bold text-ink">{person.name}</h3>
                <p className="text-sm text-brand-blue font-semibold">{person.role}</p>
                <p className="mt-2 text-xs text-ink-muted leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
