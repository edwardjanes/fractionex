import { Navbar } from '@/components/Navbar';
import { RiskWarningBanner } from '@/components/RiskWarningBanner';
import { AboutPageContent } from '@/components/AboutPageContent';
import { Footer } from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-col">
        {/* Risk Warning Banner */}
        <RiskWarningBanner />

        {/* About Page Content */}
        <AboutPageContent />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
