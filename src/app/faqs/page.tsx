import { Navbar } from '@/components/Navbar';
import { RiskWarningBanner } from '@/components/RiskWarningBanner';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesCarousel } from '@/components/FeaturesCarousel';
import { CryptoAssetsGrid } from '@/components/CryptoAssetsGrid';
import { TrustSection } from '@/components/TrustSection';
import { Footer } from '@/components/Footer';

export default function FAQs() {
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
          headline="Frequently Asked Questions"
          subheading="Find answers to common questions about Fractionex."
          description="Everything you need to know about fractional real estate investing."
          ctaText="Explore FAQs"
          ctaHref="/faqs"
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
