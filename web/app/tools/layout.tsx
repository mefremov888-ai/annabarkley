import type { Metadata } from 'next';
import { ogImage } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Self-help tools',
  description:
    'Free, bilingual EN/RU self-help tools: anxiety check, burnout self-check, breathing, grounding, emotion wheel, body map with Mira, mood diary.',
  alternates: { canonical: '/tools' },
  openGraph: {
    title: 'Self-help tools — free',
    url: '/tools',
    images: ogImage({ kind: 'tools' }),
  },
  twitter: {
    card: 'summary_large_image',
    images: ogImage({ kind: 'tools' }),
  },
};

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
