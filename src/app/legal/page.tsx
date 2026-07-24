import { Navbar } from '@/components/Navbar';
import { RiskWarningBanner } from '@/components/RiskWarningBanner';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesCarousel } from '@/components/FeaturesCarousel';
import { CryptoAssetsGrid } from '@/components/CryptoAssetsGrid';
import { TrustSection } from '@/components/TrustSection';
import { Footer } from '@/components/Footer';

export default function Legal() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Offset for fixed 69px nav */}
      <div style={{ height: '69px' }} />

      <main className="flex flex-col">
        <RiskWarningBanner />

        <HeroSection
          headline="Legal Information"
          subheading="Terms of service and legal disclosures for Fractionex."
          description="Please review our legal terms and conditions for using Fractionex."
          ctaText="Read More"
          ctaHref="/legal"
          videoSrc="/images/coinbase/hero-video.webm"
        />

        <FeaturesCarousel />
        <CryptoAssetsGrid />
        <TrustSection />
      </main>

      <Footer />
    </div>
  );
}
