import { LegacyToolFrame } from '@/components/sections/LegacyToolFrame';

export const metadata = {
  title: 'Body Map (with Mira)',
  description: 'Mira walks you through how emotions show up in different parts of the body.',
};

export default function Page() {
  return <LegacyToolFrame slug="body-map" file="body-map.html" />;
}
