import React from 'react';

export function TrustStrip(): React.ReactElement {
  return (
    <section className="w-full bg-white border-t border-b border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Regulated Structure */}
          <div className="text-center md:text-left">
            <div className="text-2xl mb-2">🛡️</div>
            <p className="text-sm font-semibold text-black mb-1">
              Regulated structure
            </p>
            <p className="text-xs text-gray-600">
              [CONFIRM: REGULATOR / STRUCTURE NAME]
            </p>
          </div>

          {/* Asset-Backed */}
          <div className="text-center md:text-left">
            <div className="text-2xl mb-2">🏦</div>
            <p className="text-sm font-semibold text-black mb-1">
              Asset-backed
            </p>
            <p className="text-xs text-gray-600">
              Every token backed by real, income-producing property
            </p>
          </div>

          {/* Independently Audited */}
          <div className="text-center md:text-left">
            <div className="text-2xl mb-2">🔍</div>
            <p className="text-sm font-semibold text-black mb-1">
              Independently audited
            </p>
            <p className="text-xs text-gray-600">
              [CONFIRM: AUDIT FIRM NAME]
            </p>
          </div>

          {/* Compliant Security Tokens */}
          <div className="text-center md:text-left">
            <div className="text-2xl mb-2">🔗</div>
            <p className="text-sm font-semibold text-black mb-1">
              Compliant security tokens
            </p>
            <p className="text-xs text-gray-600">
              Built on the ERC-3643 regulated token standard
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
