# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Position:** Bottom of page, full width
- **Background:** Dark or light (specify based on final design)
- **Interaction model:** Mostly static links with hover effects
- **Sticky behavior:** None - standard flow footer

## Visual Structure

```
<footer class="footer">
  <div class="footer-container">
    <!-- Logo/Branding Section -->
    <div class="footer-brand">
      <svg>Coinbase Logo</svg>
      <p>© 2026 Coinbase. All rights reserved.</p>
    </div>
    
    <!-- Link Sections (Columns) -->
    <nav class="footer-nav">
      <div class="footer-column">
        <h4>Company</h4>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/press">Press</a></li>
        </ul>
      </div>
      
      <div class="footer-column">
        <h4>Legal & Privacy</h4>
        <ul>
          <li><a href="/security">Security</a></li>
          <li><a href="/legal">Legal</a></li>
          <li><a href="/privacy">Privacy</a></li>
          <li><a href="/cookies">Cookie Policy</a></li>
        </ul>
      </div>
      
      <!-- Additional columns... -->
    </nav>
    
    <!-- Social Links -->
    <div class="footer-social">
      <a href="https://twitter.com/coinbase" aria-label="X/Twitter">
        <svg>X Logo</svg>
      </a>
      <!-- Other social links -->
    </div>
  </div>
  
  <!-- Language/Region Selector -->
  <div class="footer-language">
    <button>Language/Region Selector</button>
  </div>
</footer>
```

## Computed Styles

### Footer Container
- `background-color: #1a1b1f` (dark gray/black) or lighter depending on design
- `color: #ffffff` (white text)
- `padding: 64px 40px 32px 40px` (generous padding, top-heavy)
- `width: 100%`
- `display: grid` or `flex`
- `gap: 40px` (between columns)

### Footer Brand Section
- `display: flex`
- `flex-direction: column`
- `align-items: flex-start`
- `gap: 16px`
- `padding-bottom: 32px`
- `border-bottom: 1px solid rgba(255, 255, 255, 0.1)`

### Logo
- `width: 40px`
- `height: 40px`
- `color: #0052ff` or #ffffff depending on bg

### Copyright Text
- `font-size: 12px`
- `color: #999999` (muted text)
- `margin: 0`

### Footer Navigation
- `display: grid`
- `grid-template-columns: repeat(auto-fit, minmax(150px, 1fr))`
- `gap: 40px`
- `flex: 1`

### Footer Column
- `display: flex`
- `flex-direction: column`
- `gap: 12px`

### Column Title (h4)
- `font-size: 14px`
- `font-weight: 600`
- `color: #ffffff`
- `margin: 0 0 8px 0`
- `text-transform: none`

### Column Link
- `font-size: 13px`
- `color: #999999` (muted initially)
- `text-decoration: none`
- `line-height: 1.6`
- `transition: color 200ms ease`
- `cursor: pointer`

### Column Link Hover
- `color: #0052ff` (turns blue)

### Footer Social Links
- `display: flex`
- `gap: 16px`
- `align-items: center`
- `padding-top: 32px`
- `border-top: 1px solid rgba(255, 255, 255, 0.1)`

### Social Link Icon
- `width: 24px`
- `height: 24px`
- `color: #999999`
- `transition: color 200ms ease`

### Social Link Icon Hover
- `color: #0052ff`

### Language/Region Section
- `border-top: 1px solid rgba(255, 255, 255, 0.1)`
- `padding-top: 32px`
- `margin-top: 32px`
- `font-size: 12px`
- `color: #999999`
- `text-align: center`

## Content Structure

### Footer Sections (based on extraction)

1. **Company**
   - About
   - Careers
   - Blog
   - Press

2. **Legal & Privacy**
   - Security
   - Legal
   - Privacy
   - Cookie Policy

3. **Digital Assets** (or Products)
   - Products menu
   - Services menu

4. **Language & Region**
   - Dropdown selector
   - Current: English - United Kingdom

### Social Links
- X/Twitter: https://twitter.com/coinbase

### Copyright
© 2026 Coinbase. All rights reserved.

## Responsive Behavior

### Desktop (1440px+)
- Multi-column grid layout
- 4+ columns visible
- Full width content
- Padding: 64px 40px

### Tablet (768px - 1439px)
- 2-3 column grid
- Padding: 48px 32px
- Adjusted gap: 32px

### Mobile (390px - 767px)
- Single column stacked layout
- All sections stack vertically
- Padding: 32px 16px
- Gap: 24px
- Column titles bold but smaller
- Language selector full width

## Keyboard Navigation

- Tab through all footer links
- Enter activates link
- Links should have visible focus outline

## Accessibility

- Semantic `<footer>` element
- `<nav>` for navigation sections
- `<h4>` for section titles
- `<a>` for all links with proper href
- `aria-label` for icon-only social links
- Text contrast: White on dark = WCAG AAA
- Focus visible on all links

## Link Categories

### Likely visible in footer based on extraction:
- Company section: About, Careers, Blog, Press, Security
- Legal: Privacy, Terms, Cookie Policy
- Products: Listed based on navbar menus
- Developers: API docs, etc.
- Social: X/Twitter icon with link

## States & Behaviors

### Link Hover
- Color changes to blue (#0052ff)
- Smooth transition over 200ms
- No underline (unless hovered)

### On Click
- Navigate to linked page
- OR open external link in new tab (for social links)

### Social Link Hover
- Icon turns blue
- Slight scale (1.1) optional
- Smooth transition

## Technical Implementation

```tsx
interface FooterProps {
  sections: Array<{
    title: string;
    links: Array<{
      text: string;
      href: string;
      external?: boolean;
    }>;
  }>;
  socialLinks?: Array<{
    icon: React.ReactNode;
    href: string;
    label: string;
  }>;
  copyright?: string;
  darkMode?: boolean;
}
```

## CSS Classes (Tailwind)

- `bg-gray-950` or `bg-slate-900` for dark background
- `text-white` for main text
- `text-gray-400` for muted text
- `text-blue-600 hover:text-blue-500` for links
- `grid grid-cols-4 gap-8` for layout
- `border-t border-gray-700` for dividers
- `py-16 px-8` for padding

## Notes

- Footer is crucial for trust and legal compliance
- Must include privacy/security links
- Social media links build brand presence
- Language selector important for international site
- Footer should be comprehensive but not overwhelming
- Links should be well-organized into logical sections
- Copyright year should be current (2026)

## Import References

```tsx
import { LogoIcon, IconX } from '@/components/icons';
```
