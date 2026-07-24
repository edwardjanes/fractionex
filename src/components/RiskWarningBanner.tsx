'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export function RiskWarningBanner(): React.ReactNode {
  const handleLearnMoreClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
  };

  return (
    <div
      className={cn(
        'sticky z-40 w-full',
        'bg-secondary border-b border-border',
        'flex items-center justify-center',
        'py-3 px-6',
      )}
      style={{ top: '69px' }}
    >
      <p
        className={cn(
          'text-xs',
          'text-foreground font-normal',
          'leading-relaxed text-center',
          'max-w-full',
          'm-0',
        )}
      >
        Don&apos;t invest unless you&apos;re prepared to lose all the money you invest. This is a
        high-risk investment and you should not expect to be protected if something goes wrong.{' '}
        <a
          href="#/about/risks"
          onClick={handleLearnMoreClick}
          className={cn(
            'text-primary underline',
            'transition-colors duration-200 ease-in-out',
            'hover:text-[#CC0000]',
            'focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary',
            'cursor-pointer',
          )}
        >
          Take 2 mins to learn more
        </a>
      </p>
    </div>
  );
}
