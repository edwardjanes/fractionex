import { Navbar } from '@/components/Navbar';
import { RiskWarningBanner } from '@/components/RiskWarningBanner';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

export default function Security() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div style={{ height: '69px' }} />

      <main className="flex flex-col">
        <RiskWarningBanner />

        <div className="max-w-3xl mx-auto px-6 py-16 w-full">
          <p className="text-sm font-medium text-[#FF0000] mb-3 tracking-wide uppercase">
            Security
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
            Security & Protection
          </h1>
          <p className="text-gray-500 text-sm mb-10">
            Last updated: July 2026 · Detailed overview in preparation
          </p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-bold text-black mb-3">Our approach</h2>
              <p className="text-gray-700 leading-relaxed">
                Fractionex is designed so that investor assets sit in ring-fenced legal structures
                separate from the operating company. Tokens are regulated digital securities
                (ERC-3643) with compliance controls built into the token itself.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">Key protections</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  <strong>Ring-fenced compartments</strong> — each property is held in its own
                  legally separate structure.
                </li>
                <li>
                  <strong>On-chain ownership records</strong> — your economic interest is recorded
                  independently of Fractionex systems.
                </li>
                <li>
                  <strong>KYC / AML verification</strong> — only verified, eligible investors can
                  hold tokens.
                </li>
                <li>
                  <strong>Smart-contract controls</strong> — distribution and transfer rules are
                  enforced by code as well as legal documents.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">Operational security</h2>
              <p className="text-gray-700 leading-relaxed">
                Platform infrastructure, access controls, encryption and monitoring practices will
                be described in full once the production environment is finalised. Independent
                audits of smart contracts and key operational processes are planned.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">Reporting concerns</h2>
              <p className="text-gray-700 leading-relaxed">
                If you discover a security issue, please contact{' '}
                <a
                  href="mailto:security@fractionex.io"
                  className="text-[#FF0000] hover:underline"
                >
                  security@fractionex.io
                </a>
                . Do not disclose vulnerabilities publicly until we have had an opportunity to
                investigate and remediate.
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
