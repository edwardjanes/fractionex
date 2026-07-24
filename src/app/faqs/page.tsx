import { Navbar } from '@/components/Navbar';
import { RiskWarningBanner } from '@/components/RiskWarningBanner';
import { FAQAccordion } from '@/components/FAQAccordion';
import { TrustSection } from '@/components/TrustSection';
import { Footer } from '@/components/Footer';

export default function FAQs() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Offset for fixed 69px nav */}
      <div style={{ height: '69px' }} />

      <main className="flex flex-col">
        <RiskWarningBanner />
        <FAQAccordion />
        <TrustSection />
      </main>

      <Footer />
    </div>
  );
}
