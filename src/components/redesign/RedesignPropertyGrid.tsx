import React from 'react';
import type { Property } from '@/data/properties';
import { RedesignPropertyCard } from '@/components/redesign/RedesignPropertyCard';

interface RedesignPropertyGridProps {
  properties: Property[];
}

export function RedesignPropertyGrid({ properties }: RedesignPropertyGridProps): React.ReactElement {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--brand-red)]">
            Featured properties
          </p>
          <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Explore our curated selection
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Each property is carefully vetted and offers attractive returns for fractional
            investors.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <RedesignPropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="mb-6 text-gray-600">
            Viewing {properties.length} of many available properties
          </p>
          <button
            type="button"
            className="rounded-full bg-gray-100 px-8 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-gray-200"
          >
            View all properties
          </button>
        </div>
      </div>
    </section>
  );
}
