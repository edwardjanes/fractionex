import React from 'react';

export function LandlordProblemSection(): React.ReactElement {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
          You manage a property. But do you actually know if it&apos;s performing?
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed mb-10">
          Most landlords in the UAE are running their properties on instinct — a spreadsheet, a
          WhatsApp thread with an agent, a rent review once a year if that. Which means most of
          these questions go unanswered:
        </p>
        <ul className="text-left max-w-xl mx-auto space-y-4 mb-10">
          <li className="text-lg text-gray-800">
            — Is your rent actually at market rate, or below it?
          </li>
          <li className="text-lg text-gray-800">
            — What&apos;s your true net yield, after every cost — not just the headline rent?
          </li>
          <li className="text-lg text-gray-800">
            — If you needed cash tomorrow, is your only option really to sell the whole thing?
          </li>
        </ul>
        <p className="text-xl text-gray-700 leading-relaxed">
          If you can&apos;t answer all three with confidence, your property probably isn&apos;t
          working as hard as it could be.
        </p>
      </div>
    </section>
  );
}

export function LandlordOfferSection(): React.ReactElement {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
          Unlock the cash tied up in your property. Keep the upside. Do none of the admin.
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed mb-10">
          FractionEx tokenises a share of your property — as little as 10–20% — turning it into a
          liquid, tradeable asset. You get access to cash without a full sale. We take over the
          day-to-day work of actively managing it for a higher yield. You keep majority ownership
          throughout.
        </p>
        <a
          href="#audit-form"
          className="inline-block px-10 py-4 bg-red-600 text-white font-semibold text-lg rounded-full hover:bg-red-700 transition-colors"
        >
          Get My Free Yield Report
        </a>
      </div>
    </section>
  );
}

export function LandlordHowItWorksSection(): React.ReactElement {
  const steps = [
    {
      number: 1,
      title: 'Get your free Yield & Valuation Audit',
      description:
        'We benchmark your property’s current rent and yield against the local market — no commitment, no cost.',
    },
    {
      number: 2,
      title: 'Choose how much to tokenise',
      description:
        'You decide the percentage — most owners start at 10–20% — and keep majority ownership and decision rights throughout.',
    },
    {
      number: 3,
      title: 'We manage the legal and technical setup',
      description:
        'A dedicated specialist handles the paperwork, compliance and technical steps, start to finish.',
    },
    {
      number: 4,
      title: 'Your property goes live — and starts working harder',
      description:
        'Your dashboard goes live, our active management team takes over day-to-day optimisation, and you can access liquidity at scheduled trading windows.',
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-center">
          Four steps. Live in weeks, not months.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-lg font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-black mb-3">{step.title}</h3>
              <p className="text-gray-700 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
