import React from 'react';

export function DifferentiationSection(): React.ReactElement {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center">
          Other platforms hold property. We make it perform.
        </h2>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Most fractional platforms buy a property, collect the rent, and pass it on. Nothing wrong with that — but nobody's working to make your investment worth more.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed font-semibold">
            Fractionex is different: our in-house property management team actively drives each property's income up — better tenancies, lower costs, smarter operations. And because our properties are valued on their income, when the income grows,{' '}
            <span className="text-red-600">your token value grows with it.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Passive Platforms */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-black mb-6">Passive platforms</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-gray-400">✗</span>
                <span className="text-gray-700">Static rent collection</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400">✗</span>
                <span className="text-gray-700">Valuation drifts with market</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400">✗</span>
                <span className="text-gray-700">No active income growth</span>
              </li>
            </ul>
          </div>

          {/* REITs */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-black mb-6">REITs</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-gray-400">✗</span>
                <span className="text-gray-700">Diversified but opaque</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400">✗</span>
                <span className="text-gray-700">No property choice</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400">✗</span>
                <span className="text-gray-700">Fees eat yield</span>
              </li>
            </ul>
          </div>

          {/* Fractionex */}
          <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-600">
            <h3 className="text-xl font-bold text-black mb-6">Fractionex</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-blue-600">✓</span>
                <span className="text-gray-700">Active management</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">✓</span>
                <span className="text-gray-700">Yield-based valuation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">✓</span>
                <span className="text-gray-700">You choose the properties</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
