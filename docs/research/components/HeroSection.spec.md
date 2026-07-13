# Hero Section Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Parent directory structure:** Hero is direct child of `<main>`
- **Interaction model:** Static - full-screen hero, no scroll/click interactions
- **Responsive:** Full width on all breakpoints, height adjusts

## Visual Structure

### Layout Hierarchy
```
<section class="hero-container">
  <div class="hero-background">
    [Video background: homepage_GB_744.webm]
  </div>
  <div class="hero-content">
    <h1>The most trusted crypto trading app</h1>
    <p class="subheading">Coinbase is the most trusted platform in the UK...</p>
    <p class="description">Deposit GBP into your account for free to get started today</p>
    <button class="cta-primary">Sign up</button>
  </div>
</section>
```

## Computed Styles

### Hero Container
- `display: flex` or block with content overlay
- `position: relative` (for background video layering)
- `width: 100%`
- `height: calc(100vh)` or `min-height: 1000px+` (tall hero taking full viewport)
- `background-color: #ffffff`
- `padding: 80px 40px` (generous vertical/horizontal padding)
- `justify-content: flex-start`
- `align-items: center`
- `overflow: hidden` (video contained)

### Background Video
- `position: absolute`
- `top: 0`
- `left: 0`
- `width: 100%`
- `height: 100%`
- `object-fit: cover`
- `z-index: 0` (behind text)
- `opacity: 1` (or possibly 0.3-0.5 if overlaid under text)

### Content Wrapper
- `position: relative`
- `z-index: 10` (above video)
- `max-width: 600px` (content doesn't span full width)
- `margin-left: 0` or appropriate left offset
- `padding: 0` (hero handles padding)

### Headline (H1)
- `font-size: 48px` (exact or computed)
- `font-weight: 700` (bold)
- `line-height: 1.2` or similar
- `color: #000000` (black text)
- `margin-bottom: 24px`
- `letter-spacing: normal`
- `font-family: -apple-system, system-ui, ...`

### Subheading (First paragraph after headline)
- `font-size: 18px`
- `font-weight: 400` (regular)
- `color: #000000`
- `line-height: 1.5`
- `margin-bottom: 16px`

### Description (Second paragraph)
- `font-size: 16px`
- `font-weight: 400`
- `color: #000000`
- `line-height: 1.5`
- `margin-bottom: 32px`

### CTA Button
- `background-color: #0052ff` (Coinbase blue)
- `color: #ffffff` (white text)
- `padding: 12px 28px` (vertical x horizontal)
- `border-radius: 24px` (pill-shaped, very rounded)
- `border: none`
- `font-size: 16px`
- `font-weight: 600` (semi-bold)
- `cursor: pointer`
- `text-decoration: none`
- `display: inline-block`
- `transition: background-color 200ms ease`

### CTA Button Hover State
- `background-color: #0045cc` (darker blue)
- `transition: 200ms ease`

## Content (Verbatim)

### Headline
"The most trusted crypto trading app"

### Subheading
"Coinbase is the most trusted platform in the UK for buying, selling and trading crypto."

### Description
"Deposit GBP into your account for free to get started today"

### Button Text
"Sign up"

### Button Link
"/signup" or similar signup flow

## Video/Media

### Hero Video Background
- **Source:** `https://static-assets.coinbase.com/marketing/videos/homepage_GB_744.webm`
- **Local path:** Should be `public/videos/hero-bg.webm`
- **Attributes:**
  - `autoplay={true}`
  - `muted={true}`
  - `loop={true}`
  - `playsInline={true}` (mobile compatibility)
  - `poster="/images/coinbase/hero-poster.png"` (if available)
- **Dimensions:** 744px wide (but should scale to container)
- **Format:** WebM (modern, efficient)
- **Behavior:** Plays automatically on page load, continuously loops, muted for autoplay

## Responsive Behavior

### Desktop (1440px+)
- Full viewport height (100vh or ~1100px+)
- Content positioned on left side
- Generous padding (40px+)
- Video plays at full quality

### Tablet (768px - 1439px)
- Height maintained (100vh or at least 900px)
- Content width reduced slightly
- Padding adjusted to ~24-32px
- Video visible

### Mobile (390px - 767px)
- Height reduced (~600-700px, not full vh)
- Content centered or full width
- Padding reduced to ~20px
- Text sizes may adjust:
  - H1: 32-36px (down from 48px)
  - Body: 14-16px (maintained or slightly reduced)
- Video may be hidden/replaced with static poster to save bandwidth

## Accessibility

- Semantic HTML: `<section>`, `<h1>`, `<p>`, `<button>`
- Video: `aria-label` describing background video
- Button: Proper focus state, keyboard accessible
- Text contrast: Black text on white background = high contrast (WCAG AAA)
- Video: `muted` attribute prevents auto-play with sound (accessibility best practice)

## Technical Implementation Notes

### Video Handling
- Use HTML `<video>` element (not background image)
- Autoplay + muted for better browser support
- Loop attribute for continuous playback
- playsInline for iPhone compatibility
- Consider fallback poster image for non-supporting browsers

### Text Overlay
- Text should have good contrast over video
- May need semi-transparent overlay behind text if video is too bright
- Overlay opacity: ~0.1-0.3 (if needed)

### Performance
- Video should be WebM (efficient encoding)
- Consider lazy-loading next sections below hero
- Hero image/video can be preloaded with priority

## State & Behaviors

### Initial Load
- Video starts playing (autoplay, muted)
- Text visible immediately
- Button interactive

### On Hover
- Button color darkens
- Cursor changes to pointer
- Text may have subtle change (usually none in this design)

### On Click
- Button: Navigate to signup page
- Standard form submission or SPA navigation

### Scroll Behavior
- Hero stays in normal flow (not sticky)
- Continues scrolling as user scrolls down page
- No parallax or scroll-triggered effects visible

## Import/Dependencies

```tsx
// React & Next.js
import React from 'react';
import { LogoIcon } from '@/components/icons'; // If needed

// Props interface
interface HeroSectionProps {
  headline: string;
  subheading: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  videoSrc: string;
  posterImage?: string;
}
```

## CSS Classes to Consider

If using Tailwind:
- `flex`, `items-center`, `justify-center` for layout
- `bg-white`, `text-black` for colors
- `py-80`, `px-10` for padding
- `rounded-full` for button radius
- `bg-blue-600`, `hover:bg-blue-700` for button states
- `text-3xl md:text-5xl` for headline sizing

## Notes

- Hero is the primary conversion funnel entry point
- Video background should feel premium and modern
- Text layering must be clear and readable
- Whitespace is generous (modern, luxury aesthetic)
- No animations or transitions except button hover
- Mobile viewport should not be cramped or too tall
