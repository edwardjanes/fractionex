import React from 'react';

export function SolutionPillars(): React.ReactElement {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-center">
          Real property. Fractional shares. Full flexibility.
        </h2>
        <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
          Three ways Fractionex puts property investing back within reach.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="text-4xl mb-4">🔓</div>
            <h3 className="text-2xl font-bold text-black mb-4">
              Start with what you have
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Buy fractional shares in income-producing properties from as little as £10. No deposit, no mortgage, no chain. Build a diversified portfolio across multiple properties instead of betting everything on one.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-2xl font-bold text-black mb-4">
              Earn while you hold
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Every property pays. Rental income is distributed to token holders automatically, in proportion to what you own. And because our in-house team actively manages each property to grow its income, your share is designed to grow too.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-black mb-4">
              Exit on your schedule
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Traditional property takes months to sell. Fractionex runs structured liquidity windows where you can sell your tokens at the property's current valuation — a designed exit, not a hope for a buyer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
