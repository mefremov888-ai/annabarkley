import { Hero } from '@/components/sections/Hero';
import { Marquee } from '@/components/sections/Marquee';
import { Pillars } from '@/components/sections/Pillars';
import { Testimonials } from '@/components/sections/Testimonials';
import { LeadMagnet } from '@/components/sections/LeadMagnet';
import { CTABanner } from '@/components/sections/CTABanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Pillars />
      <Testimonials />
      <LeadMagnet />
      <CTABanner />
    </>
  );
}
