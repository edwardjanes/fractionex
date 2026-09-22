import { Navbar } from '@/components/Navbar';
import { RiskWarningBanner } from '@/components/RiskWarningBanner';
import { HowItWorksPageContent } from '@/components/HowItWorksPageContent';
import { Footer } from '@/components/Footer';

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Offset for fixed 69px nav */}
      <div style={{ height: '69px' }} />

      <main className="flex flex-col">
        <RiskWarningBanner />
        <HowItWorksPageContent />
      </main>

      <Footer />
    </div>
  );
}
