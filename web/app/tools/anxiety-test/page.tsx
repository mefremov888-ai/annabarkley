import type { Metadata } from 'next';
import { AnxietyTest } from '@/components/sections/AnxietyTest';
import { ogImage } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Anxiety Self-Check',
  description: 'A 10-question check-in to understand your current anxiety level. Bilingual EN/RU.',
  alternates: { canonical: '/tools/anxiety-test' },
  openGraph: {
    title: 'Anxiety Self-Check',
    url: '/tools/anxiety-test',
    images: ogImage({ kind: 'tools', title: 'Anxiety Self-Check' }),
  },
  twitter: { card: 'summary_large_image', images: ogImage({ kind: 'tools', title: 'Anxiety Self-Check' }) },
};

export default function Page() {
  return <AnxietyTest />;
}
