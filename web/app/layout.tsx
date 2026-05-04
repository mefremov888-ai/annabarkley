import type { Metadata } from 'next';
import { Sora, Plus_Jakarta_Sans } from 'next/font/google';
import { LangProvider } from '@/lib/i18n/context';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat';
import { CookieBanner } from '@/components/ui/CookieBanner';
import { AB_CONFIG, SITE_URL } from '@/lib/config';
import { ogImage } from '@/lib/og';
import './globals.css';

// NOTE: Sora и Plus Jakarta Sans не имеют cyrillic subset.
// Для RU-текстов кириллические глифы будут отрендерены через system-ui fallback.
// При финальной полировке заменить на шрифт с cyrillic (Manrope / Inter) или загрузить
// дополнительный шрифт для RU. Зафиксировано в README: P1.fonts.
const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sora',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s | Anna Barkley — Psychologist Dubai',
    default: 'Anna Barkley — Psychologist in Dubai',
  },
  description:
    'Psychologist in Dubai supporting children, teens, and adults through anxiety, emotions, and life transitions. Bilingual EN/RU.',
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
      ru: '/?lang=ru',
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Anna Barkley',
    locale: 'en_US',
    url: SITE_URL,
    images: ogImage({ kind: 'default' }),
  },
  twitter: {
    card: 'summary_large_image',
    images: ogImage({ kind: 'default' }),
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': SITE_URL,
  name: 'Anna Barkley — Psychologist',
  description:
    'Licensed psychologist in Dubai supporting children, teens, and adults through anxiety, emotions, and life transitions.',
  url: SITE_URL,
  telephone: AB_CONFIG.PHONE,
  email: AB_CONFIG.EMAIL,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  priceRange: '700-950 AED',
  openingHours: 'Su-Th 09:00-18:00',
  sameAs: [AB_CONFIG.INSTAGRAM_URL],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to main content</a>
        <LangProvider>
          <Header />
          <main id="main" role="main">
            {children}
          </main>
          <Footer />
          <WhatsAppFloat />
          <CookieBanner />
        </LangProvider>
      </body>
    </html>
  );
}
