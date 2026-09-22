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
import { TrustSection } from '@/components/TrustSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Offset for fixed 69px nav */}
      <div style={{ height: '69px' }} />

      <main className="flex flex-col">
        <RiskWarningBanner />

        <HeroSection
          headline="Fractional ownership of real property"
          subheading="Fractionex is building a platform for fractional ownership of real property through tokenisation."
          description="We're preparing to launch. No investments are available yet, and we will publish our regulatory status before anything is offered."
          ctaText="Read the FAQs"
          ctaHref="/faqs"
        />

        <TrustStrip />
        <ProblemSection />
        <SolutionPillars />
        <HowItWorksSection />
        <OwnershipSecurity />
        <DifferentiationSection />
        <PropertyListings />
        <OwnerDeveloperStrip />
        <FinalCTASection />
        <TrustSection />
      </main>

      <Footer />
    </div>
  );
}
