import { Navbar } from '@/components/Navbar';
import { RiskWarningBanner } from '@/components/RiskWarningBanner';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

export default function Legal() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div style={{ height: '69px' }} />

      <main className="flex flex-col">
        <RiskWarningBanner />

        <div className="max-w-3xl mx-auto px-6 py-16 w-full">
          <p className="text-sm font-medium text-[#FF0000] mb-3 tracking-wide uppercase">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
            Legal Information
          </h1>
          <p className="text-gray-500 text-sm mb-10">
            Last updated: July 2026 · Full documentation in preparation
          </p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-bold text-black mb-3">Terms of Service</h2>
              <p className="text-gray-700 leading-relaxed">
                The complete Terms of Service governing use of the Fractionex platform will be
                published here prior to public launch. They will cover account registration,
                investment eligibility, token issuance, distributions, liquidity windows, and
                platform responsibilities.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">Risk Disclosures</h2>
              <p className="text-gray-700 leading-relaxed">
                Investing in fractional property via digital securities involves significant risk.
                Capital is at risk. Property values and rental income can fall as well as rise.
                Past performance is not a reliable indicator of future results. You should not
                invest money you cannot afford to lose.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Full, property-specific risk factors will appear on every listing. A consolidated
                risk summary is also available on the{' '}
                <Link href="/how-it-works" className="text-[#FF0000] hover:underline">
                  How it Works
                </Link>{' '}
                page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">Regulatory Status</h2>
              <p className="text-gray-700 leading-relaxed">
                Fractionex intends to operate under a regulated framework for the issuance and
                distribution of digital securities backed by real property. Specific licensing
                details and the identity of the regulated entity will be confirmed and published
                here before any public offering.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">Contact</h2>
              <p className="text-gray-700 leading-relaxed">
                For legal enquiries please contact{' '}
                <a
                  href="mailto:legal@fractionex.io"
                  className="text-[#FF0000] hover:underline"
                >
                  legal@fractionex.io
                </a>
                .
              </p>
            </section>
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
