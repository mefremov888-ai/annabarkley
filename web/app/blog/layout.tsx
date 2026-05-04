import type { Metadata } from 'next';
import { ogImage } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Articles on mental health',
  description:
    'Articles by a psychologist in Dubai for parents, teens, adults, and expat families. Bilingual EN/RU.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Articles on mental health',
    url: '/blog',
    images: ogImage({ kind: 'blog' }),
  },
  twitter: {
    card: 'summary_large_image',
    images: ogImage({ kind: 'blog' }),
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
