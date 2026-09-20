import React from 'react';

export function LandlordFinalCTA(): React.ReactElement {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          See what your property could really be earning.
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed mb-10">
          Get a free, no-obligation Yield &amp; Valuation Audit — and decide from there.
        </p>
        <a
          href="#audit-form"
          className="inline-block px-10 py-4 bg-red-600 text-white font-semibold text-lg rounded-full hover:bg-red-700 transition-colors mb-4"
        >
          Get My Free Yield Report
        </a>
        <p className="text-sm text-gray-500">No cost. No commitment. Keep the report either way.</p>
      </div>
    </section>
  );
}
