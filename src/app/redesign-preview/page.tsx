import React from 'react';
import { Footer } from '@/components/Footer';
import { RedesignHeader } from '@/components/redesign/RedesignHeader';
import { RedesignHero } from '@/components/redesign/RedesignHero';
import { RedesignWhyChoose } from '@/components/redesign/RedesignWhyChoose';
import { RedesignPropertyGrid } from '@/components/redesign/RedesignPropertyGrid';
import { RedesignHowItWorks } from '@/components/redesign/RedesignHowItWorks';
import { RedesignLocations } from '@/components/redesign/RedesignLocations';
import { RedesignCTA } from '@/components/redesign/RedesignCTA';
import { FEATURED_PROPERTIES } from '@/components/PropertyListings';

export default function RedesignPreviewPage(): React.ReactElement {
  return (
    <div className="min-h-screen bg-white">
      <RedesignHeader />

      <main className="flex flex-col">
        <RedesignHero />
        <RedesignWhyChoose />
        <RedesignPropertyGrid properties={FEATURED_PROPERTIES} />
        <RedesignHowItWorks />
        <RedesignLocations />
        <RedesignCTA />
      </main>

      <Footer />
    </div>
  );
}
