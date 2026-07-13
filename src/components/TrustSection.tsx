import React from 'react';
import { IconWorldwide, IconSafe, IconSupport } from '@/components/icons';
import { cn } from '@/lib/utils';

interface TrustBadge {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TrustSectionProps {
  badges?: TrustBadge[];
  citation?: string;
}

export function TrustSection({
  badges = [
    {
      icon: <IconSafe className="w-[150px] h-[150px] md:w-[120px] md:h-[120px] sm:w-[100px] sm:h-[100px]" />,
      title: 'Fully Regulated',
      description: 'Licensed and regulated for your protection',
    },
    {
      icon: <IconWorldwide className="w-[150px] h-[150px] md:w-[120px] md:h-[120px] sm:w-[100px] sm:h-[100px]" />,
      title: 'Easy to Trade',
      description: 'Liquid market with seamless trading',
    },
    {
      icon: <IconSupport className="w-[150px] h-[150px] md:w-[120px] md:h-[120px] sm:w-[100px] sm:h-[100px]" />,
      title: 'Transparent',
      description: 'Clear fees and real-time pricing',
    },
  ],
  citation = 'Fractionex - The future of real estate investing',
}: TrustSectionProps) {
  return (
    <section className={cn(
      'w-full flex flex-col items-center justify-center',
      'bg-white',
      'py-[60px] px-10 md:py-12 md:px-8 sm:py-8 sm:px-4',
      'text-center',
      'mx-auto max-w-[1400px]'
    )}>
      <div className="w-full max-w-4xl mx-auto">
        <h2 className={cn(
          'text-4xl font-bold',
          'text-black',
          'mb-6 md:mb-6 sm:mb-6',
          'leading-tight'
        )}>
          Why choose Fractionex
        </h2>

        <p className={cn(
          'text-lg md:text-base sm:text-sm',
          'text-gray-600',
          'leading-relaxed',
          'mb-12 md:mb-12 sm:mb-8',
          'max-w-2xl mx-auto'
        )}>
          Invest in real estate with confidence. Fractionex makes property investing accessible, transparent, and secure.
        </p>

        <div className={cn(
          'grid grid-cols-3 md:grid-cols-1 sm:grid-cols-1',
          'gap-8 md:gap-6 sm:gap-4',
          'w-full max-w-5xl mx-auto',
          'mb-12'
        )}>
          {badges.map((badge, index) => (
            <div
              key={index}
              className={cn(
                'flex flex-col items-center justify-center',
                'text-center',
                'transition-all duration-200 ease-in-out',
                'hover:shadow-lg hover:scale-105'
              )}
            >
              <div className="mb-4 md:mb-3 sm:mb-3 flex justify-center">
                {badge.icon}
              </div>
              <h3 className={cn(
                'text-base font-semibold',
                'text-black',
                'mb-2'
              )}>
                {badge.title}
              </h3>
              <p className={cn(
                'text-sm',
                'text-gray-500',
                'leading-normal'
              )}>
                {badge.description}
              </p>
            </div>
          ))}
        </div>

        <div className={cn(
          'border-t border-gray-300',
          'pt-6 md:pt-6 sm:pt-6',
          'mt-8'
        )}>
          <p className={cn(
            'text-xs',
            'text-gray-500',
            'uppercase tracking-wide'
          )}>
            {citation}
          </p>
        </div>
      </div>
    </section>
  );
}
