import { Navbar } from '@/components/Navbar';
import { RiskWarningBanner } from '@/components/RiskWarningBanner';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesCarousel } from '@/components/FeaturesCarousel';
import { CryptoAssetsGrid } from '@/components/CryptoAssetsGrid';
import { TrustSection } from '@/components/TrustSection';
import { Footer } from '@/components/Footer';

export default function Insights() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Offset for fixed 69px nav */}
      <div style={{ height: '69px' }} />

      <main className="flex flex-col">
        <RiskWarningBanner />

        <HeroSection
          headline="Market Insights & Analysis"
          subheading="Stay informed with real estate market trends and investment analysis."
          description="Get expert insights to make better investment decisions."
          ctaText="Read Insights"
          ctaHref="/insights"
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
