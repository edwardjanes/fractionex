import React from 'react';
import Link from 'next/link';

export function HowItWorksSection(): React.ReactElement {
  const steps = [
    {
      number: 1,
      title: 'Create your account',
      description:
        'Sign up and verify your identity in minutes. Regulated platform, so KYC is quick but real.',
    },
    {
      number: 2,
      title: 'Choose your properties',
      description:
        'Browse vetted, income-producing properties with full financials: purchase price, projected yield, and management plan on every listing.',
    },
    {
      number: 3,
      title: 'Buy your share',
      description:
        'Invest from £10. Your tokens are issued to your wallet and your ownership is recorded on-chain.',
    },
    {
      number: 4,
      title: 'Earn and grow',
      description:
        "Collect your share of rental income, watch valuations update as property income grows, and sell in liquidity windows whenever you're ready.",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-center">
          From sign-up to shareholder in four steps
        </h2>
        <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
          The investor journey, simplified.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                {step.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
          >
            Get Early Access
          </Link>
        </div>
      </div>
    </section>
  );
}
