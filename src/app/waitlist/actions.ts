'use server';

import { INTEREST_RANGES, JURISDICTIONS } from './options';

export type WaitlistState = {
  status: 'idle' | 'success' | 'error';
  message?: string;
  fieldErrors?: Partial<Record<'name' | 'email' | 'interest' | 'jurisdiction' | 'consent', string>>;
  // Echoed back so the form keeps what the visitor typed after a failed submit.
  values?: { name: string; email: string; interest: string; jurisdiction: string; consent: boolean };
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

export async function joinWaitlist(
  _prevState: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  // Honeypot: real visitors never see or fill this field.
  if (field(formData, 'company')) {
    return { status: 'success' };
  }

  const name = field(formData, 'name');
  const email = field(formData, 'email').toLowerCase();
  const interest = field(formData, 'interest');
  const jurisdiction = field(formData, 'jurisdiction');
  const consent = formData.get('consent') === 'on';

  const values = { name, email, interest, jurisdiction, consent };
  const fieldErrors: WaitlistState['fieldErrors'] = {};
  if (name.length < 2 || name.length > 120) fieldErrors.name = 'Please enter your name.';
  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    fieldErrors.email = 'Please enter a valid email address.';
  }
  if (!(INTEREST_RANGES as readonly string[]).includes(interest)) {
    fieldErrors.interest = 'Please choose a range.';
  }
  if (!(JURISDICTIONS as readonly string[]).includes(jurisdiction)) {
    fieldErrors.jurisdiction = 'Please choose where you live.';
  }
  if (!consent) fieldErrors.consent = 'Please confirm so we can contact you.';

  if (Object.keys(fieldErrors).length > 0) {
    return { status: 'error', message: 'Please check the highlighted fields.', fieldErrors, values };
  }

  const webhookUrl = process.env.WAITLIST_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('[waitlist] WAITLIST_WEBHOOK_URL is not set — submission not stored.');
    return {
      status: 'error',
      message: 'Registration is not open yet. Please try again shortly.',
      values,
    };
  }

  const [firstName, ...rest] = name.split(/\s+/);

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        first_name: firstName,
        last_name: rest.join(' '),
        email,
        investment_interest: interest,
        jurisdiction,
        marketing_consent: true,
        consent_text:
          'I agree to Fractionex contacting me by email about the platform launch. I can unsubscribe at any time.',
        source: 'fractionex.io/waitlist',
        tags: ['fractionex-waitlist'],
        submitted_at: new Date().toISOString(),
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error(`[waitlist] Webhook responded ${response.status}`);
      return { status: 'error', message: 'Something went wrong. Please try again.', values };
    }
  } catch (error) {
    console.error('[waitlist] Webhook request failed', error);
    return { status: 'error', message: 'Something went wrong. Please try again.' };
  }

  return { status: 'success' };
}
