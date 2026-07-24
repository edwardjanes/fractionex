import { Navbar } from '@/components/Navbar';
import { RiskWarningBanner } from '@/components/RiskWarningBanner';
import { HeroSection } from '@/components/HeroSection';
import { TrustSection } from '@/components/TrustSection';
import { Footer } from '@/components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div style={{ height: '69px' }} />

      <main className="flex flex-col">
        <RiskWarningBanner />

        <HeroSection
          headline="Privacy Policy"
          subheading="How Fractionex collects, uses, and protects your personal information."
          description="Your privacy is important to us. The full privacy policy will be published here shortly."
          ctaText="Back to Home"
          ctaHref="/"
        />

        <TrustSection />
      </main>

      <Footer />
    </div>
  );
}
