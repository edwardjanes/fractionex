'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeroSectionProps {
  headline?: string;
  subheading?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function HeroSection({
  headline = 'The most trusted way to own real estate',
  subheading = 'Fractionex is the most trusted platform for fractional real estate investing through tokenisation.',
  description = 'Fractionex lets you buy, hold, and trade fractional shares of real property — fully regulated, fully transparent, and fully yours.',
  ctaText = 'Start Investing',
  ctaHref = '/signup',
}: HeroSectionProps): React.ReactElement {
  return (
    <section className="bg-white">
      <div
        className="mx-auto"
        style={{
          maxWidth: '1600px',
          paddingLeft: '32px',
          paddingRight: '32px',
          paddingTop: '48px',
          paddingBottom: '64px',
        }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          style={{ minHeight: 'calc(900px - 69px - 128px)' }}
        >
          <div className="text-center lg:text-left order-1 max-w-[640px] mx-auto lg:mx-0">
            <h1
              className="font-bold tracking-tight text-black mb-6"
              style={{
                fontSize: 'clamp(40px, 5vw, 80px)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
              }}
            >
              {headline}
            </h1>

            <p
              className="text-gray-600 leading-relaxed mb-4"
              style={{ fontSize: '18px', lineHeight: 1.55 }}
            >
              {subheading}
            </p>

            <p
              className="text-gray-500 mb-10"
              style={{ fontSize: '16px', lineHeight: 1.5 }}
            >
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center text-white font-semibold rounded-full transition-colors"
                style={{
                  fontSize: '16px',
                  padding: '14px 32px',
                  backgroundColor: '#FF0000',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#CC0000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FF0000';
                }}
              >
                {ctaText}
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center font-semibold text-gray-800 rounded-full border border-gray-300 hover:border-gray-400 transition-colors"
                style={{ fontSize: '16px', padding: '14px 32px' }}
              >
                How it works
              </Link>
            </div>
          </div>

          {/* Branded visual panel — no Coinbase video */}
          <div className="order-2 flex justify-center lg:justify-end">
            <div
              className="relative flex flex-col items-center justify-center rounded-[2.5rem] overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #0a0a0f 0%, #1a1a24 50%, #0a0a0f 100%)',
                width: '100%',
                maxWidth: '480px',
                aspectRatio: '1 / 1.05',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* Subtle red accent glow */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background:
                    'radial-gradient(ellipse at 70% 20%, #FF0000 0%, transparent 55%)',
                }}
              />

              <div className="relative z-10 flex flex-col items-center px-10 text-center">
                <Image
                  src="/images/logo-white.png"
                  alt="Fractionex"
                  width={160}
                  height={40}
                  className="mb-8 opacity-90"
                  priority
                />

                <p className="text-white/70 text-sm font-medium tracking-wide mb-6">
                  Fractional ownership of real UK property
                </p>

                <div className="grid grid-cols-2 gap-6 w-full max-w-[280px]">
                  <div className="text-left">
                    <p className="text-2xl font-bold text-white">£10</p>
                    <p className="text-xs text-white/50 mt-1">Minimum invest</p>
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-white">ERC-3643</p>
                    <p className="text-xs text-white/50 mt-1">Regulated tokens</p>
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-white">7%+</p>
                    <p className="text-xs text-white/50 mt-1">Target yields</p>
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-white">UK</p>
                    <p className="text-xs text-white/50 mt-1">Real assets</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
