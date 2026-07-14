import React from 'react';
import Link from 'next/link';

export function OwnerDeveloperStrip(): React.ReactElement {
  return (
    <section className="w-full bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Own property? Raise capital from it — without selling it.
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Fractionex tokenisation lets property owners and developers unlock equity or fund projects by selling fractional shares to our investor community. Faster than a bank, more flexible than a sale.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Explore Tokenisation →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
