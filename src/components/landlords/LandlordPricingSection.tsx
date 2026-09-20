import React from 'react';

export function LandlordPricingSection(): React.ReactElement {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
          We&apos;ll show you your exact costs before you commit to anything.
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed mb-10">
          FractionEx works on a simple one-off setup fee plus a monthly subscription for active
          yield management and your dashboard — but rather than publish a generic price list, we
          confirm your exact numbers during your free audit, matched to your property.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-10">
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="font-bold text-black mb-2">Setup fee</div>
            <div className="text-gray-700">
              Confirmed during your audit — a one-off fee to tokenise your property and bring it
              onto the platform.
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="font-bold text-black mb-2">Monthly subscription</div>
            <div className="text-gray-700">
              Confirmed during your audit — covers active yield management and your real-time
              dashboard.
            </div>
          </div>
        </div>
        <p className="text-gray-700 mb-8">
          You&apos;ll never be charged a fee you haven&apos;t seen and agreed to first.
        </p>
        <a
          href="#audit-form"
          className="inline-block px-10 py-4 bg-red-600 text-white font-semibold text-lg rounded-full hover:bg-red-700 transition-colors"
        >
          See My Numbers First
        </a>
      </div>
    </section>
  );
}
