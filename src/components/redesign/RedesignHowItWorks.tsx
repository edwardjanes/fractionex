import React from 'react';
import Link from 'next/link';

interface Step {
  number: number;
  title: string;
  description: string;
}

const STEPS: Step[] = [
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

export function RedesignHowItWorks(): React.ReactElement {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--brand-red)]">
            How it works
          </p>
          <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            From sign-up to shareholder in four steps
          </h2>
          <p className="mt-4 text-lg text-gray-600">The investor journey, simplified.</p>
        </div>

        <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((step) => (
            <div key={step.number} className="relative flex flex-col">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-black text-lg font-bold text-white">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-black">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/signup"
            className="inline-block rounded-full bg-[var(--brand-red)] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-red-hover)]"
          >
            Get Early Access
          </Link>
        </div>
      </div>
    </section>
  );
}
