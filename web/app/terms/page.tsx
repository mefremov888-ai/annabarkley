'use client';

import { useLang } from '@/lib/i18n/context';
import { AB_CONFIG } from '@/lib/config';
import { PageHeader } from '@/components/sections/PageHeader';

const SECTIONS = {
  en: [
    { h: '1. Services', p: 'Anna Barkley provides individual psychological therapy for children, teenagers and adults, and parent guidance, in Dubai (in-person or online).' },
    { h: '2. Licensing', p: (license: string) => `Practice operates under DHA license number: ${license}.` },
    { h: '3. Booking & cancellation', p: 'A 24-hour cancellation notice is required. Late cancellations may be charged the full session fee.' },
    { h: '4. Confidentiality', p: 'Client confidentiality is a foundation of practice. Disclosures only occur where law requires or where there is risk of harm.' },
    { h: '5. Minors', p: 'Therapy for minors requires consent from a parent or legal guardian. Disclosure boundaries with parents are agreed upfront.' },
    { h: '6. Telehealth', p: 'Online sessions follow DHA Telehealth Standards. A separate telehealth consent will be requested before the first online session.' },
    { h: '7. Payments', p: 'Sessions are paid before or at the time of the appointment. Packages are paid in full upfront.' },
    { h: '8. Limitations', p: 'Therapy supports emotional well-being; it is not a substitute for emergency or psychiatric care. In a crisis, contact local emergency services.' },
    { h: '9. Communication', p: 'Between-session messages are kept brief; clinical questions are addressed in sessions.' },
    { h: '10. Intellectual property', p: 'Site content is the property of Anna Barkley and may not be reproduced without permission.' },
    { h: '11. Governing law', p: 'These terms are governed by the laws of the United Arab Emirates.' },
  ],
  ru: [
    { h: '1. Услуги', p: 'Анна Баркли оказывает индивидуальную психологическую терапию детям, подросткам и взрослым, а также консультации родителей в Дубае (очно или онлайн).' },
    { h: '2. Лицензирование', p: (license: string) => `Практика ведётся под лицензией DHA номер: ${license}.` },
    { h: '3. Запись и отмена', p: 'Требуется уведомление об отмене за 24 часа. При поздней отмене может взиматься полная стоимость сессии.' },
    { h: '4. Конфиденциальность', p: 'Конфиденциальность клиента — основа практики. Раскрытия возможны только по требованию закона или при риске причинения вреда.' },
    { h: '5. Несовершеннолетние', p: 'Терапия несовершеннолетних — с согласия родителя или законного представителя. Границы раскрытия родителям согласовываются заранее.' },
    { h: '6. Телетерапия', p: 'Онлайн-сессии соответствуют стандартам DHA Telehealth. Перед первой онлайн-сессией запрашивается отдельное согласие на телетерапию.' },
    { h: '7. Оплата', p: 'Сессии оплачиваются до или в момент встречи. Пакеты оплачиваются полностью авансом.' },
    { h: '8. Ограничения', p: 'Терапия поддерживает эмоциональное состояние, но не заменяет экстренной или психиатрической помощи. В кризисе обращайтесь в экстренные службы.' },
    { h: '9. Коммуникация', p: 'Сообщения между сессиями краткие; клинические вопросы обсуждаются на встрече.' },
    { h: '10. Интеллектуальная собственность', p: 'Контент сайта принадлежит Анне Баркли и не может быть воспроизведён без разрешения.' },
    { h: '11. Применимое право', p: 'Настоящие условия регулируются законодательством Объединённых Арабских Эмиратов.' },
  ],
};

export default function TermsPage() {
  const { lang } = useLang();
  return (
    <>
      <PageHeader headingKey="terms" />
      <section className="py-12 px-7 pb-32">
        <div className="container-x" style={{ maxWidth: '720px' }}>
          {SECTIONS[lang].map((s) => (
            <div key={s.h} className="mb-7">
              <h3 className="mb-3">{s.h}</h3>
              <p className="text-text-muted font-light leading-[1.85]" style={{ fontSize: '15px' }}>
                {typeof s.p === 'function' ? s.p(AB_CONFIG.DHA_LICENSE) : s.p}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
