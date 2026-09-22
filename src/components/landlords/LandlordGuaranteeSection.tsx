import React from 'react';

export function LandlordGuaranteeSection(): React.ReactElement {
  return (
    <section className="w-full bg-black py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          No obligation
        </h2>
        <p className="text-xl text-gray-200 leading-relaxed">
          We&apos;ll show you exactly what your property could be earning before you commit to
          anything. If our Free Yield &amp; Valuation Audit doesn&apos;t identify a credible path
          to a higher net yield than you&apos;re getting today, you owe us nothing — and you keep
          the report either way.
        </p>
      </div>
    </section>
  );
}
