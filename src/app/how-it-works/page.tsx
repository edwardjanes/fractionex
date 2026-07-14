import { Navbar } from '@/components/Navbar';
import { RiskWarningBanner } from '@/components/RiskWarningBanner';
import { HowItWorksPageContent } from '@/components/HowItWorksPageContent';
import { Footer } from '@/components/Footer';

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-col">
        {/* Risk Warning Banner */}
        <RiskWarningBanner />

        {/* How It Works Page Content */}
        <HowItWorksPageContent />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
