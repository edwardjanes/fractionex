import React from 'react';
import Link from 'next/link';

const STATS = [
  { label: 'Net yield', value: '—', sub: 'after all costs' },
  { label: 'Occupancy', value: '—', sub: 'this quarter' },
  { label: 'Monthly income', value: '—', sub: 'after all costs' },
  { label: 'Market benchmark', value: '—', sub: 'vs. area average' },
];

export function ActiveManagementSection(): React.ReactElement {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Most platforms list your property. We actively manage it.
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Once your property is live, our team would work on it — adjusting pricing, reducing
            vacancy, and managing expenses — with the aim of improving your net yield. Your dashboard shows exactly
            what&apos;s happening, in real time.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-gray-500 mb-6 tracking-wide uppercase">
            What your dashboard will track (no live data yet)
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-sm text-gray-500 mb-1">{stat.label}</div>
                <div className="text-2xl md:text-3xl font-bold text-black">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4 max-w-2xl mx-auto">
            Want to know who&apos;s behind Fractionex?{' '}
            <Link href="/about" className="text-red-600 font-semibold hover:underline">
              Read more about us →
            </Link>
          </p>
          <a href="#audit-form" className="text-red-600 font-semibold hover:underline">
            Ready to see your numbers? Get My Free Yield Report →
          </a>
        </div>
      </div>
    </section>
  );
}
