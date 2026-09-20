import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import type { Property } from '@/data/properties';

function occupancyToNumber(occupancyRate: string): number {
  const parsed = parseFloat(occupancyRate.replace('%', ''));
  return Number.isFinite(parsed) ? Math.min(100, Math.max(0, parsed)) : 0;
}

interface RedesignPropertyCardProps {
  property: Property;
}

export function RedesignPropertyCard({ property }: RedesignPropertyCardProps): React.ReactElement {
  const occupancy = occupancyToNumber(property.occupancyRate);

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/60">
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden bg-gray-100">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute right-3 top-3 rounded-full bg-black/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {property.expectedReturn} return
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-black">{property.title}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-gray-600">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-[var(--brand-red)]" aria-hidden="true" />
          {property.location}
        </p>

        {/* Stats row */}
        <div className="mt-5 grid grid-cols-3 gap-3 border-t border-gray-100 pt-5">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wide text-gray-500">Valuation</p>
            <p className="mt-1 text-sm font-bold text-black">{property.valuation}</p>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wide text-gray-500">Exp. return</p>
            <p className="mt-1 text-sm font-bold text-[var(--brand-red)]">{property.expectedReturn}</p>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wide text-gray-500">Share price</p>
            <p className="mt-1 text-sm font-bold text-black">{property.sharePrice}</p>
          </div>
        </div>

        {/* Occupancy / funding progress bar */}
        <div className="mt-5">
          <div className="mb-1.5 flex items-center justify-between text-xs text-gray-600">
            <span>Occupancy</span>
            <span className="font-semibold text-black">{property.occupancyRate}</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-[var(--brand-red)]"
              style={{ width: `${occupancy}%` }}
            />
          </div>
        </div>

        <Link
          href={`/properties/${property.id}`}
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-red)]"
        >
          {property.sharesAvailable.toLocaleString()} shares available
        </Link>
      </div>
    </div>
  );
}
