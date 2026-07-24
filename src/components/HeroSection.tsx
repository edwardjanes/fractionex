'use client';

import React from 'react';
import Link from 'next/link';

interface HeroSectionProps {
  headline?: string;
  subheading?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  videoSrc?: string;
  posterImage?: string;
}

export function HeroSection({
  headline = 'The most trusted way to own real estate',
  subheading = 'Fractionex is the most trusted platform for fractional real estate investing through tokenisation.',
  description = 'Fractionex lets you buy, hold, and trade fractional shares of real property — fully regulated, fully transparent, and fully yours.',
  ctaText = 'Start Investing',
  ctaHref = '/signup',
  videoSrc = '/images/coinbase/hero-video.webm',
  posterImage,
}: HeroSectionProps): React.ReactElement {
  return (
    <section className="bg-white">
      {/* Spacer for fixed nav (69px) */}
      <div style={{ height: '69px' }} />

      <div
        className="mx-auto"
        style={{
          maxWidth: '1600px',
          paddingLeft: '32px',
          paddingRight: '32px',
          paddingTop: '64px',
          paddingBottom: '64px',
        }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          style={{ minHeight: 'calc(900px - 69px - 128px)' }}
        >
          {/* Left: copy — existing content preserved */}
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

          {/* Right: visual panel (video if available, else solid brand panel) */}
          <div className="order-2 flex justify-center lg:justify-end">
            <div
              className="relative flex items-center justify-center rounded-[2.5rem] overflow-hidden"
              style={{
                backgroundColor: '#0a0a0f',
                width: '100%',
                maxWidth: '480px',
                aspectRatio: '1 / 1.05',
              }}
            >
              {videoSrc ? (
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={posterImage}
                  aria-hidden="true"
                >
                  <source src={videoSrc} type="video/webm" />
                </video>
              ) : (
                <div className="relative z-10 text-center px-8">
                  <p className="text-white/40 text-sm">Property visual</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
