'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
  isPlaceholder?: boolean;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

const FAQ_SECTIONS: FAQSection[] = [
  {
    title: 'The Basics',
    items: [
      {
        question: 'What is FractionEx?',
        answer:
          'FractionEx is a fractional property exchange. We convert real properties into digital tokens, so you can buy a share of a property from as little as £10, earn your portion of its income automatically, and sell your tokens on our exchange whenever you choose.',
      },
      {
        question: 'What is a property token?',
        answer:
          'A property token is a digital unit representing a fractional ownership share in a specific, real property. Each token is backed by a tangible asset, and your rights — ownership share, income entitlement, sale terms — are written into a smart contract that executes automatically.',
      },
      {
        question: 'Do I actually own part of the property?',
        answer:
          'Yes. Your tokens represent a recorded fractional ownership interest in the property, with your entitlements defined in that property\'s smart contract. This isn\'t exposure to a fund or an IOU — each listing is a specific, identifiable asset.',
      },
      {
        question: 'How is this different from a REIT?',
        answer:
          'With a REIT, you buy shares in a company that owns a portfolio you don\'t choose. With FractionEx, you pick the individual properties you invest in, see the exact asset and contract terms before buying, and hold a direct fractional interest — not shares in a manager.',
      },
      {
        question: 'How is this different from property crowdfunding?',
        answer:
          'Two main ways: entry price and exit. Most crowdfunding platforms require hundreds or thousands to participate and lock your money in until the property is sold — often years. FractionEx starts at £10, and your tokens can be listed on our exchange at any time.',
      },
      {
        question: 'Is this cryptocurrency?',
        answer:
          'No. Tokens use blockchain technology for security and transparency, but they aren\'t speculative coins. Every token is backed by a real, physical property. The blockchain is the record-keeping layer — the asset is bricks and mortar.',
      },
    ],
  },
  {
    title: 'Getting Started',
    items: [
      {
        question: 'Who can invest?',
        answer:
          '[CONFIRM: eligible countries/jurisdictions, minimum age, any investor classification requirements]',
        isPlaceholder: true,
      },
      {
        question: 'What\'s the minimum investment?',
        answer: '£10. That\'s the price of entry to the property market on FractionEx.',
      },
      {
        question: 'How do I sign up?',
        answer:
          'Join the waitlist now for early access. When the platform launches, you\'ll create an account, verify your identity, add funds, and start browsing properties.',
      },
      {
        question: 'Why do I need to verify my identity?',
        answer:
          'Identity verification (KYC) is a legal requirement for investment platforms. It protects you and every other investor by keeping fraud and money laundering off the platform.',
      },
      {
        question: 'Do I need a crypto wallet or any technical knowledge?',
        answer:
          '[CONFIRM: custody model — platform-managed wallet vs. self-custody. This materially changes the answer.]',
        isPlaceholder: true,
      },
      {
        question: 'How do I add money to my account?',
        answer: '[CONFIRM: payment methods — bank transfer, card, currencies accepted.]',
        isPlaceholder: true,
      },
    ],
  },
  {
    title: 'Buying',
    items: [
      {
        question: 'How do I buy tokens?',
        answer:
          'Browse the listed properties, review the asset details and contract terms, choose how much to invest, and confirm your purchase. Your tokens appear in your wallet immediately.',
      },
      {
        question: 'What information do I get about each property?',
        answer:
          'Every listing includes the property details, financials, the income model, and the smart contract terms governing your ownership and returns — before you commit anything.',
      },
      {
        question: 'What are the fees?',
        answer:
          'A 1.5% commission on transactions. No management fees, no hidden charges, no annual account costs.',
      },
      {
        question: 'Can I invest in more than one property?',
        answer:
          'Yes — and we\'d encourage it. Low ticket sizes exist precisely so you can spread your investment across multiple properties rather than concentrating risk in one.',
      },
      {
        question: 'What is an IPTO?',
        answer:
          'An Initial Property Token Offering — the first sale of a newly tokenised property on the platform. IPTOs give you access to new listings, including development opportunities, at launch price before secondary trading begins.',
      },
    ],
  },
  {
    title: 'Earning',
    items: [
      {
        question: 'How do I make money?',
        answer:
          'Two ways. First, income: your share of the property\'s revenues (such as rent) is distributed to you automatically. Second, growth: if the property appreciates, your tokens\' value can rise, and you realise that gain when you sell.',
      },
      {
        question: 'How and when is income paid?',
        answer:
          'Distributions are executed automatically by the property\'s smart contract, according to the schedule set out in that contract. Each listing states its distribution terms upfront.',
      },
      {
        question: 'Do I have to do anything to receive income?',
        answer:
          'No. No invoicing, no chasing agents, no admin. The smart contract distributes your share to your wallet automatically.',
      },
      {
        question: 'Who manages the property?',
        answer:
          'Not you — that\'s the point. Properties are professionally managed, and the management arrangement is disclosed on each listing. You get ownership economics without landlord responsibilities.',
      },
      {
        question: 'What about tax?',
        answer:
          'Returns from property tokens may be taxable depending on where you live and your circumstances. We don\'t provide tax advice — speak to a qualified tax adviser.',
      },
    ],
  },
  {
    title: 'Selling & Liquidity',
    items: [
      {
        question: 'How do I sell my tokens?',
        answer:
          'List them on the FractionEx exchange at your chosen price. When a buyer matches, the trade settles and funds land in your account. No estate agents, no conveyancing, no six-month wait.',
      },
      {
        question: 'How quickly can I sell?',
        answer:
          'You can list your tokens at any time. How fast they sell depends on market demand at your price — like any exchange. What you\'re never subject to is the months-long process and thousands in fees of a traditional property sale.',
      },
      {
        question: 'What if there are no buyers?',
        answer:
          'Liquidity depends on demand, and we\'re honest about that: we can\'t guarantee an instant sale at your asking price. You can adjust your price, hold and continue collecting income, or wait for demand. Unlike traditional property, holding costs you nothing.',
      },
      {
        question: 'Who sets the token price?',
        answer:
          'The market. After the IPTO, tokens trade at prices set by buyers and sellers on the exchange, informed by the property\'s performance and valuation.',
      },
      {
        question: 'Can I sell just part of my holding?',
        answer:
          'Yes. Sell one token or all of them — fractional ownership means fractional exits too.',
      },
    ],
  },
  {
    title: 'Trust, Security & Regulation',
    items: [
      {
        question: 'What backs my tokens?',
        answer:
          'A real, verified property. Every listing on FractionEx corresponds to a tangible asset with its ownership structure and your rights documented in the smart contract.',
      },
      {
        question: 'Is FractionEx regulated?',
        answer:
          '[CONFIRM — HARD BLOCKER: state the actual regulator, licence, or registration. Do not publish aspirational compliance language.]',
        isPlaceholder: true,
      },
      {
        question: 'Who verifies the properties and valuations?',
        answer:
          '[CONFIRM — HARD BLOCKER: name the real audit/valuation firm(s). Cut if unconfirmed.]',
        isPlaceholder: true,
      },
      {
        question: 'What happens to my investment if FractionEx goes out of business?',
        answer:
          '[CONFIRM: the legal structure — whether each property is held in a separate SPV so investor ownership is ring-fenced from FractionEx\'s own balance sheet.]',
        isPlaceholder: true,
      },
      {
        question: 'How secure are the smart contracts?',
        answer:
          'Smart contracts are drafted around each property\'s specific use case, reviewed and approved before being programmed, and every transaction they execute is recorded and auditable.',
      },
      {
        question: 'How is my personal data protected?',
        answer:
          '[CONFIRM: data protection standard/jurisdiction — e.g., UK GDPR — and link to privacy policy at /legal.]',
        isPlaceholder: true,
      },
    ],
  },
  {
    title: 'Risks',
    items: [
      {
        question: 'Can I lose money?',
        answer:
          'Yes. Property values and rental income can fall as well as rise, and past performance doesn\'t guarantee future returns. Your capital is at risk. Diversifying across multiple properties helps spread risk, but no investment is risk-free.',
      },
      {
        question: 'What are the main risks?',
        answer:
          'The same ones as any property investment — falling values, void periods, tenant default — plus market liquidity risk: you may not find a buyer at your preferred price immediately. Every listing discloses its specific risk factors.',
      },
      {
        question: 'Is my money protected by a compensation scheme?',
        answer:
          '[CONFIRM: FSCS or equivalent applicability — almost certainly "no" for tokenised property, in which case say so clearly.]',
        isPlaceholder: true,
      },
    ],
  },
  {
    title: 'For Property Owners & Developers',
    items: [
      {
        question: 'I own a property — can I tokenise it?',
        answer:
          'Yes. Our Tokenisation as a Service (TaaS) handles the full process: asset evaluation, legal structuring, token creation, and listing on the platform, promoted to our investor community. Get in touch via our contact page.',
      },
      {
        question: 'I\'m a developer — can I raise capital through FractionEx?',
        answer:
          'Yes. An IPTO lets you raise capital by offering tokenised ownership in your property or development directly to our investor base. Contact us to discuss your project.',
      },
    ],
  },
];

