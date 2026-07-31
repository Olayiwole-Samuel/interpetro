import { Counter } from '@/components/motion/counter';
import { RevealGroup } from '@/components/motion/reveal-group';
import { stats } from '@/lib/site-data';

export function Stats() {
  return (
    <section className="relative -mt-16 sm:-mt-20 z-20">
      <div className="container-narrow">
        <RevealGroup className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              data-reveal
              className="rounded-lg bg-white shadow-elevated px-6 py-8 sm:py-10 text-center border border-border"
            >
              <div className="text-3xl sm:text-4xl font-bold text-brand-blue">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-xs sm:text-sm text-ink-muted font-medium leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
