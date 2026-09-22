import { Navbar } from '@/components/Navbar';
import { RiskWarningBanner } from '@/components/RiskWarningBanner';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div style={{ height: '69px' }} />

      <main className="flex flex-col">
        <RiskWarningBanner />

        <div className="max-w-3xl mx-auto px-6 py-16 w-full">
          <p className="text-sm font-medium text-[#FF0000] mb-3 tracking-wide uppercase">
            Privacy
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm mb-10">
            Last updated: July 2026 · Full policy in preparation
          </p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-bold text-black mb-3">Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                Fractionex is committed to protecting your personal data. This page will host the
                complete Privacy Policy once finalised. Until then, the principles below outline
                how we intend to handle information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">What we collect</h2>
              <p className="text-gray-700 leading-relaxed">
                To operate a regulated investment platform we will need to collect identity and
                contact details for KYC/AML verification, account information, transaction and
                investment records, and technical data (device, browser, IP) required for security
                and service delivery.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">How we use it</h2>
              <p className="text-gray-700 leading-relaxed">
                Data will be used solely to provide the service, meet regulatory obligations,
                prevent fraud, communicate with you about your account and investments, and
                improve the platform. We will not sell personal data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">Your rights</h2>
              <p className="text-gray-700 leading-relaxed">
                Under applicable data-protection law you will have rights of access, rectification,
                erasure, restriction, portability and objection. Full details of how to exercise
                these rights will appear in the published policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">Contact</h2>
              <p className="text-gray-700 leading-relaxed">
                Privacy enquiries:{' '}
                <a
                  href="mailto:privacy@fractionex.io"
                  className="text-[#FF0000] hover:underline"
                >
                  privacy@fractionex.io
                </a>
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
