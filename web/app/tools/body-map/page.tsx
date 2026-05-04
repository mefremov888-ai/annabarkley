import type { Metadata } from 'next';
import { BodyMap } from '@/components/sections/BodyMap';
import { ogImage } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Body Map · with Mira',
  description:
    'An interactive body map — Mira walks you through how emotions show up in different parts of the body. Bilingual EN/RU.',
  alternates: { canonical: '/tools/body-map' },
  openGraph: {
    title: 'Body Map — with Mira',
    url: '/tools/body-map',
    images: ogImage({ kind: 'tools', title: 'Body Map — with Mira' }),
  },
  twitter: { card: 'summary_large_image', images: ogImage({ kind: 'tools', title: 'Body Map — with Mira' }) },
};

export default function Page() {
  return <BodyMap />;
}
