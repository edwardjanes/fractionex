'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/redesign-preview' },
  { label: 'Properties', href: '/properties' },
  { label: 'How it Works', href: '/how-it-works' },
  { label: 'About', href: '/about' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Insights', href: '/insights' },
];

export function RedesignHeader(): React.ReactElement {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-white transition-shadow duration-200',
        isScrolled ? 'shadow-sm border-b border-gray-200' : 'border-b border-transparent'
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/redesign-preview" aria-label="Fractionex" className="flex shrink-0 items-center">
          <Image
            src="/images/fractionex-logo.png"
            alt="Fractionex"
            width={168}
            height={42}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-black transition-colors hover:text-[var(--brand-red)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden items-center gap-4 md:flex">
          <Link href="/login" className="text-sm font-medium text-black hover:text-[var(--brand-red)]">
            Sign in
          </Link>
          <Link
            href="/about"
            className="rounded-full bg-[var(--brand-red)] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-red-hover)]"
          >
            Our approach
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-black md:hidden"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((v) => !v)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-black hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3 border-t border-gray-200 pt-4">
            <Link
              href="/login"
              className="text-sm font-medium text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign in
            </Link>
            <Link
              href="/about"
              className="w-full rounded-full bg-[var(--brand-red)] py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-red-hover)]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our approach
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
