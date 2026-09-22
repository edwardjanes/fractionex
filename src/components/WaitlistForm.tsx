'use client';

import React, { useActionState } from 'react';
import Link from 'next/link';
import { joinWaitlist, type WaitlistState } from '@/app/waitlist/actions';
import { INTEREST_RANGES, JURISDICTIONS } from '@/app/waitlist/options';
import { cn } from '@/lib/utils';

const INITIAL_STATE: WaitlistState = { status: 'idle' };

const inputClass =
  'w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-red-600';

function FieldError({ message }: { message?: string }): React.ReactElement | null {
  if (!message) return null;
  return <p className="mt-1 text-sm text-red-600">{message}</p>;
}

export function WaitlistForm(): React.ReactElement {
  const [state, formAction, isPending] = useActionState(joinWaitlist, INITIAL_STATE);
  const errors = state.fieldErrors ?? {};
  const values = state.values;

  if (state.status === 'success') {
    return (
      <div className="rounded-2xl bg-gray-50 p-10 text-center">
        <h2 className="mb-3 text-2xl font-bold text-black">You&apos;re on the list.</h2>
        <p className="text-gray-700">
          We&apos;ll email you when registration opens. No spam — unsubscribe any time.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5 rounded-2xl bg-gray-50 p-8 md:p-10">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-black">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          defaultValue={values?.name}
          aria-invalid={Boolean(errors.name)}
          className={cn(inputClass, errors.name && 'border-red-600')}
        />
        <FieldError message={errors.name} />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-black">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          defaultValue={values?.email}
          placeholder="you@example.com"
          aria-invalid={Boolean(errors.email)}
          className={cn(inputClass, errors.email && 'border-red-600')}
        />
        <FieldError message={errors.email} />
      </div>

      <div>
        <label htmlFor="interest" className="mb-1 block text-sm font-medium text-black">
          How much might you consider investing?
        </label>
        <select
          id="interest"
          name="interest"
          required
          defaultValue={values?.interest ?? ''}
          aria-invalid={Boolean(errors.interest)}
          className={cn(inputClass, errors.interest && 'border-red-600')}
        >
          <option value="" disabled>
            Choose a range
          </option>
          {INTEREST_RANGES.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
        <FieldError message={errors.interest} />
      </div>

      <div>
        <label htmlFor="jurisdiction" className="mb-1 block text-sm font-medium text-black">
          Where do you live?
        </label>
        <select
          id="jurisdiction"
          name="jurisdiction"
          required
          defaultValue={values?.jurisdiction ?? ''}
          aria-invalid={Boolean(errors.jurisdiction)}
          className={cn(inputClass, errors.jurisdiction && 'border-red-600')}
        >
          <option value="" disabled>
            Choose a country or region
          </option>
          {JURISDICTIONS.map((place) => (
            <option key={place} value={place}>
              {place}
            </option>
          ))}
        </select>
        <FieldError message={errors.jurisdiction} />
      </div>

      {/* Honeypot — hidden from people, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-gray-700">
          <input
            name="consent"
            type="checkbox"
            required
            defaultChecked={values?.consent}
            className="mt-1 h-4 w-4 accent-red-600"
          />
          <span>
            I agree to Fractionex contacting me by email about the platform launch. I can
            unsubscribe at any time. See our{' '}
            <Link href="/privacy" className="text-red-600 hover:underline">
              privacy policy
            </Link>
            .
          </span>
        </label>
        <FieldError message={errors.consent} />
      </div>

      {state.status === 'error' && state.message && (
        <p role="alert" className="text-sm font-medium text-red-600">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="mt-1 inline-block rounded-full bg-red-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-red-700 disabled:opacity-60"
      >
        {isPending ? 'Registering…' : 'Register my interest'}
      </button>
      <p className="text-center text-xs text-gray-500">
        Registering is free and places you under no obligation to invest.
      </p>
    </form>
  );
}
