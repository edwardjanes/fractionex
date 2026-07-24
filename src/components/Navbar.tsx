'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface DropdownMenuItemType {
  title: string;
  description?: string;
  href?: string;
  image?: string;
}

interface DropdownMenuType {
  items: DropdownMenuItemType[];
  featured?: boolean;
  image?: string;
}

interface MenuItemConfig {
  label: string;
  href?: string;
  dropdown?: DropdownMenuType;
}

interface NavbarProps {
  logo?: {
    href: string;
    ariaLabel: string;
  };
  menuItems?: MenuItemConfig[];
  ctaButton?: {
    text: string;
    href: string;
  };
}

const DEFAULT_MENU_ITEMS: MenuItemConfig[] = [
  { label: 'Home', href: '/' },
  { label: 'How it Works', href: '/how-it-works' },
  { label: 'Properties', href: '/properties' },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
  { label: 'FAQs', href: '/faqs' },
];

export function Navbar(props: NavbarProps): React.ReactElement {
  const {
    logo = { href: '/', ariaLabel: 'Fractionex' },
    menuItems = DEFAULT_MENU_ITEMS,
    ctaButton = { text: 'Start Investing', href: '/signup' },
  } = props;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownEnter = useCallback((label: string) => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setActiveDropdown(label);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    dropdownTimerRef.current = setTimeout(() => setActiveDropdown(null), 300);
  }, []);

  const handleThemeToggle = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          isScrolled ? 'border-b border-gray-200 shadow-sm' : 'border-b border-transparent'
        )}
        style={{
          backgroundColor: '#FFFFFF',
          height: '69px',
          transition: 'box-shadow 200ms ease, border-color 200ms ease',
        }}
      >
        <div
          className="flex items-center justify-between h-full mx-auto"
          style={{
            maxWidth: '1600px',
            paddingLeft: '32px',
            paddingRight: '32px',
          }}
        >
          <Link
            href={logo.href}
            className="flex items-center flex-shrink-0"
            aria-label={logo.ariaLabel}
          >
            <Image
              src="/images/fractionex-logo.png"
              alt="Fractionex"
              width={200}
              height={50}
              priority
              className="h-[50px] w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center flex-1 justify-center" style={{ gap: '28px' }}>
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && handleDropdownEnter(item.label)}
                onMouseLeave={() => item.dropdown && handleDropdownLeave()}
              >
                {item.dropdown ? (
                  <button
                    className={cn(
                      'transition-colors',
                      activeDropdown === item.label
                        ? 'text-[#FF0000]'
                        : 'text-gray-900 hover:text-[#FF0000]'
                    )}
                    style={{ fontSize: '16px', fontWeight: 600, lineHeight: 1.25 }}
                    aria-expanded={activeDropdown === item.label}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className="text-gray-900 hover:text-[#FF0000] transition-colors"
                    style={{ fontSize: '16px', fontWeight: 600, lineHeight: 1.25 }}
                  >
                    {item.label}
                  </Link>
                )}

                {item.dropdown && activeDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-3 w-56 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50"
                    style={{ animation: 'slideDown 200ms ease-out forwards' }}
                  >
                    {item.dropdown.items.map((dropdownItem, idx) => (
                      <Link
                        key={idx}
                        href={dropdownItem.href || '#'}
                        className="block px-4 py-2.5 text-gray-800 hover:bg-gray-50 hover:text-[#FF0000] transition-colors"
                        style={{ fontSize: '15px' }}
                      >
                        {dropdownItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center" style={{ gap: '12px' }}>
            <button
              className="hidden sm:flex items-center justify-center text-gray-700 hover:text-[#FF0000] transition-colors rounded-full hover:bg-gray-50"
              style={{ width: '44px', height: '44px' }}
              aria-label="Search"
              type="button"
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <button
              className="hidden sm:flex items-center justify-center text-gray-700 hover:text-[#FF0000] transition-colors rounded-full hover:bg-gray-50"
              style={{ width: '44px', height: '44px' }}
              aria-label="Toggle theme"
              type="button"
              onClick={handleThemeToggle}
            >
              {isDark ? (
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <Link
              href="/login"
              className="hidden sm:inline-flex items-center justify-center text-gray-900 rounded-full hover:bg-[#e4e6ea] transition-colors"
              style={{
                fontSize: '14px',
                fontWeight: 600,
                height: '44px',
                padding: '0 20px',
                backgroundColor: '#EEF0F3',
                lineHeight: 1,
              }}
            >
              Sign in
            </Link>

            <Link
              href={ctaButton.href}
              className="inline-flex items-center justify-center text-white rounded-full transition-colors"
              style={{
                fontSize: '14px',
                fontWeight: 600,
                height: '44px',
                padding: '0 20px',
                lineHeight: 1,
                backgroundColor: '#FF0000',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#CC0000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FF0000';
              }}
            >
              {ctaButton.text}
            </Link>

            <button
              className="md:hidden flex flex-col items-center justify-center gap-1.5"
              style={{ width: '44px', height: '44px' }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              type="button"
            >
              <span className={cn('w-5 h-0.5 bg-black transition-all', isMobileMenuOpen && 'rotate-45 translate-y-[4px]')} />
              <span className={cn('w-5 h-0.5 bg-black transition-all', isMobileMenuOpen && 'opacity-0')} />
              <span className={cn('w-5 h-0.5 bg-black transition-all', isMobileMenuOpen && '-rotate-45 -translate-y-[4px]')} />
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed left-0 right-0 bottom-0 bg-white z-40 md:hidden overflow-y-auto border-t border-gray-100"
          style={{ top: '69px', animation: 'slideDown 200ms ease-out forwards' }}
        >
          <div className="px-4 py-4 flex flex-col gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href || '#'}
                className="text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                style={{ fontSize: '16px', fontWeight: 600, padding: '12px 16px' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-gray-100 mt-3 pt-3">
              <Link
                href="/login"
                className="block text-gray-900 hover:bg-gray-50 rounded-lg"
                style={{ fontSize: '16px', fontWeight: 600, padding: '12px 16px' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
