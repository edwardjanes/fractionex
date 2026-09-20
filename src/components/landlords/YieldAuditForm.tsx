'use client';

import React, { useState } from 'react';

export function YieldAuditForm(): React.ReactElement {
  const [step, setStep] = useState<1 | 2>(1);
  const [submitted, setSubmitted] = useState(false);

  function handleStepOneSubmit(e: React.FormEvent): void {
    e.preventDefault();
    setStep(2);
  }

  function handleStepTwoSubmit(e: React.FormEvent): void {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto text-center bg-gray-50 rounded-2xl p-10">
        <h3 className="text-2xl font-bold text-black mb-3">Report on its way.</h3>
        <p className="text-gray-700">
          We&apos;ll email your Yield &amp; Valuation Audit shortly. No spam, no cold calls.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto bg-gray-50 rounded-2xl p-8 md:p-10">
      {step === 1 ? (
        <form onSubmit={handleStepOneSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-black mb-1">
              Property location
            </label>
            <input
              id="location"
              type="text"
              required
              placeholder="e.g. Dubai Marina, Dubai"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <button
            type="submit"
            className="mt-2 inline-block px-8 py-4 bg-red-600 text-white font-semibold text-lg rounded-full hover:bg-red-700 transition-colors"
          >
            Send Me My Free Report
          </button>
          <p className="text-sm text-gray-500 text-center mt-1">
            We&apos;ll only use this to send your report — no spam, no cold calls.
          </p>
        </form>
      ) : (
        <form onSubmit={handleStepTwoSubmit} className="flex flex-col gap-4">
          <p className="text-sm text-gray-600 mb-1">
            Almost there — a couple of optional details help us make your report more accurate.
          </p>
          <div>
            <label htmlFor="propertyType" className="block text-sm font-medium text-black mb-1">
              Property type
            </label>
            <select
              id="propertyType"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              <option>Apartment</option>
              <option>Villa</option>
              <option>Townhouse</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="rent" className="block text-sm font-medium text-black mb-1">
              Current monthly rent (optional)
            </label>
            <input
              id="rent"
              type="text"
              placeholder="AED"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-black mb-1">
              Phone (optional)
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+971"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <button
            type="submit"
            className="mt-2 inline-block px-8 py-4 bg-red-600 text-white font-semibold text-lg rounded-full hover:bg-red-700 transition-colors"
          >
            Send Me My Free Report
          </button>
        </form>
      )}
    </div>
  );
}
