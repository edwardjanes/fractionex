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
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-col">
        {/* Risk Warning Banner */}
        <RiskWarningBanner />

        {/* Hero Section */}
        <HeroSection
          headline="Legal Information"
          subheading="Terms of service and legal disclosures for Fractionex."
          description="Please review our legal terms and conditions for using Fractionex."
          ctaText="Read More"
          ctaHref="/legal"
          videoSrc="/images/coinbase/hero-video.webm"
        />

        {/* Features Carousel */}
        <FeaturesCarousel />

        {/* Crypto Assets Grid */}
        <CryptoAssetsGrid />

        {/* Trust Section */}
        <TrustSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
