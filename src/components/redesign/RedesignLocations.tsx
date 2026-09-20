import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { FEATURED_PROPERTIES } from '@/data/properties';

interface LocationSummary {
  city: string;
  image: string;
  propertyCount: number;
  topReturn: string;
}

function buildLocationSummaries(): LocationSummary[] {
  const cities = ['London', 'Manchester', 'Birmingham', 'Edinburgh'];

  return cities.map((city) => {
    const matches = FEATURED_PROPERTIES.filter((property) => property.location.startsWith(city));
    const topReturn = matches
      .map((property) => parseFloat(property.expectedReturn))
      .reduce((max, value) => (Number.isFinite(value) && value > max ? value : max), 0);

    return {
      city,
      image: matches[0]?.image ?? FEATURED_PROPERTIES[0].image,
      propertyCount: matches.length,
      topReturn: topReturn > 0 ? `${topReturn}%` : matches[0]?.expectedReturn ?? '—',
    };
  });
}

export function RedesignLocations(): React.ReactElement {
  const locations = buildLocationSummaries();

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--brand-red)]">
            Where we invest
          </p>
          <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Vetted properties across the UK
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Income-producing real estate in the cities driving the UK&rsquo;s economy.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((location) => (
            <Link
              key={location.city}
              href={`/properties?location=${location.city.toLowerCase()}`}
              className="group relative flex h-64 flex-col justify-end overflow-hidden rounded-2xl border border-gray-200"
            >
              <Image
                src={location.image}
                alt={`${location.city} properties`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="relative z-10 p-5 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{location.city}</h3>
                  <ArrowUpRight className="h-5 w-5 opacity-80" aria-hidden="true" />
                </div>
                <p className="mt-1 text-sm text-white/85">
                  {location.propertyCount} {location.propertyCount === 1 ? 'property' : 'properties'} ·
                  up to {location.topReturn} return
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
