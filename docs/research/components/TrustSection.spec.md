# Trust Section Specification

## Overview
- **Target file:** `src/components/TrustSection.tsx`
- **Position:** Below crypto grid, above footer
- **Content:** Social proof, trust badges, statistics
- **Height:** ~400-500px with padding

## Visual Structure

```
<section class="trust-section">
  <h2>The most trusted cryptocurrency exchange</h2>
  
  <div class="trust-content">
    <p>Millions of users trust us, and so can you. The proof is in our track record.</p>
    
    <!-- Trust badges/indicators -->
    <div class="trust-badges">
      <div class="badge">
        <svg class="icon"><!-- Worldwide icon --></svg>
        <h3>Available Worldwide</h3>
        <p>Access crypto in 100+ countries</p>
      </div>
      
      <div class="badge">
        <svg class="icon"><!-- Safe icon --></svg>
        <h3>Advanced Security</h3>
        <p>Industry-leading security standards</p>
      </div>
      
      <div class="badge">
        <svg class="icon"><!-- Support icon --></svg>
        <h3>24/7 Support</h3>
        <p>Get help whenever you need it</p>
      </div>
    </div>
    
    <!-- Trust stat/citation -->
    <p class="citation">Based on results of 2025 International YouGov Brand Research</p>
  </div>
</section>
```

## Computed Styles

### Section Container
- `display: flex`
- `flex-direction: column`
- `align-items: center`
- `justify-content: center`
- `padding: 60px 40px`
- `background-color: #ffffff` (or light gray #f5f5f5)
- `width: 100%`
- `text-align: center`

### Section Heading
- `font-size: 36px`
- `font-weight: 700`
- `color: #000000`
- `margin-bottom: 24px`

### Description Text
- `font-size: 18px`
- `color: #666666`
- `line-height: 1.6`
- `margin-bottom: 48px`
- `max-width: 700px`

### Trust Badges Container
- `display: grid`
- `grid-template-columns: repeat(3, 1fr)`
- `gap: 32px`
- `width: 100%`
- `max-width: 1000px`
- `margin-bottom: 48px`

### Individual Badge
- `display: flex`
- `flex-direction: column`
- `align-items: center`
- `padding: 24px`
- `background-color: transparent`
- `text-align: center`

### Badge Icon
- `width: 150px`
- `height: 150px`
- `margin-bottom: 16px`
- `color: #0052ff`

### Badge Title
- `font-size: 16px`
- `font-weight: 600`
- `color: #000000`
- `margin-bottom: 8px`

### Badge Description
- `font-size: 14px`
- `color: #999999`
- `line-height: 1.5`

### Citation Text
- `font-size: 12px`
- `color: #999999`
- `margin-top: 32px`
- `border-top: 1px solid #e5e5e5`
- `padding-top: 24px`

## Content

### Heading
"The most trusted cryptocurrency exchange"

### Description
"Millions of users trust us, and so can you. The proof is in our track record."

### Trust Badges (3 items)

| Icon | Title | Description |
|------|-------|-------------|
| Worldwide | Available Worldwide | Access crypto in 100+ countries |
| Safe | Advanced Security | Industry-leading security standards |
| Support | 24/7 Support | Get help whenever you need it |

### Citation
"Based on results of 2025 International YouGov Brand Research"

## Responsive Behavior

### Desktop (1440px+)
- 3-column badge grid
- Icon size: 150x150px
- Padding: 60px 40px
- Gap: 32px

### Tablet (768px - 1439px)
- 3-column badge grid (or 1-column stacked)
- Icon size: 120x120px
- Padding: 48px 32px
- Gap: 24px

### Mobile (390px - 767px)
- Single column stacked
- Icon size: 100x100px
- Padding: 32px 16px
- Gap: 16px
- Font sizes reduced 10-20%

## Visual Details

### Icons
Use extracted SVG icons from `src/components/icons.tsx`:
- `IconWorldwide` - Worldwide/globe icon
- `IconSafe` - Lock/safe icon
- `IconSupport` - Headset/support icon

All icons: 150px size, blue color (#0052ff)

### Background
- Light background (white or very light gray)
- Optional subtle border/divider at top
- No shadow or overlay effects

### Color Scheme
- Text: Black (#000000) for headings, gray (#666666) for body
- Icons: Blue (#0052ff)
- Accent: Light gray (#f5f5f5) for light background option
- Borders: Light gray (#e5e5e5)

## Interaction

### No Primary Interactions
- Section is primarily informational
- Badges may be clickable (navigate to support/security pages) - optional

### Hover (Optional)
- Badge cards may gain subtle shadow on hover
- Text may change to blue
- Smooth 200ms transition

## Accessibility

- Semantic `<section>` element
- `<h2>` for section heading
- SVG icons with `aria-label`
- Good color contrast (black/gray on white)
- Readable font sizes
- Proper heading hierarchy

## Technical Implementation

```tsx
interface TrustBadge {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TrustSectionProps {
  badges?: TrustBadge[];
  citation?: string;
}
```

Default badges:
- Worldwide, Safe, Support
- Icons from src/components/icons.tsx
- Default citation text provided

## CSS Classes (Tailwind)

- `flex flex-col items-center justify-center`
- `py-16 px-10`
- `text-center`
- `grid grid-cols-3 md:grid-cols-1 gap-8`
- `max-w-4xl mx-auto`
- `text-gray-900 font-bold text-3xl`
- `text-gray-600`

## Notes

- Clean, simple layout
- Focus on trust and credibility
- Badges serve as summary of key features
- Citation adds social proof/credibility
- No complex interactions
- Mobile-friendly responsive grid
- Icons are prominent visual elements
