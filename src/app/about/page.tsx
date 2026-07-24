import { Navbar } from '@/components/Navbar';
import { RiskWarningBanner } from '@/components/RiskWarningBanner';
import { AboutPageContent } from '@/components/AboutPageContent';
import { Footer } from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Offset for fixed 69px nav */}
      <div style={{ height: '69px' }} />

      <main className="flex flex-col">
        <RiskWarningBanner />
        <AboutPageContent />
      </main>

      <Footer />
    </div>
  );
}
