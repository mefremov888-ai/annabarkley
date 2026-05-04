import type { Metadata } from 'next';
import { ogImage } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Get in touch',
  description:
    'Book a free 15-minute call with a psychologist in Dubai. Bilingual EN/RU. Sun–Thu 9:00–18:00.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Book your free 15-minute call',
    url: '/contact',
    images: ogImage({ kind: 'contact' }),
  },
  twitter: {
    card: 'summary_large_image',
    images: ogImage({ kind: 'contact' }),
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
