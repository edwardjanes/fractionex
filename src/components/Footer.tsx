'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

const sections: FooterSection[] = [
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
    title: 'Company',
    links: [
      { text: 'About', href: '/about' },
      { text: 'Careers', href: '#' },
      { text: 'Blog', href: '#' },
      { text: 'Press', href: '#' },
    ],
  },
  {
    title: 'Legal',
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
];

const socialLinks = [
  {
    icon: <IconX className="w-4 h-4" />,
    href: 'https://twitter.com/fractionex',
    label: 'X',
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.844 0-9.768h3.554v1.391c.43-.665 1.199-1.61 2.920-1.61 2.134 0 3.735 1.39 3.735 4.38v5.607zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.707 0-.957.768-1.708 1.959-1.708 1.188 0 1.914.75 1.939 1.708 0 .949-.751 1.707-1.983 1.707zm1.946 11.019H3.393V9.684h3.89v10.768zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),
    href: 'https://linkedin.com/company/fractionex',
    label: 'LinkedIn',
  },
];

export function Footer(): React.ReactElement {
  return (
    <footer className="bg-[#0a0a0f] text-white" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="pt-14 pb-10 border-b border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-6">
            <div className="col-span-2 md:col-span-2">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/images/logo-white.png"
                  alt="Fractionex"
                  width={140}
                  height={36}
                  className="h-9 w-auto"
                />
              </Link>
              <p className="text-sm leading-relaxed max-w-xs mb-5" style={{ color: '#9ca3af' }}>
                Fractional real estate investing through tokenisation — fully regulated, fully transparent.
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-md hover:bg-white/5 transition-colors"
                    aria-label={social.label}
                    style={{ color: '#9ca3af' }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {sections.map((section) => (
              <div key={section.title} className="col-span-1">
                <h4
                  className="mb-4 tracking-wide"
                  style={{ fontSize: '13px', fontWeight: 600, color: '#ffffff', marginBottom: '1rem' }}
                >
                  {section.title}
                </h4>
                <ul className="space-y-2.5 list-none m-0 p-0">
                  {section.links.map((link) => (
                    <li key={link.text} className="m-0 p-0">
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="no-underline hover:opacity-80 transition-opacity"
                          style={{ fontSize: '13px', color: '#9ca3af' }}
                        >
                          {link.text}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="no-underline hover:opacity-80 transition-opacity"
                          style={{ fontSize: '13px', color: '#9ca3af' }}
                        >
                          {link.text}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="py-8 border-b border-white/10">
          <p className="m-0" style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.6 }}>
            Don&apos;t invest unless you&apos;re prepared to lose all the money you invest. This is a
            high-risk investment and you should not expect to be protected if something goes wrong.
            Property values can go down as well as up. Past performance is not a guide to future
            performance.
          </p>
        </div>

        <div className="py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span style={{ fontSize: '12px', color: '#6b7280' }}>
            © 2026 Fractionex. All rights reserved.
          </span>
          <div className="flex items-center gap-3" style={{ fontSize: '12px' }}>
            <Link href="/legal" className="no-underline hover:opacity-80" style={{ color: '#6b7280' }}>
              Legal
            </Link>
            <span style={{ color: '#4b5563' }}>·</span>
            <Link href="/privacy" className="no-underline hover:opacity-80" style={{ color: '#6b7280' }}>
              Privacy
            </Link>
            <span style={{ color: '#4b5563' }}>·</span>
            <Link href="/cookie-policy" className="no-underline hover:opacity-80" style={{ color: '#6b7280' }}>
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
