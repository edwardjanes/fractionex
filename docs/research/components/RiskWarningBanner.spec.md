# Risk Warning Banner Specification

## Overview
- **Target file:** `src/components/RiskWarningBanner.tsx`
- **Position:** Below navbar, above hero
- **Height:** ~48-56px
- **Interaction model:** Static with optional "learn more" link
- **Sticky behavior:** Stays visible below navbar as user scrolls

## Visual Structure

```
<div class="risk-warning">
  <div class="warning-container">
    <p class="warning-text">
      Don't invest unless you're prepared to lose all the money you invest. 
      This is a high-risk investment and you should not expect to be protected 
      if something goes wrong. <a href="#">Take 2 mins to learn more</a>
    </p>
  </div>
</div>
```

## Computed Styles

### Warning Container
- `position: sticky` or `relative`
- `top: 56px` (below navbar if navbar is fixed)
- `width: 100%`
- `background-color: #f5f5f5` (very light gray)
- `border-bottom: 1px solid #e5e5e5`
- `padding: 12px 24px` (vertical x horizontal)
- `display: flex`
- `align-items: center`
- `justify-content: center`
- `z-index: 90` (below navbar, above main content)

### Warning Text
- `font-size: 12px`
- `color: #000000`
- `line-height: 1.5`
- `text-align: center`
- `font-weight: 400`
- `margin: 0`
- `max-width: 100%`

### Warning Link
- `color: #0052ff`
- `text-decoration: underline`
- `cursor: pointer`
- `transition: color 200ms ease`

### Warning Link Hover
- `color: #0045cc` (darker blue)
- `text-decoration: none` (optional)

## Content (Verbatim)

"Don't invest unless you're prepared to lose all the money you invest. This is a high-risk investment and you should not expect to be protected if something goes wrong. Take 2 mins to learn more"

Note: "Take 2 mins to learn more" is a clickable link

## Responsive Behavior

### Desktop (1440px+)
- Full width
- Centered text
- Padding: 12px 24px

### Tablet (768px - 1439px)
- Full width
- Centered text
- Padding: 12px 20px (slightly reduced)

### Mobile (390px - 767px)
- Full width
- Text may wrap
- Padding: 10px 16px (reduced)
- Font size may be 11px (slightly smaller for mobile)
- Text should remain readable

## Accessibility

- Semantic `<p>` for text
- `<a>` for link with proper href
- Text contrast: Black on light gray = meets WCAG AA
- No need for ARIA (informational banner)

## States & Behaviors

### Initial State
- Visible below navbar
- Text and link visible
- No animation

### On Link Click
- Opens external page/modal about investment risks
- OR navigate to risk disclosure page

### On Scroll
- Stays visible below navbar
- May have slight shadow/border to distinguish from content below

## Mobile Considerations

- Banner should not be dismissible (regulatory requirement)
- Must always remain visible
- Text should wrap properly on narrow viewports
- Link should remain clickable with adequate touch target size

## Technical Implementation

```tsx
interface RiskWarningBannerProps {
  text: string;
  learnMoreLink: string;
  sticky?: boolean;
  topOffset?: string; // CSS top value when sticky
}
```

## Notes

- This is a regulatory/legal requirement banner
- Must be prominently displayed
- Cannot be hidden/dismissed
- Should be visually distinct from main content
- Light background helps distinguish from hero below
- Placement below navbar ensures visibility on page load
- Text is small but readable
- Link is clear and actionable

## CSS Classes (Tailwind)

- `bg-gray-50` for background
- `border-b border-gray-200` for border
- `text-xs text-black` for text
- `text-blue-600 underline` for link
- `sticky top-14` if navbar is 56px
- `px-6 py-3` for padding
