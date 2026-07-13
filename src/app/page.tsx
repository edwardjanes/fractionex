import { Navbar } from '@/components/Navbar';
import { RiskWarningBanner } from '@/components/RiskWarningBanner';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesCarousel } from '@/components/FeaturesCarousel';
import { CryptoAssetsGrid } from '@/components/CryptoAssetsGrid';
import { TrustSection } from '@/components/TrustSection';
import { Footer } from '@/components/Footer';

export default function Home() {
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
          headline="The most trusted way to own real estate"
          subheading="Fractionex is the most trusted platform for fractional real estate investing through tokenisation."
          description="Fractionex lets you buy, hold, and trade fractional shares of real property — fully regulated, fully transparent, and fully yours."
          ctaText="Start Investing"
          ctaHref="/signup"
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
