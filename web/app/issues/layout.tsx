import type { Metadata } from 'next';
import { ogImage } from '@/lib/og';

export const metadata: Metadata = {
  title: 'What I help with',
  description:
    'A psychologist in Dubai supporting children, teens, and adults. Anxiety, depression, burnout, parenting, expat life — and more.',
  alternates: { canonical: '/issues' },
  openGraph: {
    title: 'What I help with',
    url: '/issues',
    images: ogImage({ kind: 'issues' }),
  },
  twitter: {
    card: 'summary_large_image',
    images: ogImage({ kind: 'issues' }),
  },
};

export default function IssuesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
