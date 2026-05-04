import type { Metadata } from 'next';
import { EmotionWheel } from '@/components/sections/EmotionWheel';
import { ogImage } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Emotion Wheel',
  description: "An interactive wheel to name what you're feeling. Bilingual EN/RU.",
  alternates: { canonical: '/tools/emotion-wheel' },
  openGraph: {
    title: 'Emotion Wheel',
    url: '/tools/emotion-wheel',
    images: ogImage({ kind: 'tools', title: 'Emotion Wheel' }),
  },
  twitter: { card: 'summary_large_image', images: ogImage({ kind: 'tools', title: 'Emotion Wheel' }) },
};

export default function Page() {
  return <EmotionWheel />;
}
