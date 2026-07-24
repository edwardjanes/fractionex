import { Navbar } from '@/components/Navbar';
import { RiskWarningBanner } from '@/components/RiskWarningBanner';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesCarousel } from '@/components/FeaturesCarousel';
import { CryptoAssetsGrid } from '@/components/CryptoAssetsGrid';
import { TrustSection } from '@/components/TrustSection';
import { Footer } from '@/components/Footer';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Offset for fixed 69px nav */}
      <div style={{ height: '69px' }} />

      <main className="flex flex-col">
        <RiskWarningBanner />

        <HeroSection
          headline="Cookie Policy"
          subheading="Understanding how Fractionex uses cookies and similar technologies."
          description="Learn about the cookies we use and how you can manage your preferences."
          ctaText="Read Cookie Policy"
          ctaHref="/cookie-policy"
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
