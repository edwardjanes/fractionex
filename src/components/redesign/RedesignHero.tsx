'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Building2, TrendingUp, Search } from 'lucide-react';

export function RedesignHero(): React.ReactElement {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8 lg:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--brand-red)]">
            Tokenised UK real estate
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
            The most trusted way to own real estate
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-700 sm:text-xl">
            Fractionex is the most trusted platform for fractional real estate investing through
            tokenisation.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
            Fractionex lets you buy, hold, and trade fractional shares of real property — fully
            regulated, fully transparent, and fully yours.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full bg-[var(--brand-red)] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[var(--brand-red-hover)]"
            >
              Start Investing
            </Link>
          </div>
        </div>

        {/* Quick-filter / search bar — presentational only */}
        <div className="mx-auto mt-14 max-w-4xl rounded-2xl border border-gray-200 bg-white p-3 shadow-lg shadow-gray-200/50 sm:p-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:items-stretch sm:gap-0 sm:divide-x sm:divide-gray-200">
            <label className="flex flex-1 items-center gap-3 px-2 py-2 sm:px-5">
              <MapPin className="h-5 w-5 shrink-0 text-gray-400" aria-hidden="true" />
              <span className="flex w-full flex-col">
                <span className="text-xs font-medium text-gray-500">Location</span>
                <select
                  className="w-full appearance-none bg-transparent text-sm font-semibold text-black outline-none"
                  defaultValue="Any location"
                >
                  <option>Any location</option>
                  <option>London</option>
                  <option>Manchester</option>
                  <option>Birmingham</option>
                  <option>Edinburgh</option>
                </select>
              </span>
            </label>

            <label className="flex flex-1 items-center gap-3 px-2 py-2 sm:px-5">
              <Building2 className="h-5 w-5 shrink-0 text-gray-400" aria-hidden="true" />
              <span className="flex w-full flex-col">
                <span className="text-xs font-medium text-gray-500">Investment type</span>
                <select
                  className="w-full appearance-none bg-transparent text-sm font-semibold text-black outline-none"
                  defaultValue="Any type"
                >
                  <option>Any type</option>
                  <option>Residential</option>
                  <option>Office</option>
                  <option>Retail</option>
                  <option>Hotel & Leisure</option>
                </select>
              </span>
            </label>

            <label className="flex flex-1 items-center gap-3 px-2 py-2 sm:px-5">
              <TrendingUp className="h-5 w-5 shrink-0 text-gray-400" aria-hidden="true" />
              <span className="flex w-full flex-col">
                <span className="text-xs font-medium text-gray-500">Min. return</span>
                <select
                  className="w-full appearance-none bg-transparent text-sm font-semibold text-black outline-none"
                  defaultValue="Any return"
                >
                  <option>Any return</option>
                  <option>6%+</option>
                  <option>7%+</option>
                  <option>8%+</option>
                </select>
              </span>
            </label>
          </div>

          <button
            type="button"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--brand-red)] py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-red-hover)] sm:mt-4"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            Search properties
          </button>
        </div>
      </div>
    </section>
  );
}
