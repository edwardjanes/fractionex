# Features Carousel Specification

## Overview
- **Target file:** `src/components/FeaturesCarousel.tsx`
- **Position:** Below hero section, above crypto grid
- **Interaction model:** Click-driven carousel with tab navigation
- **Height:** ~500-600px with padding

## Visual Structure

```
<section class="features-carousel">
  <div class="carousel-container">
    <!-- Page indicator: "Page 1 of 3" -->
    <div class="page-indicator">Page 1 of 3</div>
    
    <!-- Carousel content (changes based on active page) -->
    <div class="carousel-content">
      <h2>Trade millions of assets</h2>
      <p>Trade the newest Solana and Base tokens...</p>
      <!-- Feature image or content -->
    </div>
    
    <!-- Navigation buttons -->
    <div class="carousel-nav">
      <button class="prev">←</button>
      <button class="next">→</button>
    </div>
  </div>
</section>
```

## Computed Styles

### Container
- `display: flex`
- `flex-direction: column`
- `align-items: center`
- `justify-content: center`
- `padding: 60px 40px`
- `background-color: #ffffff`
- `width: 100%`
- `min-height: 500px`

### Page Indicator
- `font-size: 14px`
- `color: #666666`
- `margin-bottom: 24px`
- `font-weight: 400`

### Carousel Content
- `text-align: center`
- `max-width: 600px`
- `margin-bottom: 40px`

### Headline (h2)
- `font-size: 32px`
- `font-weight: 700`
- `color: #000000`
- `margin-bottom: 16px`

### Description
- `font-size: 16px`
- `color: #666666`
- `line-height: 1.6`
- `margin-bottom: 24px`

### Navigation Buttons
- `background-color: #0052ff`
- `color: #ffffff`
- `border: none`
- `border-radius: 50%`
- `width: 48px`
- `height: 48px`
- `font-size: 20px`
- `cursor: pointer`
- `transition: background-color 200ms ease`
- `gap: 16px between buttons`

### Button Hover
- `background-color: #0045cc`

## Content (3 Pages)

### Page 1: "Trade millions of assets"
- Headline: "Trade millions of assets"
- Description: "Trade the newest Solana and Base tokens in the Coinbase app via Direct Routing. Zero fees."

### Page 2: "Explore crypto like Bitcoin, Ethereum, and Dogecoin"
- Headline: "Explore crypto like Bitcoin, Ethereum, and Dogecoin"
- Description: "Simply and securely buy, sell, and manage hundreds of different cryptocurrencies"

### Page 3: (Based on page extraction)
- Headline and description for third carousel page

## Responsive Behavior

### Desktop (1440px+)
- Padding: 60px 40px
- Min-height: 500px
- Buttons full size (48px)

### Tablet (768px - 1439px)
- Padding: 48px 32px
- Min-height: 450px
- Buttons: 40px

### Mobile (390px - 767px)
- Padding: 32px 16px
- Min-height: 400px
- Buttons: 36px
- Font sizes reduced 10-15%

## Interaction Model

### Click Navigation
- Click "→" (next): Move to next page with smooth transition
- Click "←" (prev): Move to previous page with smooth transition
- Page indicator updates: "Page 1 of 3" → "Page 2 of 3" → "Page 3 of 3"
- Buttons disabled at boundaries (prev disabled on page 1, next disabled on page 3)

### Transition
- Fade out current content over 200ms
- Fade in new content over 200ms
- OR slide transition (decide during implementation)

### State Management
- Use React useState for currentPage
- Track which page is active (0, 1, or 2)
- Disable appropriate nav buttons

## Accessibility

- Semantic `<section>` and `<button>` elements
- `aria-label` on navigation buttons ("Next page", "Previous page")
- `aria-current="true"` on active page indicator
- Focus visible on buttons
- Keyboard navigation (Tab through buttons, Enter/Space to click)

## Technical Implementation

```tsx
interface CarouselPage {
  title: string;
  description: string;
}

interface FeaturesCarouselProps {
  pages?: CarouselPage[];
}
```

Default pages:
- Page 1: Trade millions of assets
- Page 2: Explore crypto
- Page 3: Support details

## CSS Classes (Tailwind)

- `flex flex-col items-center justify-center`
- `py-16 px-10` (padding)
- `bg-white`
- `w-full`
- `text-center`
- `max-w-2xl mx-auto`
- `bg-blue-600 hover:bg-blue-700`
- `rounded-full`
- `transition-colors duration-200`

## Notes

- Simple carousel, not infinite loop
- No auto-play (manual navigation only)
- Smooth transitions between pages
- Clear page indicator for UX
- Disabled state for edge buttons
