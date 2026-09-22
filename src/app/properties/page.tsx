import { Navbar } from '@/components/Navbar';
import { RiskWarningBanner } from '@/components/RiskWarningBanner';
import { PropertyListings } from '@/components/PropertyListings';
import { TrustSection } from '@/components/TrustSection';
import { Footer } from '@/components/Footer';

export default function Properties() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Offset for fixed 69px nav */}
      <div style={{ height: '69px' }} />

      <main className="flex flex-col">
        <RiskWarningBanner />
        <PropertyListings />
        <TrustSection />
      </main>

      <Footer />
    </div>
  );
}
