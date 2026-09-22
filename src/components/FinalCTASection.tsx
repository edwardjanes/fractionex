import React from 'react';
import Link from 'next/link';

export function FinalCTASection(): React.ReactElement {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
          The door to property is open again.
        </h2>

        <p className="text-xl text-gray-700 leading-relaxed mb-12">
          We&apos;re preparing to launch. Join the early access list and we&apos;ll tell you when our first properties are ready, with the full details and risks.
        </p>

        <div className="mb-8">
          <Link
            href="/"
            className="inline-block px-10 py-4 bg-red-600 text-white font-semibold text-lg rounded-full hover:bg-red-700 transition-colors mb-4"
          >
            Get Early Access
          </Link>
        </div>

        <p className="text-sm text-gray-600">
          Free to join · No obligation · Unsubscribe anytime
        </p>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-600 leading-relaxed">
            <strong>Risk Disclosure:</strong> Any future Fractionex investment would be in property-backed digital securities. Capital at risk. Property values and rental income can fall as well as rise. Past performance is not indicative of future results.{' '}
            <Link href="/legal" className="text-blue-600 hover:text-blue-700">
              Full legal disclosures
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
