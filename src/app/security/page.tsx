import { Navbar } from '@/components/Navbar';
import { RiskWarningBanner } from '@/components/RiskWarningBanner';
import { HeroSection } from '@/components/HeroSection';
import { TrustSection } from '@/components/TrustSection';
import { Footer } from '@/components/Footer';

export default function Security() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div style={{ height: '69px' }} />

      <main className="flex flex-col">
        <RiskWarningBanner />

        <HeroSection
          headline="Security & Protection"
          subheading="Learn how Fractionex protects your investments and personal data."
          description="We use industry-leading security measures to keep your assets safe. Full details will be published here shortly."
          ctaText="Back to Home"
          ctaHref="/"
        />

        <TrustSection />
      </main>

      <Footer />
    </div>
  );
}
