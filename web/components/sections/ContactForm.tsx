'use client';

import { useState } from 'react';
import { useLang } from '@/lib/i18n/context';
import { AB_CONFIG } from '@/lib/config';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const { t } = useLang();
  const [status, setStatus] = useState<Status>('idle');
  const [whoIsFor, setWhoIsFor] = useState('');

  const isMinor = whoIsFor === t.formWhoOptions[1] || whoIsFor === t.formWhoOptions[2];

  function fallbackToMailto(data: Record<string, FormDataEntryValue>) {
    const subj = encodeURIComponent(`New consultation request — ${data.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || ''}`,
        `For: ${data.who || ''}`,
        `Parent consent: ${data.parent_consent === 'on' ? 'yes' : 'n/a'}`,
        '',
        'Message:',
        String(data.message || ''),
      ].join('\n'),
    );
    window.location.href = `mailto:${AB_CONFIG.EMAIL}?subject=${subj}&body=${body}`;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());
    setStatus('submitting');

    try {
      const endpoint = AB_CONFIG.FORMS_ENDPOINT || '/api/contact';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ type: 'contact', ...data }),
      });

      if (res.ok) {
        setStatus('success');
        return;
      }
      // Сервер не сконфигурирован — мягко падаем на mailto.
      if (res.status === 501) {
        fallbackToMailto(data);
        setStatus('success');
        return;
      }
      setStatus('error');
    } catch (err) {
      console.warn('Form submit failed', err);
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div role="status" aria-live="polite" className="text-center py-12 px-8">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.5" strokeLinecap="round" className="mx-auto mb-5" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <polyline points="8 12 11 15 16 9" />
        </svg>
        <h3 className="mb-3" style={{ fontSize: '24px' }}>{t.formOk}</h3>
        <p className="text-text-muted font-light" style={{ fontSize: '16px' }}>{t.formOkP}</p>
        <a href={AB_CONFIG.WA_URL} target="_blank" rel="noopener noreferrer" aria-label={t.chatOnWhatsApp} className="btn-wa mt-6 inline-flex">{t.chatOnWhatsApp}</a>
      </div>
    );
  }

  const submitting = status === 'submitting';

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4">
      {/* Honeypot — скрытое поле для ботов. Не показываем людям. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
      />

      <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
        <div>
          <label htmlFor="cf-name" className="block text-[12px] font-semibold text-charcoal mb-2">
            {t.formName} <span aria-hidden="true" className="text-rose-deep">*</span>
          </label>
          <input id="cf-name" name="name" required autoComplete="name" placeholder={t.formNamePlaceholder} className="w-full px-5 py-4 rounded-2xl bg-white border-[1.5px] border-border outline-none text-[15px] focus:border-sage transition-colors" />
        </div>
        <div>
          <label htmlFor="cf-email" className="block text-[12px] font-semibold text-charcoal mb-2">
            {t.formEmail} <span aria-hidden="true" className="text-rose-deep">*</span>
          </label>
          <input id="cf-email" name="email" type="email" required autoComplete="email" placeholder="your@email.com" className="w-full px-5 py-4 rounded-2xl bg-white border-[1.5px] border-border outline-none text-[15px] focus:border-sage transition-colors" />
        </div>
        <div>
          <label htmlFor="cf-phone" className="block text-[12px] font-semibold text-charcoal mb-2">{t.formPhone}</label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" placeholder="+971 ..." className="w-full px-5 py-4 rounded-2xl bg-white border-[1.5px] border-border outline-none text-[15px] focus:border-sage transition-colors" />
        </div>
        <div>
          <label htmlFor="cf-who" className="block text-[12px] font-semibold text-charcoal mb-2">{t.formWho}</label>
          <select id="cf-who" name="who" value={whoIsFor} onChange={(e) => setWhoIsFor(e.target.value)} className="w-full px-5 py-4 rounded-2xl bg-white border-[1.5px] border-border outline-none text-[15px] focus:border-sage transition-colors">
            {t.formWhoOptions.map((o, i) => (
              <option key={o} value={i ? o : ''}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cf-msg" className="block text-[12px] font-semibold text-charcoal mb-2">{t.formMessage}</label>
        <textarea id="cf-msg" name="message" rows={5} placeholder={t.formMessagePlaceholder} className="w-full px-5 py-4 rounded-2xl bg-white border-[1.5px] border-border outline-none text-[15px] focus:border-sage transition-colors resize-y" />
      </div>

      {isMinor && (
        <label className="flex items-start gap-3 p-4 rounded-2xl border border-sage-muted bg-sage-pale cursor-pointer">
          <input type="checkbox" name="parent_consent" required className="mt-1 flex-shrink-0" />
          <span className="text-[13px] text-charcoal leading-[1.6]">{t.formParentConsent}</span>
        </label>
      )}

      {status === 'error' && (
        <div role="alert" className="rounded-2xl border border-rose-deep/40 bg-rose-pale/40 p-4 text-[14px] text-charcoal">
          <strong className="block mb-1">{t.formError}</strong>
          <span className="font-light">{t.formErrorRetry}</span>
          <a href={AB_CONFIG.WA_URL} target="_blank" rel="noopener noreferrer" className="btn-wa mt-3 inline-flex" aria-label={t.chatOnWhatsApp}>{t.chatOnWhatsApp}</a>
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        aria-busy={submitting}
        className="btn-primary justify-center w-full mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ padding: '20px 44px', fontSize: '16px' }}
      >
        {submitting ? t.formSubmitting : t.formSubmit}
      </button>
    </form>
  );
}
