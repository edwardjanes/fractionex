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
              One property, one structure
            </p>
            <p className="text-xs text-gray-600">
              Each property is intended to sit in its own legal structure, subject to legal advice
            </p>
          </div>

          {/* Asset-Backed */}
          <div className="text-center md:text-left">
            <div className="text-2xl mb-2">🏦</div>
            <p className="text-sm font-semibold text-black mb-1">
              Asset-backed
            </p>
            <p className="text-xs text-gray-600">
              Each token is designed to represent an interest in a specific property
            </p>
          </div>

          {/* Independently Audited */}
          <div className="text-center md:text-left">
            <div className="text-2xl mb-2">🔍</div>
            <p className="text-sm font-semibold text-black mb-1">
              Independent audit planned
            </p>
            <p className="text-xs text-gray-600">
              We intend to have our smart contracts independently audited before launch
            </p>
          </div>

          {/* Compliant Security Tokens */}
          <div className="text-center md:text-left">
            <div className="text-2xl mb-2">🔗</div>
            <p className="text-sm font-semibold text-black mb-1">
              Permissioned tokens
            </p>
            <p className="text-xs text-gray-600">
              Built on ERC-3643, a token standard that restricts holding to verified investors
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
