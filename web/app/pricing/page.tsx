'use client';

import Link from 'next/link';
import { useLang } from '@/lib/i18n/context';
import { useCurrency } from '@/lib/currency/context';
import { CURRENCY_LABELS } from '@/lib/currency';
import { convertFromAED, formatAmount } from '@/lib/currency/rates';
import { PageHeader } from '@/components/sections/PageHeader';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { CalendlyButton } from '@/components/ui/CalendlyButton';
import { AB_CONFIG } from '@/lib/config';

interface Package {
  t: string;
  priceAED: number;
  per: string;
  desc: string;
  features: string[];
  featured: boolean;
}

const PACKAGES: Record<'en' | 'ru', Package[]> = {
  en: [
    { t: 'Single Session', priceAED: 700, per: '/session', desc: '50-minute session — for getting started.', features: ['Adults / teens / children', 'In-person or online', 'Session notes included'], featured: false },
    { t: '4-Session Intensive', priceAED: 2600, per: '/package', desc: 'Monthly intensive. Save 200 AED.', features: ['Weekly for 4 weeks', 'Progress tracking', 'Between-session support', 'Flexible rescheduling'], featured: true },
    { t: '8-Session Program', priceAED: 4800, per: '/package', desc: 'Sustained 10-week program. Save 800 AED.', features: ['10-week program', 'Comprehensive assessment', 'Detailed report', 'Priority scheduling'], featured: false },
    { t: 'Family Package', priceAED: 3200, per: '/package', desc: 'Parent + child combined.', features: ['4 individual + 1 family', 'Coordinated approach', 'Parent guidance', 'Flexible combination'], featured: false },
  ],
  ru: [
    { t: 'Разовая сессия', priceAED: 700, per: '/сессия', desc: '50 минут — чтобы начать.', features: ['Взрослые / подростки / дети', 'Очно или онлайн', 'Заметки включены'], featured: false },
    { t: 'Пакет 4 сессии', priceAED: 2600, per: '/пакет', desc: 'Интенсив на месяц. Экономия 200 AED.', features: ['Еженедельно 4 недели', 'Отслеживание прогресса', 'Поддержка между сессиями', 'Гибкий перенос'], featured: true },
    { t: 'Пакет 8 сессий', priceAED: 4800, per: '/пакет', desc: 'Программа на 10 недель. Экономия 800 AED.', features: ['Программа 10 недель', 'Полная оценка', 'Детальный отчёт', 'Приоритет расписания'], featured: false },
    { t: 'Семейный пакет', priceAED: 3200, per: '/пакет', desc: 'Родитель + ребёнок.', features: ['4 индив. + 1 семейная', 'Координированный подход', 'Консультация родителей', 'Гибкая комбинация'], featured: false },
  ],
};

export default function PricingPage() {
  const { lang, t } = useLang();
  const { currency, rates } = useCurrency();
  const meta = CURRENCY_LABELS[currency];
  const subtitle = { en: 'Invest in your well-being with packages designed for lasting change.', ru: 'Пакеты для устойчивых изменений.' };

  return (
    <>
      <PageHeader headingKey="pricing" subtitle={subtitle} />
      <section className="py-12 px-7 pb-32">
        <div className="container-x">
          <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
            {PACKAGES[lang].map((p, i) => {
              const converted = convertFromAED(p.priceAED, currency, rates);
              const showSecondary = currency !== 'AED';
              return (
                <RevealOnScroll key={p.t} delay={i * 60}>
                  <article
                    className={[
                      'rounded-card p-10 relative overflow-hidden transition-all duration-500 ease-curve hover:-translate-y-1.5 hover:shadow-2xl',
                      p.featured ? 'border-sage bg-gradient-to-br from-sage-pale to-white' : 'border border-border bg-white',
                    ].join(' ')}
                    style={p.featured ? { borderWidth: '1.5px', borderStyle: 'solid' } : undefined}
                  >
                    {p.featured && (
                      <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, var(--sage), var(--rose))' }} />
                    )}
                    <h3 className="mb-2">{p.t}</h3>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="font-heading font-light text-charcoal tracking-[-0.03em]" style={{ fontSize: 'clamp(32px, 4vw, 44px)' }}>
                        {formatAmount(converted)}
                      </span>
                      <span className="text-text-muted font-light text-[14px]">{meta.code}</span>
                      <span className="text-text-muted font-light text-[13px]">{p.per}</span>
                    </div>
                    {showSecondary && (
                      <p className="text-text-muted font-light text-[12px] mb-4">
                        {t.pricingApprox} {formatAmount(p.priceAED)} AED · {t.pricingFinalBilling}
                      </p>
                    )}
                    {!showSecondary && <div className="mb-4" />}
                    <p className="text-text-muted font-light text-[14px] mb-6 leading-[1.7]">{p.desc}</p>
                    <ul className="flex flex-col gap-3 mb-8 text-[14px] text-text">
                      {p.features.map((f) => (
                        <li key={f} className="flex gap-2 items-start">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="2.5" strokeLinecap="round" className="mt-1 flex-shrink-0" aria-hidden="true">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    {AB_CONFIG.BOOKING_URL ? (
                      <CalendlyButton className="btn-primary w-full justify-center" ariaLabel={t.bookNow}>
                        {t.bookNow}
                      </CalendlyButton>
                    ) : (
                      <Link href="/contact" className="btn-primary w-full justify-center">{t.bookNow}</Link>
                    )}
                  </article>
                </RevealOnScroll>
              );
            })}
          </div>
          <p className="text-center text-[12px] text-text-muted font-light mt-12 max-w-[520px] mx-auto">
            {t.pricingNote}
          </p>
        </div>
      </section>
    </>
  );
}
