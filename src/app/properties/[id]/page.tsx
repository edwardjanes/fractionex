import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { RiskWarningBanner } from '@/components/RiskWarningBanner';
import { Footer } from '@/components/Footer';

interface PropertyDetailPageProps {
  params: {
    id: string;
  };
}

// Generate static params for all properties
export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ];
}

// Mock property data - in a real app, this would come from a database
const PROPERTY_DATA: Record<
  string,
  {
    title: string;
    location: string;
    images: string[];
    valuation: string;
    expectedReturn: string;
    sharePrice: string;
    sharesAvailable: number;
    sharesTotal: number;
    occupancyRate: string;
    description: string;
    highlights: string[];
    keyMetrics: {
      label: string;
      value: string;
    }[];
    about: string;
    investmentTerms: {
      label: string;
      value: string;
    }[];
    risks: string[];
  }
> = {
  '1': {
    title: 'Premium Office Tower',
    location: 'London, UK',
    images: [
      '/images/coinbase/feature-1.webp',
      '/images/coinbase/feature-2.webp',
      '/images/coinbase/feature-3.webp',
    ],
    valuation: '£45.2M',
    expectedReturn: '7.5%',
    sharePrice: '£250',
    sharesAvailable: 1200,
    sharesTotal: 18080,
    occupancyRate: '92%',
    description:
      'A prime Grade A office building located in the heart of London\'s financial district, offering state-of-the-art facilities and exceptional investment returns.',
    highlights: [
      'Grade A office space',
      'London West End location',
      'Long-term institutional tenant',
      'Recently refurbished',
    ],
    keyMetrics: [
      { label: 'Total Valuation', value: '£45.2M' },
      { label: 'Annual Yield', value: '7.5%' },
      { label: 'Share Price', value: '£250' },
      { label: 'Occupancy Rate', value: '92%' },
      { label: 'Property Type', value: 'Office' },
      { label: 'Year Built', value: '1998' },
    ],
    about:
      'This premium office tower represents a significant investment opportunity in one of London\'s most sought-after commercial real estate markets. The property features modern amenities, flexible floor plates, and a diverse tenant base including multinational corporations and professional services firms.',
    investmentTerms: [
      { label: 'Minimum Investment', value: '£250 (1 share)' },
      { label: 'Investment Horizon', value: '5-10 years' },
      { label: 'Dividend Frequency', value: 'Quarterly' },
      { label: 'Exit Strategy', value: 'Planned sale or REIT conversion' },
    ],
    risks: [
      'Market risk: Commercial real estate values may fluctuate',
      'Tenant risk: Changes in tenant occupancy could impact returns',
      'Interest rate risk: Rising rates may affect property valuations',
      'Liquidity risk: Shares may not be immediately tradable',
    ],
  },
  '2': {
    title: 'Residential Complex',
    location: 'Manchester, UK',
    images: [
      '/images/coinbase/feature-2.webp',
      '/images/coinbase/feature-3.webp',
      '/images/coinbase/feature-1.webp',
    ],
    valuation: '£28.5M',
    expectedReturn: '6.8%',
    sharePrice: '£180',
    sharesAvailable: 1500,
    sharesTotal: 15833,
    occupancyRate: '88%',
    description:
      'Modern residential complex in Manchester city centre with 150+ apartments, offering strong rental income and capital appreciation potential.',
    highlights: [
      'Modern construction',
      'City centre location',
      'Strong rental demand',
      'Student and professional tenant base',
    ],
    keyMetrics: [
      { label: 'Total Valuation', value: '£28.5M' },
      { label: 'Annual Yield', value: '6.8%' },
      { label: 'Share Price', value: '£180' },
      { label: 'Occupancy Rate', value: '88%' },
      { label: 'Number of Units', value: '150+' },
      { label: 'Year Built', value: '2015' },
    ],
    about:
      'A vibrant residential complex strategically positioned in Manchester\'s regenerated city centre. The property combines residential apartments with ground-floor commercial space, creating a mixed-use community hub with excellent rental yields.',
    investmentTerms: [
      { label: 'Minimum Investment', value: '£180 (1 share)' },
      { label: 'Investment Horizon', value: '7-12 years' },
      { label: 'Dividend Frequency', value: 'Quarterly' },
      { label: 'Exit Strategy', value: 'Secondary market or portfolio sale' },
    ],
    risks: [
      'Residential market cyclicality',
      'Student tenant seasonality',
      'Regulatory changes in rental markets',
      'Maintenance and capex requirements',
    ],
  },
  '3': {
    title: 'Retail Shopping Centre',
    location: 'Birmingham, UK',
    images: [
      '/images/coinbase/feature-3.webp',
      '/images/coinbase/feature-1.webp',
      '/images/coinbase/feature-2.webp',
    ],
    valuation: '£52.0M',
    expectedReturn: '8.2%',
    sharePrice: '£320',
    sharesAvailable: 950,
    sharesTotal: 16250,
    occupancyRate: '95%',
    description:
      'Premier retail shopping centre in Birmingham with anchor tenants and premium brand mix, generating strong and stable rental income.',
    highlights: [
      'Prime retail location',
      'Anchor tenant stability',
      'Premium brand mix',
      'High foot traffic',
    ],
    keyMetrics: [
      { label: 'Total Valuation', value: '£52.0M' },
      { label: 'Annual Yield', value: '8.2%' },
      { label: 'Share Price', value: '£320' },
      { label: 'Occupancy Rate', value: '95%' },
      { label: 'Retail Units', value: '85+' },
      { label: 'Year Built', value: '2008' },
    ],
    about:
      'A destination retail centre positioned as a key shopping hub in Birmingham. The property features a carefully curated mix of high-street and premium brands, consistent visitor footfall, and long-term anchor tenant agreements.',
    investmentTerms: [
      { label: 'Minimum Investment', value: '£320 (1 share)' },
      { label: 'Investment Horizon', value: '5-8 years' },
      { label: 'Dividend Frequency', value: 'Quarterly' },
      { label: 'Exit Strategy', value: 'Strategic buyer or refinance' },
    ],
    risks: [
      'Retail sector transformation',
      'E-commerce competition',
      'Anchor tenant concentration',
      'Consumer spending cyclicality',
    ],
  },
  '4': {
    title: 'Luxury Apartments',
    location: 'Edinburgh, UK',
    images: [
      '/images/coinbase/feature-1.webp',
      '/images/coinbase/feature-2.webp',
      '/images/coinbase/feature-3.webp',
    ],
    valuation: '£35.8M',
    expectedReturn: '7.1%',
    sharePrice: '£215',
    sharesAvailable: 1800,
    sharesTotal: 16651,
    occupancyRate: '90%',
    description:
      'Exclusive luxury apartment development in Edinburgh\'s prestigious West End, targeting high-net-worth individuals and corporate housing.',
    highlights: [
      'Luxury finishes',
      'Premium location',
      'Corporate housing demand',
      'Capital growth potential',
    ],
    keyMetrics: [
      { label: 'Total Valuation', value: '£35.8M' },
      { label: 'Annual Yield', value: '7.1%' },
      { label: 'Share Price', value: '£215' },
      { label: 'Occupancy Rate', value: '90%' },
      { label: 'Luxury Units', value: '120+' },
      { label: 'Year Built', value: '2019' },
    ],
    about:
      'An ultra-modern luxury apartment development in one of Edinburgh\'s most desirable neighbourhoods. Featuring penthouses, duplexes, and premium apartments with concierge services and bespoke finishes targeting affluent investors and executives.',
    investmentTerms: [
      { label: 'Minimum Investment', value: '£215 (1 share)' },
      { label: 'Investment Horizon', value: '7-10 years' },
      { label: 'Dividend Frequency', value: 'Quarterly' },
      { label: 'Exit Strategy', value: 'Institutional buyer or conversion' },
    ],
    risks: [
      'Luxury market sensitivity',
      'Regulatory changes',
      'Tenant credit risk',
      'Market downturn exposure',
    ],
  },
  '5': {
    title: 'Business Park',
    location: 'Bristol, UK',
    images: [
      '/images/coinbase/feature-2.webp',
      '/images/coinbase/feature-3.webp',
      '/images/coinbase/feature-1.webp',
    ],
    valuation: '£41.3M',
    expectedReturn: '7.9%',
    sharePrice: '£285',
    sharesAvailable: 1100,
    sharesTotal: 14474,
    occupancyRate: '87%',
    description:
      'Modern business park in Bristol hosting tech companies and professional services firms, benefiting from the city\'s tech hub status.',
    highlights: [
      'Tech hub location',
      'Modern facilities',
      'Blue-chip tenants',
      'Growing demand',
    ],
    keyMetrics: [
      { label: 'Total Valuation', value: '£41.3M' },
      { label: 'Annual Yield', value: '7.9%' },
      { label: 'Share Price', value: '£285' },
      { label: 'Occupancy Rate', value: '87%' },
      { label: 'Office Units', value: '45+' },
      { label: 'Year Built', value: '2010' },
    ],
    about:
      'A contemporary business park ideally positioned in Bristol\'s burgeoning tech corridor. The property attracts innovative companies, scale-ups, and established professional services firms, all benefiting from the city\'s reputation as a tech hub.',
    investmentTerms: [
      { label: 'Minimum Investment', value: '£285 (1 share)' },
      { label: 'Investment Horizon', value: '6-9 years' },
      { label: 'Dividend Frequency', value: 'Quarterly' },
      { label: 'Exit Strategy', value: 'Tech investor or developer' },
    ],
    risks: [
      'Tech sector volatility',
      'Co-working competition',
      'Hybrid work trends',
      'Tenant concentration',
    ],
  },
  '6': {
    title: 'Hotel & Leisure',
    location: 'Liverpool, UK',
    images: [
      '/images/coinbase/feature-3.webp',
      '/images/coinbase/feature-1.webp',
      '/images/coinbase/feature-2.webp',
    ],
    valuation: '£29.7M',
    expectedReturn: '8.5%',
    sharePrice: '£195',
    sharesAvailable: 2000,
    sharesTotal: 15230,
    occupancyRate: '91%',
    description:
      'Premier hotel and leisure destination in Liverpool, positioned to capture both tourism and business travel demand in the thriving city.',
    highlights: [
      'Tourism hotspot',
      'Business travel demand',
      'Premium facilities',
      'Event venue potential',
    ],
    keyMetrics: [
      { label: 'Total Valuation', value: '£29.7M' },
      { label: 'Annual Yield', value: '8.5%' },
      { label: 'Share Price', value: '£195' },
      { label: 'Occupancy Rate', value: '91%' },
      { label: 'Hotel Rooms', value: '250+' },
      { label: 'Year Built', value: '2012' },
    ],
    about:
      'A premium hotel and leisure complex offering 250+ rooms, conference facilities, and leisure amenities. Positioned at the heart of Liverpool\'s cultural and business district, capitalizing on strong tourism growth and business travel.',
    investmentTerms: [
      { label: 'Minimum Investment', value: '£195 (1 share)' },
      { label: 'Investment Horizon', value: '5-8 years' },
      { label: 'Dividend Frequency', value: 'Quarterly' },
      { label: 'Exit Strategy', value: 'Hospitality operator or sale' },
    ],
    risks: [
      'Tourism seasonality',
      'Economic downturn impact',
      'Operational complexity',
      'Travel demand volatility',
    ],
  },
};

