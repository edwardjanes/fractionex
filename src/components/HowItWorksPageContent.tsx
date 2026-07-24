'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function HowItWorksPageContent(): React.ReactElement {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Where is my money held before it's invested?",
      answer:
        'Client funds are held in segregated accounts pending investment into a property. Exact banking and safeguarding arrangements will be confirmed and published before any public offering.',
    },
    {
      question: 'What happens if Fractionex goes out of business?',
      answer:
        'Your tokens represent rights in ring-fenced compartments that are legally separate from Fractionex the company. Investor assets are designed to sit outside the operating business so that a platform failure does not automatically put the underlying property at risk. Final continuity and wind-down wording will be set out in the legal documents for each compartment.',
    },
    {
      question: 'Can I lose more than I invest?',
      answer:
        'No. Your maximum loss is the amount you invest. Tokens carry no debt or liability beyond your holding.',
    },
    {
      question: 'Who values the properties?',
      answer:
        'Properties are revalued each cycle against verified income performance. The full valuation process — including any independent valuer involvement — will be detailed at launch and on every listing.',
    },
    {
      question: 'Do I get a say in how the property is run?',
      answer:
        "You hold economic and governance rights — including reporting, disclosures, and defined voting rights — but day-to-day management decisions sit with our professional team. That separation is deliberate: it's what lets us optimise performance.",
    },
    {
      question: 'Is this crypto?',
      answer:
        "No. Tokens are the delivery mechanism, not the asset. You're investing in regulated securities backed by real property — the blockchain just makes ownership faster, cheaper, and independently verifiable.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. Hero */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Exactly how it works. No black box.
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            From the moment you invest £10 to the day you sell — what you own, how it&apos;s
            protected, how it grows, and what it costs. Everything on one page.
          </p>
        </div>
      </section>

      {/* 2. The Investor Journey */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-black mb-16 text-center">
            Your journey, start to finish
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: 1,
                title: 'Sign up and verify',
                description:
                  "Create your account and complete identity verification (KYC). It takes minutes, and it's not optional — Fractionex issues regulated digital securities, and every investor is verified. If a platform in this space doesn't ask who you are, that should worry you.",
              },
              {
                number: 2,
                title: 'Choose your property',
                description:
                  'Every listing shows the full picture: purchase price, current rental income, target yield, the management plan for growing that income, and the complete legal documentation. You choose specific properties — not a blind pool.',
              },
              {
                number: 3,
                title: 'Invest and receive tokens',
                description:
                  "Invest from £10. Your tokens are issued to your wallet and your ownership is recorded on-chain. Each token is a regulated digital security representing your share of that specific property's income and value.",
              },
              {
                number: 4,
                title: 'Earn, track, and exit',
                description:
                  "Rental income is distributed to you automatically in proportion to your holding. Your dashboard tracks income received and current valuation. When you want out, you sell in the next liquidity window at the property's current valuation.",
              },
            ].map((step) => (
              <div key={step.number} className="bg-white rounded-xl p-8 border border-gray-200">
                <div className="w-10 h-10 bg-[#FF0000] text-white rounded-full flex items-center justify-center font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What You Own */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-black mb-4 text-center">
            One property. One structure. Your name on your share.
          </h2>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Every property on Fractionex is held inside its own ring-fenced legal compartment — a
              regulated securitisation structure where one property equals one legally separate
              micro-fund. Your tokens represent a direct economic interest in that compartment: its
              rental income and its value.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-[#FF0000] pl-6">
                <h3 className="text-lg font-bold text-black mb-2">Your property is isolated</h3>
                <p className="text-gray-700">
                  If another property on the platform underperforms, it cannot touch yours. Each
                  compartment is legally sealed from the others.
                </p>
              </div>

              <div className="border-l-4 border-[#FF0000] pl-6">
                <h3 className="text-lg font-bold text-black mb-2">
                  Your assets are separate from our business
                </h3>
                <p className="text-gray-700">
                  The structure is deliberately designed so that investor assets sit outside
                  Fractionex the company. Final legal wording on continuity and separation will be
                  published with each offering.
                </p>
              </div>

              <div className="border-l-4 border-[#FF0000] pl-6">
                <h3 className="text-lg font-bold text-black mb-2">
                  Your rights are written down — and written into code
                </h3>
                <p className="text-gray-700">
                  Your entitlement to income and value isn&apos;t a promise in a marketing deck. It&apos;s
                  defined in the compartment&apos;s legal documents and enforced by the smart contracts
                  that govern distributions.
                </p>
              </div>
            </div>
          </div>

          {/* Ownership Diagram */}
          <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto border border-gray-200">
            <div className="flex items-center justify-center gap-4 flex-wrap md:flex-nowrap">
              <div className="bg-white border-2 border-gray-300 rounded-lg p-4 text-center font-semibold text-black min-w-[120px]">
                Property
              </div>
              <div className="text-2xl text-gray-400">→</div>
              <div className="bg-white border-2 border-[#FF0000] rounded-lg p-4 text-center font-semibold text-black min-w-[140px]">
                Ring-fenced
                <br />
                compartment
              </div>
              <div className="text-2xl text-gray-400">→</div>
              <div className="bg-white border-2 border-gray-300 rounded-lg p-4 text-center font-semibold text-black min-w-[100px]">
                Tokens
              </div>
              <div className="text-2xl text-gray-400">→</div>
              <div className="bg-red-50 border-2 border-[#FF0000] rounded-lg p-4 text-center font-semibold text-black min-w-[80px]">
                You
              </div>
            </div>
            <p className="text-xs text-gray-600 text-center mt-6 pt-6 border-t border-gray-300">
              Fractionex operates the marketplace — does not hold your assets
            </p>
          </div>
        </div>
      </section>

      {/* 4. The Token */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-black mb-8 text-center">
            Not a coin. A regulated security.
          </h2>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Fractionex tokens are built on ERC-3643 — the token standard designed specifically for
              regulated digital securities. The difference matters: a normal crypto token can be
              sent to anyone, anywhere, with no checks. An ERC-3643 security token has compliance
              built into the token itself — it can only be held and transferred by verified,
              eligible investors.{' '}
              <span className="font-semibold">The rules travel with the token.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 border-2 border-green-500">
              <h3 className="font-bold text-black mb-6">What your token includes</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✔</span>
                  <span className="text-gray-700">
                    Represents a defined share of one property&apos;s income and value
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✔</span>
                  <span className="text-gray-700">Transferable only between verified investors</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✔</span>
                  <span className="text-gray-700">Distribution rights enforced by smart contract</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✔</span>
                  <span className="text-gray-700">
                    Recorded on-chain — your ownership is independently verifiable
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-red-200">
              <h3 className="font-bold text-black mb-6">What it&apos;s not</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-gray-400 font-bold">✘</span>
                  <span className="text-gray-700">
                    Not a cryptocurrency. No mining, no speculation token, no utility coin.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The Engine */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-black mb-4 text-center">
            The part nobody else does: we make your property perform
          </h2>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Here&apos;s the mechanic that makes Fractionex different from every passive platform.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-black mb-3">
                  Properties on Fractionex are valued on their income
                </h3>
                <p className="text-gray-700">
                  Each property is priced on an income-yield basis — meaning its valuation is a
                  direct function of the net income it produces. Illustrative examples on this page
                  use a 5% yield for clarity; actual target yields are set per property.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-black mb-3">We actively grow that income</h3>
                <p className="text-gray-700">
                  Our in-house property management team runs each property to increase its net
                  operating income — better tenancies, reduced voids, optimised costs, smarter
                  operations. This isn&apos;t outsourced to whoever&apos;s cheapest. It&apos;s the core of our
                  model.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-black mb-3">
                  When income grows, your token value grows
                </h3>
                <p className="text-gray-700">
                  Because valuation is tied to income, every improvement our team engineers flows
                  directly into what your tokens are worth at the next revaluation.
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example */}
          <div className="bg-red-50 rounded-xl p-8 max-w-3xl mx-auto border-2 border-[#FF0000] mb-8">
            <h3 className="text-lg font-bold text-black mb-6">Worked example</h3>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center pb-4 border-b border-red-100">
                <span className="text-gray-700">Property generates annual income</span>
                <span className="text-2xl font-bold text-black">£50,000</span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b border-red-100">
                <span className="text-gray-700">On a 5% yield basis, valuation is</span>
                <span className="text-2xl font-bold text-black">£1,000,000</span>
              </div>

              <div className="bg-white p-4 rounded-lg border-l-4 border-[#FF0000] mb-4">
                <p className="text-sm text-gray-600 italic">
                  ↓ Our management team improves occupancy and reduces costs ↓
                </p>
              </div>

              <div className="flex justify-between items-center pb-4 border-b border-red-100">
                <span className="text-gray-700">Net income rises to</span>
                <span className="text-2xl font-bold text-black">£55,000</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-700">Property now worth</span>
                <span className="text-2xl font-bold text-[#FF0000]">£1,100,000</span>
              </div>

              <div className="flex justify-between items-center pt-4 border-t-2 border-[#FF0000] bg-white p-4 rounded">
                <span className="font-bold text-black">Every token holder&apos;s share is worth</span>
                <span className="text-2xl font-bold text-[#FF0000]">+10%</span>
              </div>
            </div>

            <p className="text-xs text-gray-600 italic">
              Illustrative example only. Income can fall as well as rise, and valuations move in
              both directions.
            </p>
          </div>

          <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            <span className="font-semibold">On a passive platform,</span> you get whatever the rent
            happens to be.{' '}
            <span className="font-semibold text-black">On Fractionex,</span> a professional team goes
            to work on your yield every day.
          </p>

          <div className="text-center">
            <Link
              href="/"
              className="inline-block px-8 py-4 bg-[#FF0000] text-white font-semibold rounded-full hover:bg-[#CC0000] transition-colors"
            >
              Get Early Access
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Getting Paid */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-black mb-4 text-center">
            Income lands in your account. Automatically.
          </h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Rental income from each property is collected, costs are deducted, and the net income
              is distributed to token holders in proportion to their holding — automatically, by
              smart contract. No claiming, no chasing, no manual process.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Distributions are expected to be made quarterly. Every distribution is itemised on
              your dashboard: gross income, costs, net distribution, your share.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Getting Out */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-black mb-4 text-center">
            A designed exit — not a hope for a buyer
          </h2>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Traditional property takes six months to sell. Speculative token platforms let you
              list anytime — into an order book that may have no buyers at any fair price.
              Fractionex does neither.
            </p>

            <div className="bg-red-50 border-l-4 border-[#FF0000] p-6 mb-8">
              <h3 className="font-bold text-black mb-3">Liquidity windows</h3>
              <p className="text-gray-700">
                are scheduled periods (expected to be quarterly) when token holders can sell at the
                property&apos;s current, income-based valuation. Between windows, each property is
                revalued against its actual income performance, so the price you exit at reflects
                what the property genuinely earns — not market mood.
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
              <h3 className="font-bold text-black mb-3">Why windows instead of 24/7 trading?</h3>
              <p className="text-gray-700">
                Because structured liquidity protects both sides. Sellers exit at a fair,
                income-anchored valuation. Remaining holders aren&apos;t hurt by panic-driven price
                swings. It&apos;s the difference between an orderly market and a casino.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6">
              <h3 className="font-bold text-black mb-3">The honest caveat</h3>
              <p className="text-gray-700">
                Liquidity windows are a mechanism, not a guarantee — a sale requires a buyer, and in
                some windows demand may not cover all sellers. Where demand is insufficient, orders
                may be filled pro-rata or carried forward; the exact allocation rules will be set
                out in the final terms for each property. We&apos;d rather tell you that here than let
                you discover it later.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Fees */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            What it costs. All of it.
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="overflow-x-auto mb-8">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#FF0000] text-white">
                    <th className="px-6 py-4 text-left font-semibold">Fee</th>
                    <th className="px-6 py-4 text-left font-semibold">Amount</th>
                    <th className="px-6 py-4 text-left font-semibold">When</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-white transition-colors">
                    <td className="px-6 py-4 text-gray-700">Transaction commission</td>
                    <td className="px-6 py-4 font-semibold text-black">1.5%</td>
                    <td className="px-6 py-4 text-gray-600">On buy and sell</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-white transition-colors">
                    <td className="px-6 py-4 text-gray-700">Property management fee</td>
                    <td className="px-6 py-4 font-semibold text-black">To be confirmed</td>
                    <td className="px-6 py-4 text-gray-600">Deducted before distribution</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-white transition-colors">
                    <td className="px-6 py-4 text-gray-700">Account / platform fee</td>
                    <td className="px-6 py-4 font-semibold text-black">To be confirmed</td>
                    <td className="px-6 py-4 text-gray-600">—</td>
                  </tr>
                  <tr className="hover:bg-white transition-colors">
                    <td className="px-6 py-4 text-gray-700">Deposit / withdrawal</td>
                    <td className="px-6 py-4 font-semibold text-black">To be confirmed</td>
                    <td className="px-6 py-4 text-gray-600">—</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-center text-gray-700 font-semibold">
              No hidden charges, no performance fees buried in the small print. Final fee schedule
              will be published before launch. If a cost exists, it will be on this table.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Risks */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-black mb-4 text-center">What can go wrong</h2>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We&apos;d rather you invest with clear eyes than sign up on a sales page. The material
              risks:
            </p>

            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-600 p-6">
                <h3 className="font-bold text-black mb-2">Property risk</h3>
                <p className="text-gray-700">
                  Values and rental income can fall. Voids, arrears, and unexpected costs reduce
                  distributions — and under our income-based model, falling income means falling
                  valuations.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6">
                <h3 className="font-bold text-black mb-2">Liquidity risk</h3>
                <p className="text-gray-700">
                  Liquidity windows depend on buyer demand. You may not be able to sell your full
                  holding in a given window.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6">
                <h3 className="font-bold text-black mb-2">Execution risk</h3>
                <p className="text-gray-700">
                  Our model depends on our management team actually improving income. If we
                  underperform, so does your investment.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6">
                <h3 className="font-bold text-black mb-2">Regulatory and technology risk</h3>
                <p className="text-gray-700">
                  Digital securities are an evolving space. Smart contracts are audited but no
                  technology is risk-free.
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-700 max-w-2xl mx-auto">
            Full, property-specific risk disclosures are published on every listing.{' '}
            <span className="font-semibold">Capital at risk.</span>
          </p>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">Deeper questions</h2>

          <div className="space-y-3">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className={cn(
                    'w-full px-6 py-4 text-left font-semibold flex items-center justify-between transition-colors',
                    openFAQ === idx
                      ? 'bg-red-50 text-black'
                      : 'text-black hover:bg-gray-50'
                  )}
                >
                  <span>{item.question}</span>
                  <svg
                    className={cn(
                      'w-5 h-5 transition-transform',
                      openFAQ === idx ? 'rotate-180' : ''
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>
                {openFAQ === idx && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="bg-[#FF0000] py-20 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Now you know how it works. Be there when it starts.
          </h2>

          <p className="text-xl text-red-50 mb-8">
            Our first properties are launching soon. Early access members see them first.
          </p>

          <Link
            href="/"
            className="inline-block px-10 py-4 bg-white text-[#FF0000] font-semibold rounded-full hover:bg-gray-100 transition-colors mb-6"
          >
            Get Early Access
          </Link>

          <p className="text-sm text-red-100">Free to join · No obligation</p>

          <div className="mt-8 pt-8 border-t border-red-400">
            <Link href="/legal" className="text-red-50 hover:text-white text-sm underline">
              Read legal disclosures →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
