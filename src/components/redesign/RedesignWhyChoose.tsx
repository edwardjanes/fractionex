import React from 'react';
import { Unlock, Wallet, Zap, TrendingDown, Clock, Users } from 'lucide-react';

interface Benefit {
  icon: React.ComponentType<{ className?: string }>;
  heading: string;
  copy: string;
}

const BENEFITS: Benefit[] = [
  {
    icon: Unlock,
    heading: 'Start with what you have',
    copy: 'Our aim is a low minimum investment for fractional shares in income-producing property. No deposit, no mortgage, no chain.',
  },
  {
    icon: Wallet,
    heading: 'Earn while you hold',
    copy: 'Rental income, after costs, is intended to be distributed to token holders in proportion to what they own. Income isn’t guaranteed: rents can fall and properties can sit empty.',
  },
  {
    icon: Zap,
    heading: 'Exit on your schedule',
    copy: 'We plan to run structured liquidity windows where holders can offer tokens for sale. A sale still needs a buyer, so we can’t guarantee you’ll be able to sell when you want, or at the price you want.',
  },
  {
    icon: Users,
    heading: 'Diversify, don’t bet it all',
    copy: 'Build a portfolio across multiple properties instead of betting everything on one — the way property investing was always meant to work.',
  },
];

const STATS: { value: string; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { value: '£54k', label: 'Average first-time buyer deposit — 1.6× the average salary', icon: TrendingDown },
  { value: '6 mo', label: 'Average time to sell a property. Money goes in fast, comes out slow', icon: Clock },
];

export function RedesignWhyChoose(): React.ReactElement {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--brand-red)]">
            Why Fractionex
          </p>
          <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Property built every generation&rsquo;s wealth. Except yours.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-700">
            The asset class that made your parents wealthy is locked behind capital, paperwork,
            and time most people don&rsquo;t have. It&rsquo;s not that property stopped working. It&rsquo;s that
            the door closed.
          </p>
        </div>

        {/* Quick stats */}
        <div className="mx-auto mb-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6"
            >
              <stat.icon className="mt-1 h-6 w-6 shrink-0 text-[var(--brand-red)]" aria-hidden="true" />
              <div>
                <p className="text-3xl font-bold text-black">{stat.value}</p>
                <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.heading}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-7"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-red-tint-10)]">
                <benefit.icon className="h-6 w-6 text-[var(--brand-red)]" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-black">{benefit.heading}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{benefit.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
