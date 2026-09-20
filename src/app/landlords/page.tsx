import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { Footer } from '@/components/Footer';
import {
  LandlordProblemSection,
  LandlordOfferSection,
  LandlordHowItWorksSection,
} from '@/components/landlords/LandlordProblemSection';
import { YieldAuditForm } from '@/components/landlords/YieldAuditForm';
import { OwnershipControlSection } from '@/components/landlords/OwnershipControlSection';
import { ActiveManagementSection } from '@/components/landlords/ActiveManagementSection';
import {
  LiquiditySection,
  HandoverSection,
} from '@/components/landlords/LiquidityAndHandoverSection';
import { LandlordPricingSection } from '@/components/landlords/LandlordPricingSection';
import { LandlordGuaranteeSection } from '@/components/landlords/LandlordGuaranteeSection';
import { LandlordFAQSection } from '@/components/landlords/LandlordFAQSection';
import { LandlordFinalCTA } from '@/components/landlords/LandlordFinalCTA';

const LANDLORD_MENU_ITEMS = [
  { label: 'For Property Owners', href: '/landlords' },
  { label: 'How it Works', href: '/how-it-works' },
  { label: 'FAQs', href: '/landlords#faq' },
  { label: 'For Investors', href: '/' },
];

export const metadata = {
  title: 'Tokenise Your Property & Unlock Its Yield | FractionEx',
  description:
    'Unlock the cash tied up in your property and let FractionEx actively manage it for a higher yield — without selling it, without the admin.',
};

export default function LandlordsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar
        menuItems={LANDLORD_MENU_ITEMS}
        ctaButton={{ text: 'Get My Free Yield Report', href: '#audit-form' }}
      />

      <main className="flex flex-col">
        <HeroSection
          headline="UAE landlords: your property could be earning more. Let's find out how much."
          subheading="FractionEx unlocks the cash tied up in your property and actively manages it for a higher yield — without you selling it, and without you doing the work."
          description=""
          ctaText="Get My Free Yield Report"
          ctaHref="#audit-form"
          videoSrc="/images/coinbase/hero-video.webm"
        />

        <div className="w-full bg-white text-center py-4">
          <Link href="/properties" className="text-sm text-gray-500 hover:text-red-600">
            Looking to invest instead? Explore properties →
          </Link>
        </div>

        <LandlordProblemSection />
        <LandlordOfferSection />
        <LandlordHowItWorksSection />

        <section id="audit-form" className="w-full bg-white py-20 scroll-mt-24">
          <div className="max-w-3xl mx-auto px-6 text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Before you commit to anything, see your real numbers.
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              We&apos;ll show you exactly what your property could be earning — compared to what
              it&apos;s earning now — in a free, no-obligation report. If we can&apos;t show you a
              credible path to a higher net yield, you&apos;ve lost nothing but five minutes.
            </p>
          </div>
          <YieldAuditForm />
        </section>

        <OwnershipControlSection />
        <ActiveManagementSection />
        <LiquiditySection />
        <HandoverSection />
        <LandlordPricingSection />
        <LandlordGuaranteeSection />

        <div id="faq">
          <LandlordFAQSection />
        </div>

        <LandlordFinalCTA />
      </main>

      <Footer />
    </div>
  );
}
