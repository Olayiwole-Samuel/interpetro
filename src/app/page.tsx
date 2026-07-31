import { Hero } from '@/components/home/hero';
import { Stats } from '@/components/home/stats';
import { ServicesPreview } from '@/components/home/services-preview';
import { AboutPreview } from '@/components/home/about-preview';
import { CTA } from '@/components/home/cta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <AboutPreview />
      <CTA />
    </>
  );
}
