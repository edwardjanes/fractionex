import { Navbar } from '@/components/Navbar';
import { RiskWarningBanner } from '@/components/RiskWarningBanner';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesCarousel } from '@/components/FeaturesCarousel';
import { CryptoAssetsGrid } from '@/components/CryptoAssetsGrid';
import { TrustSection } from '@/components/TrustSection';
import { Footer } from '@/components/Footer';

export default function Security() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Offset for fixed 69px nav */}
      <div style={{ height: '69px' }} />

      <main className="flex flex-col">
        <RiskWarningBanner />

        <HeroSection
          headline="Security & Protection"
          subheading="Learn how Fractionex protects your investments and personal data."
          description="We use industry-leading security measures to keep your assets safe."
          ctaText="Learn About Security"
          ctaHref="/security"
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
