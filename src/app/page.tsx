import { Navbar } from '@/components/Navbar';
import { RiskWarningBanner } from '@/components/RiskWarningBanner';
import { HeroSection } from '@/components/HeroSection';
import { TrustStrip } from '@/components/TrustStrip';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionPillars } from '@/components/SolutionPillars';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { OwnershipSecurity } from '@/components/OwnershipSecurity';
import { DifferentiationSection } from '@/components/DifferentiationSection';
import { PropertyListings } from '@/components/PropertyListings';
import { OwnerDeveloperStrip } from '@/components/OwnerDeveloperStrip';
import { FinalCTASection } from '@/components/FinalCTASection';
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

        {/* Trust Strip */}
        <TrustStrip />

        {/* Problem Section */}
        <ProblemSection />

        {/* Solution Pillars */}
        <SolutionPillars />

        {/* How It Works */}
        <HowItWorksSection />

        {/* Ownership & Security */}
        <OwnershipSecurity />

        {/* Differentiation */}
        <DifferentiationSection />

        {/* Properties Preview */}
        <PropertyListings />

        {/* Owner/Developer Strip */}
        <OwnerDeveloperStrip />

        {/* Final CTA */}
        <FinalCTASection />

        {/* Features Carousel (existing) */}
        <FeaturesCarousel />

        {/* Crypto Assets Grid (existing) */}
        <CryptoAssetsGrid />

        {/* Trust Section (existing) */}
        <TrustSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
