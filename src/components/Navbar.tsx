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
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'How it Works',
    href: '/how-it-works',
  },
  {
    label: 'Properties',
    href: '/properties',
  },
  {
    label: 'Insights',
    href: '/insights',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'FAQs',
    href: '/faqs',
  },
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

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle keyboard events
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

  // Close dropdown on click outside
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
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
    }
    setActiveDropdown(label);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
    }
    dropdownTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  }, []);

  const handleThemeToggle = () => {
    setIsDark(!isDark);
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          'fixed top-0 left-0 right-0 h-[100px] z-100 bg-white',
          isScrolled
            ? 'border-b border-gray-200 shadow-sm'
            : 'border-b border-transparent'
        )}
        style={{
          transition: 'box-shadow 300ms ease, border-color 300ms ease',
        }}
      >
        <div className="flex items-center justify-between h-full px-6 mx-auto max-w-[1400px]">
        {/* Logo */}
        <Link
          href={logo.href}
          className="flex items-center justify-center flex-shrink-0"
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

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => {
                if (item.dropdown) {
                  handleDropdownEnter(item.label);
                }
              }}
              onMouseLeave={() => {
                if (item.dropdown) {
                  handleDropdownLeave();
                }
              }}
            >
              {item.dropdown ? (
                <button
                  className={cn(
                    'text-base font-bold py-2 px-0 transition-colors border-b-2 border-transparent',
                    activeDropdown === item.label
                      ? 'text-blue-600 border-b-blue-600'
                      : 'text-black hover:text-blue-600 hover:border-b-blue-600'
                  )}
                  aria-expanded={activeDropdown === item.label}
                  onClick={(e) => {
                    e.preventDefault();
                    if (isMobileMenuOpen) {
                      setActiveDropdown(
                        activeDropdown === item.label ? null : item.label
                      );
                    }
                  }}
                >
                  {item.label}
                  <span className="ml-1 inline-block">
                    <svg
                      className={cn(
                        'w-4 h-4 inline transition-transform',
                        activeDropdown === item.label ? 'rotate-180' : ''
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </span>
                </button>
              ) : (
                <Link
                  href={item.href || '#'}
                  className="text-base font-bold py-2 px-0 text-black transition-colors border-b-2 border-transparent hover:text-blue-600 hover:border-b-blue-600"
                >
                  {item.label}
                </Link>
              )}

              {/* Desktop Dropdown */}
              {item.dropdown && activeDropdown === item.label && (
                <div
                  className="absolute top-full left-0 right-0 w-screen bg-white border-b border-gray-200 shadow-lg pt-6 pb-6"
                  style={{
                    animation: 'slideDown 300ms ease-out forwards',
                    marginLeft: 'calc(-50vw + 50%)',
                    marginRight: 'calc(-50vw + 50%)',
                  }}
                >
                  <div className="px-6 md:px-10 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {item.dropdown.items.map((dropdownItem, idx) => (
                        <Link
                          key={idx}
                          href={dropdownItem.href || '#'}
                          className="group transition-all"
                        >
                          {dropdownItem.image && (
                            <div className="mb-3 rounded-lg overflow-hidden h-32 bg-gray-100">
                              <img
                                src={dropdownItem.image}
                                alt={dropdownItem.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <h3 className="text-base font-semibold text-black group-hover:text-blue-600 transition-colors mb-1">
                            {dropdownItem.title}
                          </h3>
                          {dropdownItem.description && (
                            <p className="text-sm text-gray-600">
                              {dropdownItem.description}
                            </p>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 md:gap-4">
          {/* Search Button */}
          <button
            className="w-6 h-6 flex items-center justify-center text-black hover:text-blue-600 transition-colors"
            aria-label="Search"
            type="button"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Theme Toggle */}
          <button
            className="w-6 h-6 flex items-center justify-center text-black hover:text-blue-600 transition-colors"
            aria-label="Toggle theme"
            type="button"
            onClick={handleThemeToggle}
          >
            {isDark ? (
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Sign In Link */}
          <Link
            href="/login"
            className="hidden sm:inline text-sm font-medium text-black transition-colors hover:text-blue-600 py-2"
          >
            Sign in
          </Link>

          {/* Sign Up Button */}
          <Link
            href={ctaButton.href}
            className="inline-flex items-center justify-center px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full transition-colors hover:bg-blue-700"
          >
            {ctaButton.text}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden w-6 h-6 flex flex-col items-center justify-center gap-1 text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            <span
              className={cn(
                'w-5 h-0.5 bg-black transition-all',
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              )}
            />
            <span
              className={cn(
                'w-5 h-0.5 bg-black transition-all',
                isMobileMenuOpen ? 'opacity-0' : ''
              )}
            />
            <span
              className={cn(
                'w-5 h-0.5 bg-black transition-all',
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              )}
            />
          </button>
        </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed top-[100px] left-0 right-0 bottom-0 w-screen bg-white z-99 md:hidden overflow-y-auto"
          style={{
            animation: 'slideDown 300ms ease-out forwards',
          }}
        >
          <div className="px-4 py-4 flex flex-col gap-2">
            {menuItems.map((item) => (
              <div key={item.label} className="flex flex-col">
                {item.dropdown ? (
                  <>
                    <button
                      className={cn(
                        'text-sm font-medium py-3 px-4 text-left transition-colors rounded-lg',
                        activeDropdown === item.label
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-black hover:bg-gray-50'
                      )}
                      onClick={() => {
                        setActiveDropdown(
                          activeDropdown === item.label ? null : item.label
                        );
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.label}</span>
                        <svg
                          className={cn(
                            'w-4 h-4 transition-transform',
                            activeDropdown === item.label ? 'rotate-180' : ''
                          )}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                      </div>
                    </button>

                    {/* Mobile Dropdown */}
                    {activeDropdown === item.label && (
                      <div className="bg-gray-50 flex flex-col gap-1 py-2">
                        {item.dropdown.items.map((dropdownItem, idx) => (
                          <Link
                            key={idx}
                            href={dropdownItem.href || '#'}
                            className="text-sm py-2 px-6 text-blue-600 hover:text-blue-700 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropdownItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className="text-sm font-medium py-3 px-4 text-black hover:bg-gray-50 transition-colors rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="border-t border-gray-200 mt-4 pt-4">
              <Link
                href="/login"
                className="block text-sm font-medium py-3 px-4 text-black hover:bg-gray-50 transition-colors rounded-lg"
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
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
