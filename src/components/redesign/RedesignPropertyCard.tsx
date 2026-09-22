import React from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import type { Property } from '@/data/properties';

interface RedesignPropertyCardProps {
  property: Property;
}

export function RedesignPropertyCard({ property }: RedesignPropertyCardProps): React.ReactElement {
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
          Example only
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-black">{property.title}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-gray-600">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-[var(--brand-red)]" aria-hidden="true" />
          {property.location}
        </p>

        <p className="mt-5 border-t border-gray-100 pt-5 text-sm text-gray-600">
          Illustrative layout, not a real investment. Real listings will show the full
          financials and risks.
        </p>
      </div>
    </div>
  );
}
