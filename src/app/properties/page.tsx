import { Navbar } from '@/components/Navbar';
import { RiskWarningBanner } from '@/components/RiskWarningBanner';
import { PropertyListings } from '@/components/PropertyListings';
import { TrustSection } from '@/components/TrustSection';
import { Footer } from '@/components/Footer';

export default function Properties() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-col">
        {/* Risk Warning Banner */}
        <RiskWarningBanner />

        {/* Property Listings */}
        <PropertyListings />

        {/* Trust Section */}
        <TrustSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
