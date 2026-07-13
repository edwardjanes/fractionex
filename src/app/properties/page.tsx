import { Navbar } from '@/components/Navbar';
import { RiskWarningBanner } from '@/components/RiskWarningBanner';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesCarousel } from '@/components/FeaturesCarousel';
import { CryptoAssetsGrid } from '@/components/CryptoAssetsGrid';
import { TrustSection } from '@/components/TrustSection';
import { Footer } from '@/components/Footer';

export default function Properties() {
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
          headline="Explore Available Properties"
          subheading="Browse our curated selection of premium real estate opportunities."
          description="Discover properties that match your investment goals and portfolio strategy."
          ctaText="View Properties"
          ctaHref="/properties"
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
