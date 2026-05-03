'use client';

import { useLang } from '@/lib/i18n/context';
import { AB_CONFIG } from '@/lib/config';
import { PageHeader } from '@/components/sections/PageHeader';

const POINTS = {
  en: [
    'Licensed and regulated practice in Dubai',
    'Evidence-based approaches: CBT, EMDR, play therapy',
    'Strict confidentiality policy aligned with UAE PDPL',
    'Encrypted communication for sensitive material',
    'Bilingual sessions in English and Russian',
    '10+ years of clinical experience in international settings',
  ],
  ru: [
    'Лицензированная и регулируемая практика в Дубае',
    'Доказательные подходы: КПТ, EMDR, игровая терапия',
    'Строгая конфиденциальность в соответствии с UAE PDPL',
    'Зашифрованная коммуникация для чувствительных материалов',
    'Билингвальные сессии: английский и русский',
    '10+ лет клинического опыта в международной среде',
  ],
};

export default function TrustPage() {
  const { lang } = useLang();
  return (
    <>
      <PageHeader headingKey="trust" />
      <section className="py-16 px-7 pb-32">
        <div className="container-x" style={{ maxWidth: '720px' }}>
          <ul className="flex flex-col gap-4 mb-12">
            {POINTS[lang].map((p) => (
              <li key={p} className="flex items-start gap-4 p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="2" strokeLinecap="round" className="mt-1 flex-shrink-0" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-charcoal font-medium leading-[1.6]" style={{ fontSize: '15px' }}>{p}</span>
              </li>
            ))}
          </ul>

          <div className="p-6 rounded-2xl border border-rose-deep/30 bg-rose-pale/30 text-[13px] text-charcoal leading-[1.7]">
            <strong>License:</strong>{' '}
            <span style={{ background: '#fee', color: '#c00', padding: '2px 8px', borderRadius: '4px', fontWeight: 600, border: '1px solid #f99' }}>
              ⚠ {AB_CONFIG.DHA_LICENSE}
            </span>
            {' '}· Dubai Health Authority
          </div>
        </div>
      </section>
    </>
  );
}
