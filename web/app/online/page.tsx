'use client';

import Link from 'next/link';
import { useLang } from '@/lib/i18n/context';
import { PageHeader } from '@/components/sections/PageHeader';

const TEXT = {
  en: [
    'Online sessions offer the same depth of work as in-person therapy — without travel time. They suit busy professionals, parents, and anyone whose schedule benefits from flexibility.',
    'Sessions are held over a secure, encrypted video platform with full clinical confidentiality. You only need a quiet space, a stable connection, and 50 minutes set aside for yourself.',
  ],
  ru: [
    'Онлайн-сессии дают ту же глубину работы, что и очная терапия — без времени на дорогу. Подходят занятым специалистам, родителям и всем, кому важна гибкость графика.',
    'Сессии проходят на защищённой зашифрованной видеоплатформе с полной клинической конфиденциальностью. Всё, что нужно — тихое место, устойчивое соединение и 50 минут для себя.',
  ],
};

export default function OnlinePage() {
  const { lang, t } = useLang();
  return (
    <>
      <PageHeader headingKey="online" />
      <section className="py-16 px-7 pb-32">
        <div className="container-x" style={{ maxWidth: '720px' }}>
          {TEXT[lang].map((p, i) => (
            <p key={i} className="text-text-muted font-light mb-6 last:mb-0" style={{ fontSize: '17px', lineHeight: 1.9 }}>{p}</p>
          ))}
          <div className="mt-10">
            <Link href="/contact" className="btn-primary">{t.bookFreeCall}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
