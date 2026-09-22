import React from 'react';

export function LiquiditySection(): React.ReactElement {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
          Trading windows on a schedule you can plan around.
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed">
          Tokenised shares in your property could be offered for sale at scheduled trading windows,
          so you know in advance when a sale is possible. A sale still needs a buyer, so we
          can&apos;t guarantee you&apos;ll sell at a particular window or price.
        </p>
      </div>
    </section>
  );
}

export function HandoverSection(): React.ReactElement {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
          Nothing changes for the people already living there.
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed">
          Existing tenants and leases carry over with no interruption. Your rental income
          continues throughout the transition — the only thing that changes is who&apos;s
          actively working to grow it.
        </p>
      </div>
    </section>
  );
}
