import React from 'react';

export function OwnershipSecurity(): React.ReactElement {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center">
          What you actually own — and how it's protected
        </h2>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Every Fractionex property sits inside its own regulated legal structure — one property, one compartment, fully ring-fenced. Your tokens are compliant digital securities (ERC-3643 standard) representing a direct economic share of that property's income and value. Not a promise. Not an IOU. A regulated instrument backed by a real asset.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            If Fractionex disappeared tomorrow, the properties and your rights to them would still exist — the structure is designed so investor assets are legally separate from our business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="text-3xl mb-4">🏛️</div>
            <h3 className="text-lg font-bold text-black mb-3">
              One property, one structure
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Ring-fenced compartments mean no cross-contamination between assets.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="text-3xl mb-4">⚙️</div>
            <h3 className="text-lg font-bold text-black mb-3">
              Rights written into code
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Income distribution and investor rights are enforced by smart contract, not goodwill.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-lg font-bold text-black mb-3">
              Transparent by default
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Quarterly reporting, on-chain records, and full disclosure on every property.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
