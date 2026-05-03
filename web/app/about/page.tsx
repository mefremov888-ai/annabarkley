'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import { useLang } from '@/lib/i18n/context';
import { PageHeader } from '@/components/sections/PageHeader';

const BIO = {
  en: [
    'I am a licensed psychologist based in Dubai, working with children, adolescents, and adults in international environments for over 10 years.',
    'My work is grounded in understanding how early experiences shape the way we think, feel, and relate to others — and how those patterns continue to influence us into adulthood.',
    'I believe every individual has the ability to grow when they feel safe, understood, and supported. My role is to provide that space.',
  ],
  ru: [
    'Я — психолог в Дубае, более 10 лет работающий с детьми, подростками и взрослыми в международной среде.',
    'Моя работа основана на понимании того, как ранний опыт формирует наше мышление, чувства и отношения с другими — и как эти паттерны продолжают влиять на нас во взрослом возрасте.',
    'Я верю, что каждый способен расти, когда чувствует себя в безопасности, понятым и поддержанным. Моя роль — создать это пространство.',
  ],
};

export default function AboutPage() {
  const { lang } = useLang();
  return (
    <>
      <PageHeader headingKey="about" />
      <section className="py-16 px-7 max-md:py-10">
        <div className="container-x" style={{ maxWidth: '720px' }}>
          {BIO[lang].map((p, i) => (
            <p key={i} className="text-text-muted font-light mb-6 last:mb-0" style={{ fontSize: '17px', lineHeight: 1.9 }}>{p}</p>
          ))}
          <div className="mt-10">
            <Link href="/trust" className="btn-outline">{lang === 'en' ? 'Trust & Licensing →' : 'Доверие и лицензия →'}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
