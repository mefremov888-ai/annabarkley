'use client';

import { useLang } from '@/lib/i18n/context';
import { PageHeader } from '@/components/sections/PageHeader';

const SECTIONS = {
  en: [
    { h: '1. Data Controller', p: 'Anna Barkley, licensed psychologist in Dubai, is the data controller responsible for your personal data.' },
    { h: '2. What we collect', p: 'Contact details (name, email, phone), session notes, payment records, and information you share during therapy.' },
    { h: '3. Why we collect it', p: 'To provide therapy services, manage appointments, communicate, comply with legal requirements, and improve the service.' },
    { h: '4. Lawful basis', p: 'Consent for therapy services and marketing communications; legitimate interests for service operation; legal obligation for record-keeping.' },
    { h: '5. Data sharing', p: 'We do not sell data. We use service providers (Calendly, Resend/Formspree, Google Fonts, WhatsApp Business, Google Analytics — only with consent) bound by data processing agreements.' },
    { h: '6. Retention', p: 'Clinical records are retained as required by UAE health regulations. Marketing data is retained until you unsubscribe.' },
    { h: '7. Your rights', p: 'Under UAE PDPL and applicable laws you have rights of access, correction, deletion, portability, objection and withdrawal of consent.' },
    { h: '8. Security', p: 'We use encrypted communication channels for sensitive content. Access to clinical records is restricted.' },
    { h: '9. Cookies', p: 'Essential cookies are used for site functionality. Optional cookies for analytics and embeds load only after explicit consent.' },
    { h: '10. Minors', p: 'Therapy for minors requires informed consent from a parent or legal guardian, captured before sessions begin.' },
    { h: '11. Cross-border transfers', p: 'Some service providers process data outside the UAE under appropriate safeguards.' },
    { h: '12. Contact', p: 'Email hello@annabarkley.com for any privacy queries or to exercise your rights.' },
  ],
  ru: [
    { h: '1. Контролёр данных', p: 'Анна Баркли, лицензированный психолог в Дубае — контролёр персональных данных.' },
    { h: '2. Какие данные собираем', p: 'Контакты (имя, email, телефон), записи сессий, платёжные записи и сведения, которые вы делитесь во время терапии.' },
    { h: '3. Зачем собираем', p: 'Чтобы оказывать услуги терапии, вести расписание, поддерживать связь, соответствовать требованиям закона и улучшать сервис.' },
    { h: '4. Правовые основания', p: 'Согласие на услуги и маркетинг; законные интересы для работы сервиса; обязательное ведение записей.' },
    { h: '5. Передача данных', p: 'Мы не продаём данные. Используем подрядчиков (Calendly, Resend/Formspree, Google Fonts, WhatsApp Business, Google Analytics — только с согласия) по договорам обработки данных.' },
    { h: '6. Хранение', p: 'Клинические записи хранятся в течение срока, требуемого регуляторами ОАЭ. Маркетинговые данные — до отписки.' },
    { h: '7. Ваши права', p: 'По UAE PDPL и применимым законам — права доступа, исправления, удаления, портативности, возражения и отзыва согласия.' },
    { h: '8. Безопасность', p: 'Чувствительный контент передаётся по зашифрованным каналам. Доступ к клиническим записям ограничен.' },
    { h: '9. Cookies', p: 'Обязательные cookies нужны для работы сайта. Опциональные (аналитика, встраивания) загружаются только после явного согласия.' },
    { h: '10. Несовершеннолетние', p: 'Терапия несовершеннолетних — только с информированным согласием родителя или законного представителя, фиксируемым до начала сессий.' },
    { h: '11. Трансграничная передача', p: 'Некоторые подрядчики обрабатывают данные за пределами ОАЭ с соблюдением необходимых гарантий.' },
    { h: '12. Контакт', p: 'По любым вопросам приватности — hello@annabarkley.com.' },
  ],
};

export default function PrivacyPage() {
  const { lang } = useLang();
  return (
    <>
      <PageHeader headingKey="privacy" />
      <section className="py-12 px-7 pb-32">
        <div className="container-x" style={{ maxWidth: '720px' }}>
          {SECTIONS[lang].map((s) => (
            <div key={s.h} className="mb-7">
              <h3 className="mb-3">{s.h}</h3>
              <p className="text-text-muted font-light leading-[1.85]" style={{ fontSize: '15px' }}>{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
