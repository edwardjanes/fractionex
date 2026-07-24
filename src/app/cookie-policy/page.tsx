import { Navbar } from '@/components/Navbar';
import { RiskWarningBanner } from '@/components/RiskWarningBanner';
import { HeroSection } from '@/components/HeroSection';
import { TrustSection } from '@/components/TrustSection';
import { Footer } from '@/components/Footer';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div style={{ height: '69px' }} />

      <main className="flex flex-col">
        <RiskWarningBanner />

        <HeroSection
          headline="Cookie Policy"
          subheading="Understanding how Fractionex uses cookies and similar technologies."
          description="The full cookie policy will be published here shortly."
          ctaText="Back to Home"
          ctaHref="/"
        />

        <TrustSection />
      </main>

      <Footer />
    </div>
  );
}
