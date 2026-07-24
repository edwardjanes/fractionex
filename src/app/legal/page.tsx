import { Navbar } from '@/components/Navbar';
import { RiskWarningBanner } from '@/components/RiskWarningBanner';
import { HeroSection } from '@/components/HeroSection';
import { TrustSection } from '@/components/TrustSection';
import { Footer } from '@/components/Footer';

export default function Legal() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div style={{ height: '69px' }} />

      <main className="flex flex-col">
        <RiskWarningBanner />

        <HeroSection
          headline="Legal Information"
          subheading="Terms of service and legal disclosures for Fractionex."
          description="Please review our legal terms and conditions for using Fractionex. Full documentation will be published here shortly."
          ctaText="Back to Home"
          ctaHref="/"
        />

        <TrustSection />
      </main>

      <Footer />
    </div>
  );
}