export default function PropertyDetailPage({
  params,
}: PropertyDetailPageProps): React.ReactElement {
  const property = PROPERTY_DATA[params.id];

  if (!property) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <RiskWarningBanner />
        <main className="flex flex-col items-center justify-center min-h-[60vh]">
          <h1 className="text-3xl font-bold text-black mb-4">
            Property Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The property you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <Link
            href="/properties"
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
          >
            Back to Properties
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <RiskWarningBanner />

      <main className="flex flex-col">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 py-6 w-full">
          <Link
            href="/properties"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Properties
          </Link>
        </div>

        {/* Hero Section with Images */}
        <div className="w-full bg-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-12">
              {/* Main Image */}
              <div className="lg:col-span-2">
                <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gray-200">
                  <Image
                    src={property.images[0]}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="flex lg:flex-col gap-4">
                {property.images.slice(1).map((image, idx) => (
                  <div
                    key={idx}
                    className="relative h-24 lg:h-32 rounded-lg overflow-hidden bg-gray-200 flex-1"
                  >
                    <Image
                      src={image}
                      alt={`${property.title} ${idx + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                  {property.title}
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  📍 {property.location}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-black mb-6">
                  Key Highlights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <p className="text-gray-700">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Metrics */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-black mb-6">
                  Key Metrics
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {property.keyMetrics.map((metric, idx) => (
                    <div key={idx} className="bg-gray-50 p-6 rounded-xl">
                      <p className="text-sm text-gray-600 font-medium mb-2">
                        {metric.label}
                      </p>
                      <p className="text-2xl font-bold text-black">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* About */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-black mb-6">
                  About This Property
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {property.about}
                </p>
              </div>

              {/* Investment Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-black mb-6">
                  Investment Terms
                </h2>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {property.investmentTerms.map((term, idx) => (
                      <div key={idx}>
                        <p className="text-sm text-gray-600 font-medium mb-2">
                          {term.label}
                        </p>
                        <p className="text-lg font-bold text-black">
                          {term.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Risk Disclosure */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-black mb-6">
                  Investment Risks
                </h2>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <ul className="space-y-3">
                    {property.risks.map((risk, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-yellow-600 font-bold">⚠</span>
                        <span className="text-gray-700">{risk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar - Investment Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-gray-50 rounded-2xl p-8 border border-gray-200">
                {/* Price Section */}
                <div className="mb-8">
                  <p className="text-sm text-gray-600 font-medium mb-2">
                    Property Valuation
                  </p>
                  <p className="text-3xl font-bold text-black mb-6">
                    {property.valuation}
                  </p>

                  <div className="space-y-4 mb-6 pb-6 border-b border-gray-300">
                    <div>
                      <p className="text-xs text-gray-600 font-medium mb-1">
                        Share Price
                      </p>
                      <p className="text-2xl font-bold text-black">
                        {property.sharePrice}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-medium mb-1">
                        Expected Annual Return
                      </p>
                      <p className="text-2xl font-bold text-green-600">
                        {property.expectedReturn}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shares Available</span>
                      <span className="font-bold text-black">
                        {property.sharesAvailable.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Shares</span>
                      <span className="font-bold text-black">
                        {property.sharesTotal.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Occupancy</span>
                      <span className="font-bold text-black">
                        {property.occupancyRate}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Investment Progress */}
                <div className="mb-8">
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-gray-600">Funding Progress</span>
                    <span className="font-bold text-black">
                      {Math.round(
                        ((property.sharesTotal - property.sharesAvailable) /
                          property.sharesTotal) *
                          100
                      )}
                      %
                    </span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{
                        width: `${((property.sharesTotal - property.sharesAvailable) / property.sharesTotal) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full px-6 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors mb-4">
                  Invest Now
                </button>

                {/* Secondary CTA */}
                <button className="w-full px-6 py-3 bg-gray-200 text-black font-semibold rounded-full hover:bg-gray-300 transition-colors mb-6">
                  Learn More
                </button>

                {/* Disclaimer */}
                <p className="text-xs text-gray-600 text-center">
                  Past performance is not indicative of future results. Please
                  review our risk disclosure before investing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
