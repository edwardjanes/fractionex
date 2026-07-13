'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

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
  headline = 'The most trusted crypto trading app',
  subheading = 'Coinbase is the most trusted platform in the UK for buying, selling and trading crypto.',
  description = 'Deposit GBP into your account for free to get started today',
  ctaText = 'Sign up',
  ctaHref = '/signup',
  videoSrc = '/videos/hero-bg.webm',
  posterImage,
}: HeroSectionProps): React.ReactElement {
  return (
    <section
      className={cn(
        'hero-section',
        'relative w-full overflow-hidden bg-white',
        'flex items-center justify-start',
      )}
      role="region"
      aria-label="Hero section with background video"
    >
      {/* Background Video */}
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
        Your browser does not support the video tag.
      </video>

      {/* Content Wrapper */}
      <div className="hero-content relative z-10 w-full">
        <div className="hero-content-inner">
          {/* Headline */}
          <h1 className="hero-headline font-bold text-black font-sans leading-tight tracking-normal">
            {headline}
          </h1>

          {/* Subheading */}
          <p className="hero-subheading text-black font-normal">
            {subheading}
          </p>

          {/* Description */}
          <p className="hero-description text-black font-normal">
            {description}
          </p>

          {/* CTA Button */}
          <div className="flex justify-start">
            <Link href={ctaHref} className="hero-cta-button inline-block no-underline">
              {ctaText}
            </Link>
          </div>
        </div>
      </div>

      {/* Styling */}
      <style jsx>{`
        .hero-section {
          min-height: 100vh;
        }

        @media (max-width: 767px) {
          .hero-section {
            min-height: 600px;
            max-height: 700px;
          }
        }

        .hero-content {
          padding: 80px 40px;
          margin: 0 auto;
          max-width: 1400px;
          width: 100%;
        }

        @media (max-width: 767px) {
          .hero-content {
            padding: 40px 20px;
          }
        }

        .hero-content-inner {
          max-width: 600px;
        }

        .hero-headline {
          font-size: 48px;
          line-height: 1.2;
          margin-bottom: 24px;
        }

        @media (max-width: 767px) {
          .hero-headline {
            font-size: 32px;
          }
        }

        .hero-subheading {
          font-size: 18px;
          line-height: 1.5;
          margin-bottom: 16px;
        }

        .hero-description {
          font-size: 16px;
          line-height: 1.5;
          margin-bottom: 32px;
        }

        .hero-cta-button {
          background-color: #FF0000;
          color: #ffffff;
          padding: 12px 28px;
          border-radius: 24px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
          border: none;
          cursor: pointer;
          transition: background-color 200ms ease;
        }

        .hero-cta-button:hover {
          background-color: #CC0000;
        }

        .hero-cta-button:focus {
          outline: 2px solid #FF0000;
          outline-offset: 2px;
        }

        .hero-cta-button:active {
          background-color: #990000;
        }
      `}</style>
    </section>
  );
}
