'use client';

import { useLang } from '@/lib/i18n/context';
import Link from 'next/link';
import { PageHeader } from '@/components/sections/PageHeader';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

const SERVICES = {
  en: [
    { t: 'Children Sessions', d: 'Helping children understand emotions through play, creativity, and gentle conversation.' },
    { t: 'Teen Support', d: 'Identity, stress, relationships, and emotional regulation during a critical stage of growth.' },
    { t: 'Adult Therapy', d: 'Anxiety, life transitions, relationships, and deep patterns that often begin earlier in life.' },
    { t: 'Parent Guidance', d: 'Understanding your child better — and finding new ways to support them.' },
    { t: 'Expat & Family Support', d: 'Relocation stress, cultural adaptation, and sustaining identity across moves.' },
    { t: 'Online Sessions', d: 'Same quality, from anywhere in the UAE — secure and confidential.' },
  ],
  ru: [
    { t: 'Сессии для детей', d: 'Помогаю детям понять эмоции через игру, творчество и мягкий диалог.' },
    { t: 'Поддержка подростков', d: 'Идентичность, стресс, отношения и эмоциональная регуляция в важный период взросления.' },
    { t: 'Терапия для взрослых', d: 'Тревога, жизненные перемены, отношения и глубинные паттерны из детства.' },
    { t: 'Консультация родителей', d: 'Лучше понять ребёнка — и найти новые способы его поддержать.' },
    { t: 'Поддержка экспатов и семей', d: 'Стресс переезда, культурная адаптация, сохранение идентичности.' },
    { t: 'Онлайн-сессии', d: 'То же качество — из любой точки ОАЭ. Защищённо и конфиденциально.' },
  ],
};

const FAQ = {
  en: [
    { q: 'At what age can a child start therapy?', a: 'Children as young as 4-5 can benefit from play-based therapy. The approach is adapted to each age group.' },
    { q: 'Do you work with parents too?', a: 'Yes. Parent guidance is an important part of the process. I also offer individual adult therapy for parents.' },
    { q: 'How long does therapy usually take?', a: 'Some people notice progress in 8-12 sessions; others benefit from longer support. We discuss this together as we go.' },
    { q: 'Do you offer sessions in Russian?', a: 'Yes — I work in both English and Russian, with full clinical fluency.' },
    { q: 'Is everything confidential?', a: 'Confidentiality is the foundation. For minors, the boundaries of what is shared with parents are discussed openly upfront.' },
  ],
  ru: [
    { q: 'С какого возраста можно начать терапию?', a: 'Дети от 4-5 лет могут получить пользу от игровой терапии. Подход адаптируется к возрасту.' },
    { q: 'Вы работаете и с родителями?', a: 'Да. Консультации родителей — важная часть процесса. Я также провожу индивидуальную терапию для взрослых-родителей.' },
    { q: 'Сколько обычно длится терапия?', a: 'Некоторые отмечают прогресс за 8-12 сессий; другим полезна более длительная работа. Мы обсуждаем это вместе по ходу процесса.' },
    { q: 'Сессии на русском?', a: 'Да — я работаю на английском и русском с полным клиническим уровнем владения.' },
    { q: 'Всё конфиденциально?', a: 'Конфиденциальность — основа работы. Для несовершеннолетних границы того, что обсуждается с родителями, проговариваются заранее.' },
  ],
};

export default function ServicesPage() {
  const { lang, t } = useLang();
  return (
    <>
      <PageHeader headingKey="services" />
      <section className="py-16 px-7">
        <div className="container-x">
          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
            {SERVICES[lang].map((s, i) => (
              <RevealOnScroll key={s.t} delay={i * 60}>
                <article
                  className="rounded-card p-9 transition-all duration-500 ease-curve hover:-translate-y-1"
                  style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.4)' }}
                >
                  <h3 className="mb-3">{s.t}</h3>
                  <p className="text-text-muted font-light leading-[1.85] mb-5" style={{ fontSize: '15px' }}>{s.d}</p>
                  <Link href="/contact" className="text-sage font-semibold text-[14px] hover:underline">{t.bookNow} →</Link>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-7">
        <div className="container-x" style={{ maxWidth: '760px' }}>
          <h2 className="text-center mb-10">FAQ</h2>
          <div className="flex flex-col gap-3">
            {FAQ[lang].map((item) => (
              <details key={item.q} className="rounded-2xl border border-border bg-white/50 backdrop-blur-md transition-all open:bg-white open:shadow-md">
                <summary className="flex justify-between items-center cursor-pointer p-6 text-charcoal font-medium select-none">
                  <span>{item.q}</span>
                  <span aria-hidden="true" className="text-sage text-[20px]">+</span>
                </summary>
                <p className="px-6 pb-6 text-text-muted font-light leading-[1.85]" style={{ fontSize: '15px' }}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
