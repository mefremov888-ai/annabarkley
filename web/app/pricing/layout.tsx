import type { Metadata } from 'next';
import { ogImage } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Transparent pricing for therapy with a psychologist in Dubai. From 700 AED per session, with packages.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Transparent pricing — from 700 AED',
    url: '/pricing',
    images: ogImage({ kind: 'pricing' }),
  },
  twitter: {
    card: 'summary_large_image',
    images: ogImage({ kind: 'pricing' }),
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
