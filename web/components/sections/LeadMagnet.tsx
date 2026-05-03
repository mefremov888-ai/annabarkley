'use client';

import { useState } from 'react';
import { useLang } from '@/lib/i18n/context';
import { AB_CONFIG } from '@/lib/config';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

export function LeadMagnet() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    const email = String(data.get('email') || '');
    try {
      if (AB_CONFIG.FORMS_ENDPOINT) {
        await fetch(AB_CONFIG.FORMS_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ type: 'lead-magnet', email }),
        });
      } else {
        const subject = encodeURIComponent('Lead magnet — anxiety guide request');
        const body = encodeURIComponent(`Email: ${email}`);
        window.location.href = `mailto:${AB_CONFIG.EMAIL}?subject=${subject}&body=${body}`;
      }
      setSubmitted(true);
    } catch {
      setError('Network error');
    }
  }

  return (
    <section className="py-20 px-7 bg-bg max-md:py-12">
      <div className="container-x" style={{ maxWidth: '700px' }}>
        <RevealOnScroll>
          <div
            className="rounded-card p-10 text-center max-md:p-7"
            style={{
              background: 'linear-gradient(135deg, var(--sage-pale), var(--rose-pale))',
              border: '1px solid rgba(124,154,124,0.15)',
            }}
          >
            <h3 className="mb-2" style={{ fontSize: '22px' }}>{t.leadH}</h3>
            <p className="text-text-muted font-light mb-5" style={{ fontSize: '15px' }}>{t.leadSub}</p>
            {submitted ? (
              <p role="status" aria-live="polite" className="text-sage font-semibold">{t.leadSuccess}</p>
            ) : (
              <form onSubmit={onSubmit} noValidate className="flex gap-2 max-w-[400px] mx-auto max-md:flex-col">
                <label htmlFor="lead-email" className="sr-only">Email</label>
                <input
                  id="lead-email"
                  name="email"
                  type="email"
                  required
                  placeholder={t.leadPlaceholder}
                  autoComplete="email"
                  className="flex-1 px-5 py-[14px] rounded-full bg-white border-[1.5px] border-border outline-none text-[14px] focus:border-sage transition-colors"
                />
                <button type="submit" className="btn-primary" style={{ padding: '14px 28px', whiteSpace: 'nowrap' }}>{t.leadButton}</button>
              </form>
            )}
            {error && <p className="text-rose-deep text-[13px] mt-3">{error}</p>}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
