'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

import { FEATURED_PROPERTIES } from '@/data/properties';

export type { Property } from '@/data/properties';
export { FEATURED_PROPERTIES };

export function PropertyListings(): React.ReactElement {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Featured Properties
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated selection of premium real estate opportunities across the UK. Each property is carefully vetted and offers attractive returns for fractional investors.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          <button className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors">
            All Properties
          </button>
          <button className="px-6 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200 transition-colors">
            Office
          </button>
          <button className="px-6 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200 transition-colors">
            Residential
          </button>
          <button className="px-6 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200 transition-colors">
            Retail
          </button>
          <button className="px-6 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200 transition-colors">
            High Yield
          </button>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROPERTIES.map((property) => (
            <div
              key={property.id}
              className="rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {property.occupancyRate} occupied
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title & Location */}
                <h3 className="text-xl font-bold text-black mb-2">
                  {property.title}
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  📍 {property.location}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div>
                    <p className="text-xs text-gray-600 font-medium mb-1">
                      Valuation
                    </p>
                    <p className="text-lg font-bold text-black">
                      {property.valuation}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-medium mb-1">
                      Expected Return
                    </p>
                    <p className="text-lg font-bold text-green-600">
                      {property.expectedReturn}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-medium mb-1">
                      Share Price
                    </p>
                    <p className="text-lg font-bold text-black">
                      {property.sharePrice}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-medium mb-1">
                      Shares Available
                    </p>
                    <p className="text-lg font-bold text-black">
                      {property.sharesAvailable.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/properties/${property.id}`}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
                >
                  Invest Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Viewing {FEATURED_PROPERTIES.length} of many available properties
          </p>
          <button className="px-8 py-4 bg-gray-100 text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
}
