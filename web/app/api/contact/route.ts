import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { AB_CONFIG } from '@/lib/config';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface ContactBody {
  name?: string;
  email?: string;
  phone?: string;
  who?: string;
  message?: string;
  parent_consent?: string;
  // Honeypot — должно остаться пустым у живого пользователя.
  company?: string;
  type?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function bad(error: string, status = 400) {
  return NextResponse.json({ ok: false, error }, { status });
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => {
    switch (c) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      case "'": return '&#39;';
      default: return c;
    }
  });
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: 'mail_not_configured' },
      { status: 501 },
    );
  }

  let body: ContactBody;
  try {
    body = (await req.json()) as ContactBody;
  } catch {
    return bad('invalid_body');
  }

  // Honeypot — тихо принять и не отправлять.
  if (body.company && body.company.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? '').trim();
  const email = (body.email ?? '').trim();
  const phone = (body.phone ?? '').trim();
  const who = (body.who ?? '').trim();
  const message = (body.message ?? '').trim();
  const parentConsent = body.parent_consent === 'on' || body.parent_consent === 'true';

  if (!name || name.length > 200) return bad('invalid_name');
  if (!email || !EMAIL_RE.test(email) || email.length > 200) return bad('invalid_email');
  if (phone.length > 60) return bad('invalid_phone');
  if (who.length > 80) return bad('invalid_who');
  if (message.length > 5000) return bad('message_too_long');

  const to = process.env.CONTACT_TO_EMAIL || AB_CONFIG.EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || 'Anna Barkley <onboarding@resend.dev>';

  const textLines = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    who ? `For: ${who}` : null,
    parentConsent ? 'Parent consent: yes' : null,
    '',
    'Message:',
    message || '(none)',
  ].filter((l): l is string => l !== null).join('\n');

  const html = [
    '<h2 style="font-family:system-ui,sans-serif;color:#1A1A1A">New consultation request</h2>',
    `<p><strong>Name:</strong> ${escapeHtml(name)}</p>`,
    `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
    phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : '',
    who ? `<p><strong>For:</strong> ${escapeHtml(who)}</p>` : '',
    parentConsent ? '<p><strong>Parent consent:</strong> yes</p>' : '',
    '<h3 style="font-family:system-ui,sans-serif">Message</h3>',
    `<p style="white-space:pre-wrap;font-family:system-ui,sans-serif">${escapeHtml(message || '(none)')}</p>`,
  ].filter(Boolean).join('\n');

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New consultation request — ${name}`,
      text: textLines,
      html,
    });
    if (error) {
      console.error('[contact] resend error:', error);
      return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] send threw:', err);
    return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 502 });
  }
}
