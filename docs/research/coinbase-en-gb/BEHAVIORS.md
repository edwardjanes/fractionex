# Coinbase UK - Behaviors & Interactions

## Global Behaviors

### Navigation Bar
- **Sticky/Fixed**: Appears to remain visible at top as user scrolls
- **Shadow/Styling**: Likely gains shadow or background opacity change on scroll
- **Dropdowns**: Expand on hover (desktop) or click (mobile)
- **Active State**: Current page/section likely highlighted
- **Mobile**: Collapses to hamburger menu icon

### Scroll Events
- **Type**: Native browser scroll (no custom scroll library)
- **Smooth Scroll**: CSS `scroll-behavior: smooth` may be enabled
- **Parallax**: None detected
- **Snap**: No scroll-snap detected

## Section-Specific Behaviors

### Hero Section
- **Background**: Video plays on load
- **Video**: `homepage_GB_744.webm` (autoplay, muted, likely looped)
- **Content**: Text overlay on video background
- **Button**: Sign up CTA, likely leads to signup flow
- **Interaction**: No scroll interactions - static hero

### Navigation Dropdowns
- **Individuals Dropdown**: 
  - Contains menu items with icons and descriptions
  - Multiple product links
  - Images/thumbnails for products (CB1 upsell, etc.)
  - Likely shows/hides on hover

- **Businesses Dropdown**: Similar structure
- **Institutions Dropdown**: Similar structure
- **Developers Dropdown**: Similar structure
- **Company Dropdown**: Links to company pages

**Behavior Pattern**:
- Hover: Dropdown slides down or fades in
- Mouse leave: Dropdown closes
- Mobile: Click to toggle dropdown
- Transition: Smooth 200-300ms

### Feature Carousel/Tabs
- **Type**: "Page 1 of 3" carousel indicator
- **Navigation**: Likely next/prev buttons or clickable tabs
- **Transition**: Smooth fade/slide between pages
- **Content**: Different crypto assets and features per page
- **Auto-play**: Possible, may auto-advance every 5-10 seconds

### Product Feature Cards
- **Hover State**: 
  - Shadow increases
  - Slight scale up (1.02 - 1.05)
  - Color changes on text/icons
  - Transition: 200-300ms ease

- **Interactive**: May be clickable to navigate to product page
- **Image**: May zoom/scale on hover

### Buttons
- **Primary (Blue)**:
  - Normal: `#0052FF` background, white text
  - Hover: Darker blue or slight opacity reduction
  - Active/Focus: Possibly outline or different shade
  - Transition: 200ms ease

- **Secondary/Text Buttons**:
  - Hover: Underline appears or color changes
  - Focus: Outline for keyboard navigation

### Links
- **Default**: Blue or inherit color
- **Hover**: Underline appears
- **Visited**: Possibly different color
- **Transition**: 200ms

## Responsive Behavior

### Desktop (1440px+)
- Full navigation visible
- Multi-column layouts for cards
- Hero section full width and tall
- All images/videos visible

### Tablet (768px - 1439px)
- Navigation may compress
- Cards may change from 3-col to 2-col
- Padding/spacing adjusted
- Some images may hide

### Mobile (390px - 767px)
- Navigation collapses to hamburger
- Single-column layout
- Hero section shorter or adjusted
- Larger touch targets
- Simplified dropdowns (full-screen overlays)

## Animation Details

### Micro-interactions
- **Button click**: Possible brief scale or color flash
- **Dropdown open**: Smooth fade-in or slide-down over 200-300ms
- **Tab/carousel change**: Fade transition or slide animation
- **Card hover**: Subtle scale (1.02-1.05) and shadow increase

### Scroll Animations
- Possible fade-in animations as elements enter viewport
- Opacity or slide-up animations for cards
- Likely uses CSS `@keyframes` or `animation` properties
- No JavaScript-based scroll animations detected

## User Flow Paths

### Primary CTA Path
1. User sees hero section
2. Clicks "Sign up" button
3. Navigates to signup page
4. OR uses secondary CTAs throughout page for specific products

### Product Exploration Path
1. Browse navigation menu
2. Click on product (Individuals, Businesses, Institutions, etc.)
3. See product features and benefits
4. CTA to sign up for that product

### Information Path
1. Scroll through page sections
2. Read about features
3. Explore crypto available for trading
4. View trust/social proof
5. Eventually reach CTA

## Form Interactions
- **Language Selector**: Dropdown showing language/region options
- **Currency**: Likely shows GBP prominently (UK site)
- **Cookie Preferences**: OneTrust UI with accept/reject/manage options

## Keyboard Navigation
- **Tab order**: Likely left-to-right, top-to-bottom
- **Enter**: Activates buttons and links
- **Escape**: Closes dropdowns/modals
- **Arrow keys**: Possible carousel navigation

## Accessibility Features
- **Alt text**: Images have alt attributes
- **Semantic HTML**: Uses proper heading hierarchy
- **Focus indicators**: Likely has visible focus outlines
- **ARIA labels**: Possibly used for dropdowns and interactive elements

## Theme/Dark Mode
- **Light mode**: Currently visible
- **Dark mode**: May toggle via theme button (if present)
- **System preference**: May respect `prefers-color-scheme`
- **Transition**: Smooth color transition if theme changes

## Loading States
- **Video loading**: May show placeholder image (poster attribute)
- **Lazy images**: Images may load as user scrolls
- **Page load**: Initial render is fast (static/server-rendered)

## Error States
- **Not visible in initial page load**
- **Likely shown on form submissions** (if signup form included)
- **Error messages**: Probably red text or error toast notifications

## Success States
- **Form submissions**: Likely show success message or redirect
- **Copy to clipboard**: Possible tooltip saying "Copied!"
- **Toast notifications**: Possible for various actions

## Cookie Consent
- **Banner**: OneTrust cookie consent at bottom
- **Accept**: Closes banner, sets cookies
- **Reject**: Closes banner without non-essential cookies
- **Manage**: Opens detailed cookie preferences UI
- **Behavior**: Banner persists until dismissed
