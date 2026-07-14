'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { IconX } from '@/components/icons';

interface FooterLink {
  text: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
  external?: boolean;
}

interface FooterProps {
  sections?: FooterSection[];
  socialLinks?: SocialLink[];
  copyright?: string;
  languageLabel?: string;
  languageValue?: string;
}

export function Footer({
  sections = [
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Careers', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Press', href: '#' },
      ],
    },
    {
      title: 'Products',
      links: [
        { text: 'How It Works', href: '/how-it-works' },
        { text: 'Properties', href: '/properties' },
        { text: 'Insights', href: '/insights' },
        { text: 'FAQs', href: '/faqs' },
      ],
    },
    {
      title: 'Legal & Privacy',
      links: [
        { text: 'Security', href: '/security' },
        { text: 'Legal', href: '/legal' },
        { text: 'Privacy', href: '/privacy' },
        { text: 'Cookie Policy', href: '/cookie-policy' },
      ],
    },
    {
      title: 'Developers',
      links: [
        { text: 'API Documentation', href: '#' },
        { text: 'API Status', href: '#' },
        { text: 'GitHub', href: '#' },
        { text: 'Developer Forum', href: '#' },
      ],
    },
  ],
  socialLinks = [
    {
      icon: <IconX className="w-5 h-5" />,
      href: 'https://twitter.com/fractionex',
      label: 'X / Twitter',
      external: true,
    },
  ],
  copyright = '© 2026 Fractionex. All rights reserved.',
  languageLabel = 'English - United Kingdom',
  languageValue = 'en-GB',
}: FooterProps): React.ReactElement {
  return (
    <footer
      className="footer bg-gray-950 text-white"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="footer-container w-full">
        {/* Brand Section */}
        <div className="footer-brand border-b border-gray-700/40">
          <div className="flex items-start gap-4">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo-white.png"
                alt="Fractionex"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <div>
              <p className="text-xs text-gray-500 leading-relaxed m-0">
                {copyright}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Sections Grid */}
        <nav
          className="footer-nav w-full"
          aria-label="Footer navigation"
        >
          <div className="footer-nav-grid">
            {sections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="footer-column"
                role="region"
                aria-label={section.title}
              >
                <h4 className="footer-column-title">{section.title}</h4>
                <ul className="footer-link-list m-0 p-0 list-none">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="footer-link-item">
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="footer-link"
                          aria-label={link.text}
                        >
                          {link.text}
                        </a>
                      ) : (
                        <Link href={link.href} className="footer-link">
                          {link.text}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        {/* Social Links Section */}
        <div className="footer-social border-t border-gray-700/40">
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.external ? '_blank' : undefined}
                rel={social.external ? 'noopener noreferrer' : undefined}
                className="footer-social-link"
                aria-label={social.label}
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Language / Region Section */}
        <div className="footer-language border-t border-gray-700/40">
          <button
            className="footer-language-button"
            aria-label={`Change language or region, currently set to ${languageLabel}`}
            type="button"
          >
            <span className="footer-language-text">{languageLabel}</span>
          </button>
        </div>
      </div>

      {/* Styling */}
      <style jsx>{`
        .footer {
          width: 100%;
        }

        .footer-container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 64px 40px 32px 40px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        @media (max-width: 1024px) {
          .footer-container {
            padding: 48px 32px 24px 32px;
            gap: 32px;
          }
        }

        @media (max-width: 768px) {
          .footer-container {
            padding: 32px 16px 20px 16px;
            gap: 24px;
          }
        }

        /* Brand Section */
        .footer-brand {
          padding-bottom: 32px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }

        /* Navigation Grid */
        .footer-nav-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 40px;
          width: 100%;
        }

        @media (max-width: 1024px) {
          .footer-nav-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
        }

        @media (max-width: 768px) {
          .footer-nav-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        /* Footer Column */
        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-column-title {
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
          margin: 0 0 8px 0;
          text-transform: none;
          line-height: 1.4;
        }

        .footer-link-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-link-item {
          display: block;
        }

        .footer-link {
          font-size: 13px;
          color: #999999;
          text-decoration: none;
          line-height: 1.6;
          transition: color 200ms ease;
          cursor: pointer;
          display: inline-block;
        }

        .footer-link:hover {
          color: #0052ff;
        }

        .footer-link:focus {
          outline: 2px solid #0052ff;
          outline-offset: 2px;
          border-radius: 2px;
        }

        .footer-link:active {
          color: #0045cc;
        }

        /* Social Links */
        .footer-social {
          display: flex;
          gap: 16px;
          align-items: center;
          padding-top: 32px;
        }

        .footer-social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #999999;
          transition: color 200ms ease, transform 200ms ease;
          cursor: pointer;
          text-decoration: none;
          padding: 4px;
          border-radius: 4px;
        }

        .footer-social-link:hover {
          color: #0052ff;
          transform: scale(1.1);
        }

        .footer-social-link:focus {
          outline: 2px solid #0052ff;
          outline-offset: 2px;
        }

        .footer-social-link:active {
          color: #0045cc;
        }

        /* Language / Region Section */
        .footer-language {
          padding-top: 32px;
          margin-top: 0;
          font-size: 12px;
          color: #999999;
          text-align: center;
        }

        .footer-language-button {
          background: none;
          border: none;
          color: #999999;
          cursor: pointer;
          font-size: 12px;
          padding: 8px 12px;
          border-radius: 4px;
          transition: color 200ms ease, background-color 200ms ease;
          font-family: inherit;
        }

        .footer-language-button:hover {
          color: #0052ff;
          background-color: rgba(0, 82, 255, 0.1);
        }

        .footer-language-button:focus {
          outline: 2px solid #0052ff;
          outline-offset: 2px;
        }

        .footer-language-button:active {
          color: #0045cc;
        }

        .footer-language-text {
          display: inline-block;
        }

        @media (max-width: 768px) {
          .footer-language {
            text-align: left;
          }

          .footer-language-button {
            display: block;
            width: 100%;
            text-align: left;
            padding: 12px 0;
          }
        }
      `}</style>
    </footer>
  );
}
