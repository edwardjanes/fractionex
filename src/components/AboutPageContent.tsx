'use client';

import React from 'react';
import Link from 'next/link';

export function AboutPageContent(): React.ReactElement {
  return (
    <div className="w-full bg-white">
      {/* 1. Hero */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            We're putting property back within reach.
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Fractionex exists because the wealth-building asset of the last century stopped being available to this one. We're a team of platform builders, finance operators, and compliance specialists fixing that — properly, and by the book.
          </p>
        </div>
      </section>

      {/* 2. The Story */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            Why Fractionex exists
          </h2>

          <div className="space-y-8">
            <p className="text-xl text-gray-700 leading-relaxed">
              For generations, property was the default way ordinary people built wealth. Buy a home, hold it, let time do the work. That door has closed. Deposits now run to multiples of annual salary, transactions take months, and an entire generation has concluded — reasonably — that property is for other people.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed">
              Meanwhile, the technology to fix this already exists. Regulated securitisation structures can divide a property into compliant fractional shares. Blockchain can record ownership transparently and move it in seconds instead of months. What's been missing is a platform willing to combine them <span className="font-semibold">properly</span> — with real regulation, real assets, and real accountability, rather than a token and a promise.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed">
              That's what we're building. A platform where £10 buys a genuine share of an income-producing property, where a professional team works to grow that income, and where you can exit at a fair valuation without waiting half a year for a buyer.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed font-semibold text-black">
              Not a workaround. Not a crypto experiment. The way property investing should work now.
            </p>
          </div>
        </div>
      </section>

      {/* 3. What We Believe */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-black mb-16 text-center">
            The principles behind every decision
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Principle 1 */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-4">
                Regulation isn't a hurdle. It's the product.
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We chose a regulated securitisation structure, compliant security tokens, and mandatory investor verification when lighter routes existed. Slower to build, harder to fake, safer to hold. If we'd wanted shortcuts, we'd have shipped in 2024.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-4">
                Transparency is default, not premium.
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Every property lists its full financials, management plan, and risk disclosures before you invest a pound. Every fee we charge is published. Every distribution is itemised. If we can't show it, we don't do it.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-4">
                We only win when you do.
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our model is built on actively growing each property's income — because when the income grows, your token value grows, and our platform grows with it. Aligned incentives aren't a slogan here; they're the business model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Team */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-black mb-4 text-center">
            The people accountable to you
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            Real names, real track records, real LinkedIn profiles. If you're going to trust a platform with your money, you should know exactly who built it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-600">
                [PHOTO]
              </div>
              <h3 className="text-lg font-bold text-black mb-1">
                Edward Janes
              </h3>
              <p className="text-sm text-blue-600 font-semibold mb-3">
                [CONFIRM TITLE]
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                [Expand with 1 specific, verifiable company/outcome]
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 text-sm font-semibold"
              >
                LinkedIn ↗
              </a>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-600">
                [PHOTO]
              </div>
              <h3 className="text-lg font-bold text-black mb-1">
                Thomas van der Voort
              </h3>
              <p className="text-sm text-blue-600 font-semibold mb-3">
                CTO
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Platform engineer specialising in high-frequency transaction systems — the infrastructure class Fractionex's marketplace is built on.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 text-sm font-semibold"
              >
                LinkedIn ↗
              </a>
            </div>

            {/* Team Member 3 - STRONGEST CREDENTIAL */}
            <div className="bg-white rounded-xl p-6 border-2 border-red-600 text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                Compliance Expert
              </div>
              <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-600">
                [PHOTO]
              </div>
              <h3 className="text-lg font-bold text-black mb-1">
                Randy Vanenburg
              </h3>
              <p className="text-sm text-red-600 font-semibold mb-3">
                CIO
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Blockchain and Web3 specialist who led a crypto exchange through full regulatory approval in the Netherlands. Compliance isn't theory to him — he's done it.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 text-sm font-semibold"
              >
                LinkedIn ↗
              </a>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-600">
                [PHOTO]
              </div>
              <h3 className="text-lg font-bold text-black mb-1">
                Saif Habib
              </h3>
              <p className="text-sm text-blue-600 font-semibold mb-3">
                CFO
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Ex-Deloitte consultant, Masters in Economics, and outsourced CFO to multiple funded startups. Keeps the numbers honest.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 text-sm font-semibold"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The Model, Briefly */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-black mb-6">
            What we actually do
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Fractionex turns income-producing properties into regulated digital shares. Each property sits in its own ring-fenced legal structure; investors buy fractional shares from £10; rental income is distributed automatically; and our in-house management team works to grow each property's income — which, under our income-based valuation model, grows the value of every investor's holding.
          </p>
          <Link
            href="/how-it-works"
            className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
          >
            See exactly how it works →
          </Link>
        </div>
      </section>

      {/* 6. Where We Are */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            Where we are right now
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-10 text-center">
            We're pre-launch, and we'd rather tell you that plainly than dress it up. Here's the honest picture:
          </p>

          <div className="space-y-4">
            {/* Completed Milestone 1 */}
            <div className="bg-white rounded-lg p-6 border-2 border-green-500">
              <div className="flex items-start gap-4">
                <span className="text-2xl text-green-600 font-bold mt-1">✔</span>
                <div>
                  <h3 className="font-bold text-black mb-2">Platform built</h3>
                  <p className="text-gray-700">The marketplace is developed and in final preparation</p>
                </div>
              </div>
            </div>

            {/* Completed Milestone 2 */}
            <div className="bg-white rounded-lg p-6 border-2 border-green-500">
              <div className="flex items-start gap-4">
                <span className="text-2xl text-green-600 font-bold mt-1">✔</span>
                <div>
                  <h3 className="font-bold text-black mb-2">Properties queued</h3>
                  <p className="text-gray-700">Our first income-producing properties are lined up for launch [CONFIRM current count]</p>
                </div>
              </div>
            </div>

            {/* Completed Milestone 3 */}
            <div className="bg-white rounded-lg p-6 border-2 border-green-500">
              <div className="flex items-start gap-4">
                <span className="text-2xl text-green-600 font-bold mt-1">✔</span>
                <div>
                  <h3 className="font-bold text-black mb-2">Structure in place</h3>
                  <p className="text-gray-700">The regulated legal architecture that holds every property is established [CONFIRM status before claiming]</p>
                </div>
              </div>
            </div>

            {/* Pending Milestone */}
            <div className="bg-white rounded-lg p-6 border-2 border-gray-300">
              <div className="flex items-start gap-4">
                <span className="text-2xl text-gray-400 font-bold mt-1">◻</span>
                <div>
                  <h3 className="font-bold text-black mb-2">First transaction</h3>
                  <p className="text-gray-700">Our next milestone: the first live property offering, completed end-to-end in public view</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-lg text-gray-700 leading-relaxed mt-12">
            We're deliberately starting narrow: one real transaction, executed properly, before we scale. If you join the early access list, you're not joining a finished giant — you're joining at the moment the record starts.
          </p>
        </div>
      </section>

      {/* 7. Advisors & Partners */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            Backed and advised by
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Advisor 1 */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-lg font-bold text-black mb-2">
                [Advisor Name]
              </h3>
              <p className="text-sm text-blue-600 font-semibold mb-3">
                Advisor
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                [CONFIRM current involvement + add 1-line credential]
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 text-sm font-semibold"
              >
                Learn more ↗
              </a>
            </div>

            {/* Partner 1 */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-lg font-bold text-black mb-2">
                [Deal-flow Partner]
              </h3>
              <p className="text-sm text-blue-600 font-semibold mb-3">
                Property Partner
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                [CONFIRM whether nameable; a named property/BMV sourcing partner adds supply-side credibility]
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 text-sm font-semibold"
              >
                Learn more ↗
              </a>
            </div>

            {/* Legal Counsel */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-lg font-bold text-black mb-2">
                [Legal/Structuring Counsel]
              </h3>
              <p className="text-sm text-blue-600 font-semibold mb-3">
                Legal Partner
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                [If the Luxembourg structuring firm can be named, it belongs here]
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 text-sm font-semibold"
              >
                Learn more ↗
              </a>
            </div>
          </div>

          <p className="text-center text-sm text-gray-600 mt-8">
            Note: Advisors and partners listed are nameable and verified. Empty slots represent opportunities under active discussion.
          </p>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="bg-red-600 py-20 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be early. On the record with us.
          </h2>

          <p className="text-xl text-red-50 mb-8">
            Our first properties launch soon, and the people on the early access list will be first through the door. Join free — and hold us to everything on this page.
          </p>

          <Link
            href="/"
            className="inline-block px-10 py-4 bg-white text-red-600 font-semibold rounded-full hover:bg-gray-100 transition-colors mb-6"
          >
            Get Early Access
          </Link>

          <p className="text-sm text-red-100">
            Free to join · No obligation
          </p>
        </div>
      </section>
    </div>
  );
}