export function FAQAccordion(): React.ReactElement {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpen = new Set(openItems);
    if (newOpen.has(id)) {
      newOpen.delete(id);
    } else {
      newOpen.add(id);
    }
    setOpenItems(newOpen);
  };

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Everything you need to know about fractional property investing with FractionEx.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-12">
          {FAQ_SECTIONS.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h2 className="text-2xl font-bold text-black mb-6">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.items.map((item, itemIdx) => {
                  const itemId = `${sectionIdx}-${itemIdx}`;
                  const isOpen = openItems.has(itemId);

                  return (
                    <div
                      key={itemId}
                      className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors"
                    >
                      {/* Question Button */}
                      <button
                        onClick={() => toggleItem(itemId)}
                        className={cn(
                          'w-full px-6 py-4 text-left font-semibold flex items-center justify-between transition-colors',
                          isOpen
                            ? 'bg-blue-50 text-blue-900'
                            : 'bg-white text-black hover:bg-gray-50'
                        )}
                      >
                        <span className="flex-1">{item.question}</span>
                        <span
                          className={cn(
                            'ml-4 flex-shrink-0 transition-transform',
                            isOpen ? 'rotate-180' : ''
                          )}
                        >
                          <svg
                            className="w-5 h-5"
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
                        </span>
                      </button>

                      {/* Answer */}
                      {isOpen && (
                        <div
                          className={cn(
                            'px-6 py-4 border-t',
                            item.isPlaceholder
                              ? 'bg-yellow-50 border-yellow-200'
                              : 'bg-gray-50 border-gray-200'
                          )}
                        >
                          {item.isPlaceholder && (
                            <div className="mb-3 inline-block px-3 py-1 bg-yellow-200 text-yellow-900 text-xs font-semibold rounded-full">
                              ⚠ To be confirmed
                            </div>
                          )}
                          <p
                            className={cn(
                              'leading-relaxed',
                              item.isPlaceholder
                                ? 'text-yellow-900 font-medium'
                                : 'text-gray-700'
                            )}
                          >
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center bg-blue-50 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-black mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-8">
            Get in touch with our team or join the waitlist for early access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors inline-block text-center"
            >
              Contact Us
            </Link>
            <Link
              href="/"
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full border-2 border-blue-600 hover:bg-blue-50 transition-colors inline-block text-center"
            >
              Get Early Access
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
