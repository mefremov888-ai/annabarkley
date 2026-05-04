import type { Metadata } from 'next';
import { BurnoutTest } from '@/components/sections/BurnoutTest';
import { ogImage } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Burnout Self-Check',
  description: '12 questions across exhaustion, cynicism, and accomplishment. Bilingual EN/RU.',
  alternates: { canonical: '/tools/burnout-test' },
  openGraph: {
    title: 'Burnout Self-Check',
    url: '/tools/burnout-test',
    images: ogImage({ kind: 'tools', title: 'Burnout Self-Check' }),
  },
  twitter: { card: 'summary_large_image', images: ogImage({ kind: 'tools', title: 'Burnout Self-Check' }) },
};

export default function Page() {
  return <BurnoutTest />;
}
