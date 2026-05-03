import { AnxietyTest } from '@/components/sections/AnxietyTest';

export const metadata = {
  title: 'Anxiety Self-Check',
  description: 'A 10-question check-in to understand your current anxiety level. Bilingual EN/RU.',
};

export default function Page() {
  return <AnxietyTest />;
}
