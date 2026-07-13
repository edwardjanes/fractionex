# Coinbase UK - Design Tokens

## Typography

### Font Families
- **Primary Font**: `CoinbaseSans, -apple-system, system-ui, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`
- **Alternative**: `CoinbaseText` (appears to be used for body text)
- **Icon Font**: `CoinbaseIcons`

### Font Hierarchy
Based on visual inspection:
- **H1 (Hero/Main Headline)**: ~48px or larger, bold weight, black text
- **H2 (Section Headline)**: ~32px or larger, bold weight
- **H3 (Subheading)**: ~24px, semi-bold weight
- **Body Text**: ~16px, regular weight (400)
- **Small/Caption**: ~12-14px, regular weight

### Font Weights
- Headline text: Bold (700)
- Body text: Regular (400)
- Small text: Regular (400)

## Color Palette

### Primary Colors
- **Primary Blue**: `#0052FF` (main CTA buttons, accents)
  - Used for: "Sign up" buttons, links, highlights
  - Hex approximation: RGB(0, 82, 255)

### Neutral Colors
- **White**: `#FFFFFF` (backgrounds, card backgrounds)
- **Black/Dark Text**: `#000000` or near-black for headlines
- **Body Text Gray**: Likely `#666666` or `#808080` (medium gray)
- **Light Gray**: `#F5F5F5` or `#FAFAFA` (section backgrounds, borders)
- **Border Gray**: `#E5E5E5` (subtle borders)

### Semantic Colors
- **Background**: White `#FFFFFF`
- **Foreground**: Black/dark text
- **Muted**: Medium gray text `#666666`
- **Accent**: Blue `#0052FF`

### Dark Mode (if applicable)
- Not immediately visible in light mode version
- Likely inverses backgrounds and text

## Spacing Scale

Based on typical design systems and Coinbase's likely Tailwind/CSS patterns:
- **Base unit**: 4px or 8px (likely 8px)

Likely spacing values:
- `4px` (xs) - very small padding/margins
- `8px` (sm) - small spacing
- `12px` (md) - medium spacing
- `16px` (lg) - standard padding, gaps
- `24px` (xl) - larger spacing
- `32px` (2xl) - section spacing
- `48px` (3xl) - large section spacing
- `64px` (4xl) - hero/major section spacing

## Layout Dimensions

### Hero Section
- **Max width**: Likely full viewport width (1456px at desktop)
- **Height**: ~1150px+ (full screen hero)
- **Padding**: Generous padding (24px-48px on sides)

### Card/Section Layout
- **Container max-width**: Likely 1200px - 1440px
- **Column gap**: ~24px (between card columns)
- **Row gap**: ~24px (between rows)

### Navigation
- **Height**: ~56px
- **Padding**: ~16px vertical, ~24px horizontal

## Border Radius

Based on visual inspection:
- **Buttons**: Large border radius, likely `24px` or `rounded-full`
- **Cards**: Subtle, likely `8px` or `12px`
- **Inputs**: Likely `8px`
- **Hero elements**: Some may have `16px`

## Shadows

### Card Shadows
- Subtle shadows on feature cards
- Likely: `0 1px 3px rgba(0, 0, 0, 0.1)` or similar
- No harsh shadows - modern flat design aesthetic

### Hover Shadows
- Cards may gain shadow on hover
- Transition likely smooth over `200-300ms`

## Component Styles

### Buttons
- **Primary (CTA)**: 
  - Background: `#0052FF`
  - Text: White `#FFFFFF`
  - Padding: ~12px 24px (vertical x horizontal)
  - Border radius: `24px` (pill-shaped)
  - Font weight: 600 (semi-bold)
  - Hover: Darker blue shade or slight opacity reduction

- **Secondary**: 
  - Background: Transparent or light gray
  - Text: Dark or blue
  - Border: Possible 1px border
  - Padding: Similar to primary

### Navigation Links
- **Hover State**: Likely color change to blue or underline
- **Transition**: Smooth 200-300ms

### Inputs/Forms
- **Border**: Light gray `#E5E5E5`
- **Focus**: Blue border or outline `#0052FF`
- **Background**: White `#FFFFFF`
- **Padding**: ~8-12px
- **Font**: Inherit from body

## Breakpoints

Expected Tailwind breakpoints:
- **Mobile**: 390px (custom or `sm`)
- **Tablet**: 768px (md)
- **Desktop**: 1440px (lg or xl)

Responsiveness patterns:
- Nav collapses on mobile
- Hero text may reflow
- Cards stack vertically on mobile
- Image scaling/hiding on smaller screens

## Animations & Transitions

### Scroll Behavior
- Native smooth scroll (no custom scroll library detected)
- Possible scroll-triggered animations

### Hover Transitions
- Likely `transition: all 200ms ease` or similar
- Subtle scale, opacity, or color changes

### Carousel/Tabs
- "Page 1 of 3" indicates tabbed content
- Likely smooth transition between states
- Possible swipe on mobile

## Gradients & Effects

- **Potential gradients**: On hero background or section overlays
- **Overlay patterns**: Subtle textures or patterns possible
- **Backdrop filters**: Possibly used for modals/dropdowns

## Custom Properties (CSS Variables)

Likely uses CSS variables for:
- Primary color: `--color-primary` or `--blue`
- Text color: `--text-primary`, `--text-secondary`
- Spacing: `--spacing-sm`, `--spacing-md`, etc.
- Radii: `--radius-sm`, `--radius-lg`

## Icons

- **Icon Font**: CoinbaseIcons
- **Sizes**: Likely 16px, 20px, 24px (based on context)
- **Style**: Clean, minimal vector style
- **Also available as SVG**: Several icons extracted as SVG (worldwide, safe, support, X logo)

## Fonts to Download

Need to acquire:
- `CoinbaseSans` (custom font - may need to extract from CDN)
- `CoinbaseText` (custom font - may need to extract from CDN)
- `CoinbaseIcons` (custom icon font)

Fallback:
- Use system font stack if custom fonts unavailable
- `-apple-system, system-ui, Segoe UI, Roboto` provides good fallback

## Layout System

Likely uses:
- **Flexbox**: For horizontal layouts, navigation, button groups
- **CSS Grid**: For multi-column card layouts
- **Positioning**: Absolute/fixed for overlays, modals, floating elements

## Mobile-First Approach

Indicators suggest mobile-first CSS:
- Responsive design with mobile hamburger menu
- Images and cards likely scale appropriately
- Touch-friendly button sizes (likely 44px+ minimum height)
