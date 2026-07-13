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
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-col">
        {/* Risk Warning Banner */}
        <RiskWarningBanner />

        {/* Hero Section */}
        <HeroSection
          headline="Market Insights & Analysis"
          subheading="Stay informed with real estate market trends and investment analysis."
          description="Get expert insights to make better investment decisions."
          ctaText="Read Insights"
          ctaHref="/insights"
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
