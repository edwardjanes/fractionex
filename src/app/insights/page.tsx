import { Navbar } from '@/components/Navbar';
import { RiskWarningBanner } from '@/components/RiskWarningBanner';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

export default function Insights() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div style={{ height: '69px' }} />

      <main className="flex flex-col">
        <RiskWarningBanner />

        <div className="max-w-3xl mx-auto px-6 py-16 w-full">
          <p className="text-sm font-medium text-[#FF0000] mb-3 tracking-wide uppercase">
            Insights
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
            Market Insights
          </h1>
          <p className="text-gray-500 text-sm mb-10">
            Coming soon
          </p>

          <div className="prose prose-gray max-w-none space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              Analysis, market notes and educational content on UK real estate and fractional
              ownership will appear here as the platform approaches launch.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In the meantime you can explore how Fractionex works and the current curated
              property selection.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#FF0000] text-white font-semibold rounded-full hover:bg-[#CC0000] transition-colors"
            >
              How it Works
            </Link>
            <Link
              href="/properties"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
            >
              View Properties
            </Link>
          </div>

          <div className="mt-14 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-semibold text-[#FF0000] hover:text-[#CC0000]"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
