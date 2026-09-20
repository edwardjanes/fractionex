'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  isPlaceholder?: boolean;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Is this the same as selling my property?',
    answer:
      'No. You choose what percentage to tokenise — most owners start at 10–20% — and you keep majority ownership and control throughout.',
  },
  {
    question: 'Is tokenisation legal in the UAE?',
    answer:
      "FractionEx operates within the UAE's evolving regulatory framework for tokenised assets, and we'll confirm the specific regulatory basis that applies to your property during onboarding.",
    isPlaceholder: true,
  },
  {
    question: 'What happens to my current tenants?',
    answer:
      'Nothing changes for them. Existing leases and rental income continue uninterrupted through the transition.',
  },
  {
    question: 'How much of my property do I have to tokenise?',
    answer:
      "As little as 10–20%. You decide, and you're never required to give up majority ownership.",
  },
  {
    question: 'When can I access cash from my tokenised share?',
    answer:
      'At scheduled trading windows, so you always know in advance when liquidity is available.',
  },
  {
    question: 'What if nobody buys my tokens at a trading window?',
    answer:
      "Liquidity depends on buyer demand at each window, the same as any market. We'll give you a realistic view of expected demand for your property type and location as part of your free audit, so you go in with a clear picture rather than a guarantee we can't make.",
  },
  {
    question: 'What does it cost?',
    answer:
      'A one-off setup fee plus a simple monthly subscription for active management and your dashboard. We confirm your exact numbers during your free audit.',
  },
  {
    question: 'Will my rent or income go down during the transition?',
    answer:
      'No — the handover is designed to be uninterrupted. Your existing income continues throughout.',
  },
  {
    question: 'Is my information safe if I submit the form?',
    answer:
      'Yes. We only use your details to prepare and send your Yield & Valuation Audit — never for cold calls or unrelated marketing.',
  },
];

export function LandlordFAQSection(): React.ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="bg-white rounded-xl border border-gray-100">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-black">{item.question}</span>
                  <span className="text-gray-400 text-xl leading-none">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                    {item.answer}
                    {item.isPlaceholder && (
                      <span className="block mt-2 text-sm text-amber-600">
                        Placeholder — finalise once the DIFC/regulatory position is confirmed; do
                        not publish a specific regulator name until then.
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
