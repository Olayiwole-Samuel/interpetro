import { StaggerHeadline } from '@/components/motion/stagger-headline';
import { FadeUp } from '@/components/motion/fade-up';
import { SignatureWave } from '@/components/motion/signature-wave';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative bg-brand-navy-deep pt-40 pb-24 sm:pt-44 sm:pb-28 overflow-hidden">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(circle at 15% 20%, rgba(0,87,184,0.45), transparent 45%), radial-gradient(circle at 85% 80%, rgba(0,87,184,0.3), transparent 50%)',
        }}
      />
      <div className="container-narrow relative z-10">
        <FadeUp immediate>
          <span className="eyebrow text-brand-green inline-flex items-center gap-2 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
            {eyebrow}
          </span>
        </FadeUp>
        <StaggerHeadline
          text={title}
          as="h1"
          className="text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.08] max-w-3xl"
        />
        {description ? (
          <FadeUp immediate delay={0.5} className="mt-6 max-w-xl">
            <p className="text-white/70 text-lg leading-relaxed">{description}</p>
          </FadeUp>
        ) : null}
      </div>
      <div className="absolute bottom-0 inset-x-0">
        <SignatureWave className="w-full h-12" delay={0.9} />
      </div>
    </section>
  );
}
