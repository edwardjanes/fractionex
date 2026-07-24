'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Property {
  id: string;
  title: string;
  location: string;
  valuation: string;
  expectedReturn: string;
  sharePrice: string;
  sharesAvailable: number;
  occupancyRate: string;
  type: string;
  image?: string;
}

const FEATURED_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Premium Office Tower',
    location: 'London, UK',
    valuation: '£45.2M',
    expectedReturn: '7.5%',
    sharePrice: '£250',
    sharesAvailable: 1200,
    occupancyRate: '92%',
    type: 'Office',
  },
  {
    id: '2',
    title: 'Residential Complex',
    location: 'Manchester, UK',
    valuation: '£28.5M',
    expectedReturn: '6.8%',
    sharePrice: '£180',
    sharesAvailable: 1500,
    occupancyRate: '88%',
    type: 'Residential',
    image: '/images/residential-manchester.jpg',
  },
  {
    id: '3',
    title: 'Retail Shopping Centre',
    location: 'Birmingham, UK',
    valuation: '£52.0M',
    expectedReturn: '8.2%',
    sharePrice: '£320',
    sharesAvailable: 950,
    occupancyRate: '95%',
    type: 'Retail',
  },
  {
    id: '4',
    title: 'Luxury Apartments',
    location: 'Edinburgh, UK',
    valuation: '£35.8M',
    expectedReturn: '7.1%',
    sharePrice: '£215',
    sharesAvailable: 1800,
    occupancyRate: '90%',
    type: 'Residential',
  },
  {
    id: '5',
    title: 'Business Park',
    location: 'Bristol, UK',
    valuation: '£41.3M',
    expectedReturn: '7.9%',
    sharePrice: '£285',
    sharesAvailable: 1100,
    occupancyRate: '87%',
    type: 'Office',
  },
  {
    id: '6',
    title: 'Hotel & Leisure',
    location: 'Liverpool, UK',
    valuation: '£29.7M',
    expectedReturn: '8.5%',
    sharePrice: '£195',
    sharesAvailable: 2000,
    occupancyRate: '91%',
    type: 'Leisure',
  },
];

const GRADIENTS = [
  'from-slate-800 to-slate-900',
  'from-zinc-800 to-zinc-900',
  'from-neutral-800 to-neutral-900',
  'from-stone-800 to-stone-900',
  'from-gray-800 to-gray-900',
  'from-slate-700 to-slate-900',
];

export function PropertyListings(): React.ReactElement {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Featured Properties
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated selection of premium real estate opportunities across the UK. Each
            property is carefully vetted and offers attractive returns for fractional investors.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          <button className="px-6 py-2 bg-[#FF0000] text-white text-sm font-medium rounded-full hover:bg-[#CC0000] transition-colors">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROPERTIES.map((property, idx) => (
            <div
              key={property.id}
              className="rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden bg-gray-200">
                {property.image ? (
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${GRADIENTS[idx % GRADIENTS.length]} flex flex-col items-center justify-center`}
                  >
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        background:
                          'radial-gradient(ellipse at 30% 20%, #FF0000 0%, transparent 50%)',
                      }}
                    />
                    <span className="relative z-10 text-white/90 text-sm font-semibold tracking-widest uppercase mb-2">
                      {property.type}
                    </span>
                    <span className="relative z-10 text-white text-xl font-bold text-center px-6 leading-tight">
                      {property.title}
                    </span>
                  </div>
                )}

                <div className="absolute top-4 right-4 bg-[#FF0000] text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                  {property.occupancyRate} occupied
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">{property.title}</h3>
                <p className="text-sm text-gray-600 mb-6">📍 {property.location}</p>

                <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div>
                    <p className="text-xs text-gray-600 font-medium mb-1">Valuation</p>
                    <p className="text-lg font-bold text-black">{property.valuation}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-medium mb-1">Expected Return</p>
                    <p className="text-lg font-bold text-green-600">{property.expectedReturn}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-medium mb-1">Share Price</p>
                    <p className="text-lg font-bold text-black">{property.sharePrice}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-medium mb-1">Shares Available</p>
                    <p className="text-lg font-bold text-black">
                      {property.sharesAvailable.toLocaleString()}
                    </p>
                  </div>
                </div>

                <Link
                  href={`/properties/${property.id}`}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#FF0000] text-white font-semibold rounded-full hover:bg-[#CC0000] transition-colors"
                >
                  Invest Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Viewing {FEATURED_PROPERTIES.length} of many available properties
          </p>
          <Link
            href="/properties"
            className="inline-flex px-8 py-4 bg-gray-100 text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
          >
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
}
