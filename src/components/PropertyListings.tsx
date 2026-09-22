import React from 'react';
import Link from 'next/link';

export function PropertyListings(): React.ReactElement {
  return (
    <section className="w-full bg-white">
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Properties</h2>
        <p className="text-lg text-gray-600 mb-4">
          We haven&apos;t listed any properties yet, and no investments are currently being offered.
        </p>
        <p className="text-lg text-gray-600 mb-10">
          When our first properties are ready, they&apos;ll be published here with the full
          details you&apos;d need to judge them, including the risks.
        </p>
        <Link
          href="/how-it-works"
          className="inline-flex px-8 py-4 bg-gray-100 text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
        >
          See how it works
        </Link>
      </div>
    </section>
  );
}
