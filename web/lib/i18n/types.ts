export type Lang = 'en' | 'ru';

export interface Pillar {
  t: string;
  d: string;
}

export interface Testimonial {
  n: string;
  r: string;
  t: string;
  i: string;
}

export interface IssueShort {
  k: string;
  t: string;
  d: string;
}

export interface IssueFull extends IssueShort {
  full: string;
  signs: string[];
}

export interface Service {
  t: string;
  d: string;
}

export interface Step {
  t: string;
  d: string;
}

export interface PricePackage {
  t: string;
  price: string;
  per: string;
  desc: string;
  features: string[];
  featured?: boolean;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface BlogCard {
  t: string;
  d: string;
  cat: string;
  bg: string;
}

export interface ToolCard {
  k: string;
  t: string;
  d: string;
}

export interface Dictionary {
  // Header / Nav
  hdr: string;
  nav: string[];           // 5 коротких пунктов desktop nav
  navMobile: string[];     // 9 пунктов mobile menu
  // Hero
  heroT: string;
  heroHighlight: string[];
  heroS: string;
  heroC1: string;
  heroC2: string;
  heroQuote: string;
  // Stats
  stats: { value: string; label: string }[];
  // Marquee
  marquee: string[];
  // Pillars
  pillarsTag: string;
  pillarsHeading: string;
  pillars: Pillar[];
  // Testimonials
  testimonialsTag: string;
  testimonialsHeading: string;
  testimonials: Testimonial[];
  // Lead magnet
  leadH: string;
  leadSub: string;
  leadPlaceholder: string;
  leadButton: string;
  leadSuccess: string;
  // CTA
  ctaH: string;
  ctaP: string;
  ctaBook: string;
  ctaWa: string;
  // Cookie
  cookieT: string;
  cookieAccept: string;
  cookieReject: string;
  // Footer
  footerNav: string;
  footerServices: string;
  footerConnect: string;
  // Form
  formName: string;
  formNamePlaceholder: string;
  formEmail: string;
  formPhone: string;
  formWho: string;
  formWhoOptions: string[];
  formMessage: string;
  formMessagePlaceholder: string;
  formSubmit: string;
  formOk: string;
  formOkP: string;
  formParentConsent: string;
  // Common
  bookFreeCall: string;
  chatOnWhatsApp: string;
  telegram: string;
  signsHeading: string;
  bookNow: string;
  whatIHelpWith: string;
  allArticles: string;
  readingMinutes: string;
  whenReachOut: string;
  blogDisclaimer: string;
}
