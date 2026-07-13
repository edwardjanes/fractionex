'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface CryptoAsset {
  symbol: string;
  name: string;
  icon: string;
}

interface CryptoAssetsGridProps {
  assets?: CryptoAsset[];
  heading?: string;
  description?: string;
}

const DEFAULT_ASSETS: CryptoAsset[] = [
  {
    name: 'Residential',
    symbol: 'RES',
    icon: '/images/coinbase/crypto-bitcoin.png',
  },
  {
    name: 'Commercial',
    symbol: 'COM',
    icon: '/images/coinbase/crypto-ethereum.png',
  },
  {
    name: 'Off Plan',
    symbol: 'OFF',
    icon: '/images/coinbase/crypto-tether.png',
  },
  {
    name: 'Distressed',
    symbol: 'DIS',
    icon: '/images/coinbase/crypto-bnb.png',
  },
  {
    name: 'Premium',
    symbol: 'PREM',
    icon: '/images/coinbase/crypto-usdc.png',
  },
  {
    name: 'Resale',
    symbol: 'RSL',
    icon: '/images/coinbase/crypto-xrp.png',
  },
];

export function CryptoAssetsGrid({
  assets = DEFAULT_ASSETS,
  heading = 'Explore our property types',
  description = 'Invest in diverse real estate portfolios across residential, commercial, and alternative property types',
}: CryptoAssetsGridProps): React.ReactElement {
  return (
    <section
      className={cn(
        'crypto-assets-grid',
        'w-full bg-white',
        'flex flex-col items-center',
      )}
      aria-label="Cryptocurrency assets grid"
    >
      {/* Heading */}
      <h2 className="crypto-grid-heading font-bold text-black">
        {heading}
      </h2>

      {/* Description */}
      <p className="crypto-grid-description text-gray-600">
        {description}
      </p>

      {/* Grid Container */}
      <div className="crypto-grid-container">
        {assets.map((asset) => (
          <div
            key={asset.symbol}
            className="crypto-card"
            role="article"
            aria-label={`${asset.name} (${asset.symbol})`}
          >
            {/* Icon Container */}
            <div className="crypto-card-icon-container">
              <Image
                src={asset.icon}
                alt={`${asset.name} icon`}
                width={80}
                height={80}
                className="crypto-card-icon"
              />
            </div>

            {/* Card Title */}
            <h3 className="crypto-card-title">{asset.name}</h3>

            {/* Card Symbol */}
            <p className="crypto-card-symbol">{asset.symbol}</p>
          </div>
        ))}
      </div>

      {/* Styling */}
      <style jsx>{`
        .crypto-assets-grid {
          padding: 60px 40px;
          margin: 0 auto;
          max-width: 1400px;
          width: 100%;
        }

        @media (max-width: 1023px) {
          .crypto-assets-grid {
            padding: 48px 32px;
          }
        }

        @media (max-width: 767px) {
          .crypto-assets-grid {
            padding: 32px 16px;
          }
        }

        .crypto-grid-heading {
          font-size: 32px;
          font-weight: 700;
          color: #000000;
          margin-bottom: 16px;
          text-align: center;
          line-height: 1.2;
        }

        @media (max-width: 767px) {
          .crypto-grid-heading {
            font-size: 28px;
          }
        }

        .crypto-grid-description {
          font-size: 16px;
          color: #666666;
          margin-bottom: 48px;
          margin-left: auto;
          margin-right: auto;
          max-width: 600px;
          text-align: center;
          line-height: 1.5;
        }

        @media (max-width: 767px) {
          .crypto-grid-description {
            font-size: 14px;
            margin-bottom: 32px;
          }
        }

        .crypto-grid-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (max-width: 1023px) {
          .crypto-grid-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 767px) {
          .crypto-grid-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }

        .crypto-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 24px 16px;
          background-color: #ffffff;
          border: 1px solid #e5e5e5;
          border-radius: 12px;
          cursor: pointer;
          transition: all 200ms ease;
          aspect-ratio: 1 / 1;
        }

        .crypto-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transform: translateY(-4px);
          border-color: #FF0000;
        }

        .crypto-card-icon-container {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .crypto-card-icon {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .crypto-card-title {
          font-size: 16px;
          font-weight: 600;
          color: #000000;
          margin-bottom: 8px;
          margin-top: 0;
          text-align: center;
        }

        @media (max-width: 767px) {
          .crypto-card-title {
            font-size: 14px;
          }
        }

        .crypto-card-symbol {
          font-size: 12px;
          color: #999999;
          text-transform: uppercase;
          margin: 0;
          text-align: center;
        }

        @media (max-width: 767px) {
          .crypto-card-symbol {
            font-size: 11px;
          }
        }
      `}</style>
    </section>
  );
}
