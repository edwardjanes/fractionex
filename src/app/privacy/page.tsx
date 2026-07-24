import { Navbar } from '@/components/Navbar';
import { RiskWarningBanner } from '@/components/RiskWarningBanner';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesCarousel } from '@/components/FeaturesCarousel';
import { CryptoAssetsGrid } from '@/components/CryptoAssetsGrid';
import { TrustSection } from '@/components/TrustSection';
import { Footer } from '@/components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Offset for fixed 69px nav */}
      <div style={{ height: '69px' }} />

      <main className="flex flex-col">
        <RiskWarningBanner />

        <HeroSection
          headline="Privacy Policy"
          subheading="How Fractionex collects, uses, and protects your personal information."
          description="Your privacy is important to us. Learn how we handle your data."
          ctaText="Read Privacy Policy"
          ctaHref="/privacy"
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
