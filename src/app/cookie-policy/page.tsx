import { Navbar } from '@/components/Navbar';
import { RiskWarningBanner } from '@/components/RiskWarningBanner';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div style={{ height: '69px' }} />

      <main className="flex flex-col">
        <RiskWarningBanner />

        <div className="max-w-3xl mx-auto px-6 py-16 w-full">
          <p className="text-sm font-medium text-[#FF0000] mb-3 tracking-wide uppercase">
            Cookies
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-gray-500 text-sm mb-10">
            Last updated: July 2026 · Full policy in preparation
          </p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-bold text-black mb-3">What are cookies?</h2>
              <p className="text-gray-700 leading-relaxed">
                Cookies are small text files placed on your device when you visit a website. They
                help the site function, remember preferences, and understand how it is used.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">How Fractionex will use cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                We expect to use:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700">
                <li>
                  <strong>Essential cookies</strong> — required for the site and account features
                  to work securely.
                </li>
                <li>
                  <strong>Analytics cookies</strong> — to understand usage patterns and improve the
                  product (anonymised where possible).
                </li>
                <li>
                  <strong>Preference cookies</strong> — to remember settings such as language or
                  display choices.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">Managing cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                You can control cookies through your browser settings. Blocking essential cookies
                may prevent parts of the platform from functioning. A detailed cookie table and
                consent mechanism will be added with the full policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">Contact</h2>
              <p className="text-gray-700 leading-relaxed">
                Questions about cookies:{' '}
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
