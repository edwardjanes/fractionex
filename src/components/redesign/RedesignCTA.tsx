import React from 'react';
import Link from 'next/link';

export function RedesignCTA(): React.ReactElement {
  return (
    <section className="w-full bg-black py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--brand-red)]">
          Pre-launch
        </p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          The door to property is open again.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
          We&apos;re preparing to launch. Join the early access list and we&apos;ll tell you when our
          first properties are ready, with the full details and risks.
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-block rounded-full bg-[var(--brand-red)] px-10 py-4 text-lg font-semibold text-white transition-colors hover:bg-[var(--brand-red-hover)]"
          >
            Get Early Access
          </Link>
        </div>

        <p className="mt-5 text-sm text-white/60">
          Free to join · No obligation · Unsubscribe anytime
        </p>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs leading-relaxed text-white/50">
            <strong className="text-white/70">Risk Disclosure:</strong> Any future Fractionex
            investment would be in property-backed digital securities. Capital at risk. Property values
            and rental income can fall as well as rise. Past performance is not indicative of
            future results.{' '}
            <Link href="/legal" className="text-white/70 underline hover:text-white">
              Full legal disclosures
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
