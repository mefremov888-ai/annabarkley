import type { Metadata } from 'next';
import { ContactForm } from '@/components/sections/ContactForm';
import { ContactExtras } from '@/components/sections/ContactExtras';
import { AB_CONFIG } from '@/lib/config';
import { PageHeader } from '@/components/sections/PageHeader';
import { MapEmbed } from '@/components/sections/MapEmbed';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Book a free 15-minute consultation. WhatsApp, email, or in-person. Dubai.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader tagKey="getInTouch" headingKey="contactH" />
      <section className="py-16 px-7 max-md:py-10">
        <div className="container-x" style={{ maxWidth: '720px' }}>
          <div
            className="rounded-card p-12 max-md:p-7"
            style={{
              background: 'rgba(255,255,255,0.6)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.4)',
            }}
          >
            <ContactForm />
          </div>

          <ContactExtras />
          <div className="grid grid-cols-2 gap-4 mt-4 max-md:grid-cols-1">
            <a href={AB_CONFIG.WA_URL} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="btn-wa justify-center">
              WhatsApp
            </a>
            <a href={AB_CONFIG.TELEGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Open Telegram" className="btn-outline justify-center">
              Telegram
            </a>
          </div>
        </div>
      </section>

      <MapEmbed
        heading={{ en: 'Visit the office', ru: 'Адрес кабинета' }}
      />
    </>
  );
}
