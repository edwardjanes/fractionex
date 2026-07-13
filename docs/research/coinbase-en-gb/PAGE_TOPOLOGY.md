# Coinbase UK Homepage - Page Topology

## Document Structure
- **Total Page Height**: 6605px
- **Viewport**: 1456px wide × 819px tall (desktop)
- **Primary Framework**: Not Next.js or React (static/server-rendered content)
- **Scroll Behavior**: Native browser scroll (no Lenis/Locomotive Scroll detected)

## Section Map (Top to Bottom)

### 1. Navigation Bar (Fixed/Sticky)
- **Position**: Top of page, fixed/sticky positioning
- **Height**: ~56px
- **Content**: 
  - Coinbase logo (left)
  - Nav menu items: Explore, Individuals, Businesses, Institutions, Developers, Company
  - Search icon, theme toggle, Sign in, Sign up CTA (right)
- **Behavior**: Likely becomes sticky/shadow on scroll
- **Interaction Model**: Dropdown menus for each nav section

### 2. Risk Warning Banner
- **Position**: Below nav bar
- **Height**: ~50px
- **Content**: "Don't invest unless you're prepared to lose all the money you invest..."
- **Style**: Light background, small text
- **Behavior**: Static/always visible

### 3. Hero Section
- **Position**: ~50px - ~1200px (approximately)
- **Height**: ~1150px+
- **Content**:
  - Main headline: "The most trusted crypto trading app"
  - Subheading: "Coinbase is the most trusted platform in the UK for buying, selling and trading crypto."
  - Body text: "Deposit GBP into your account for free to get started today"
  - Primary CTA: "Sign up" button (blue, rounded)
  - Video background: `homepage_GB_744.webm`
- **Background**: White or light background with possible video overlay
- **Interaction Model**: Static (hero takes full screen height)
- **Behavior**: Large whitespace/video background dominates viewport

### 4. Features/Assets Section
- **Position**: ~1200px - ~2400px
- **Multiple subsections**:
  - "Trade millions of assets" (Page 1 of 3 carousel)
  - Cryptocurrency listing cards with icons (Bitcoin, Ethereum, Tether, BNB, USDC, XRP)
  - "Explore more crypto" section
  - "Advanced Trade" features
  - "Coinbase ONE" membership pitch

### 5. Trust/Social Proof Section
- **Position**: ~2400px - ~3200px
- **Content**: 
  - "The most trusted cryptocurrency exchange"
  - Trust badges/statistics
  - Mention of awards/research: "2025 International YouGov Brand Research"

### 6. Product Cards/Feature Highlights
- **Position**: ~3200px - ~4500px
- **Content**: 
  - Feature cards with titles and descriptions
  - Asset images for different products (Advanced Trade, Earn, Learn)
  - CTA buttons per feature

### 7. Footer Section
- **Position**: ~4500px - ~6605px
- **Content**:
  - Company links (About, Careers, Blog, Press, Security, Vendors)
  - Legal & Privacy links
  - Social media links (X/Twitter)
  - Language/region selector
  - Cookie consent/preferences UI
- **Behavior**: Cookie management UI at bottom (OneTrust)

## Interaction Patterns

### Global Navigation
- **Dropdowns**: Expand on hover/click
- **Mobile**: Likely collapses to hamburger menu
- **Sticky behavior**: Nav likely becomes sticky with shadow after scroll

### Content Sections
- **Tabs/Carousel**: "Page 1 of 3" suggests tabbed content that can be navigated
- **Buttons**: All CTA buttons are blue with rounded corners
- **Links**: Standard text links, likely underlined on hover

### Cookie Consent
- **Type**: OneTrust cookie banner
- **Position**: Fixed at bottom
- **Dismissible**: Yes

## Page Flow & Content Architecture

1. **Trust/Credibility** (Hero + Risk Warning)
   - Emphasizes trust and platform credibility
   - Clear regulatory messaging

2. **Product Showcase** (Features/Assets Section)
   - Shows multiple trading/crypto options
   - Demonstrates breadth of offerings
   - Social proof with statistics

3. **Details/Education** (Product Cards)
   - Deep dive into specific features
   - Educational content (Learn section)
   - Membership benefits (Coinbase ONE)

4. **Conversion Path**
   - Multiple Sign up CTAs throughout page
   - Emphasis on ease ("Deposit GBP... to get started")
   - Trust messaging repeated in footer

## Design Zones

- **Hero**: Full-bleed white background + video
- **Features**: White background, organized card layouts
- **Trust Section**: Possibly different background (gray, subtle pattern)
- **Footer**: Dark background (standard pattern)

## Key CSS Patterns Observed

- **Colors**: 
  - Primary blue: #0052FF or similar (used for buttons and accents)
  - White backgrounds
  - Dark text (likely #000000 or near-black)
  - Gray/neutral text for secondary content
  
- **Typography**:
  - Font: CoinbaseSans (custom font family)
  - Large headlines (appears to be 48px or larger)
  - Regular body text
  - Smaller labels/captions

- **Spacing**: Generous whitespace, modern layout
- **Border Radius**: Rounded buttons (~24px or higher)
- **Shadows**: Subtle card shadows, no heavy shadows

## Mobile Responsiveness

Expected breakpoints (to verify):
- Desktop: 1440px
- Tablet: 768px  
- Mobile: 390px

Likely changes:
- Nav collapses to hamburger
- Hero section may show different layout
- Cards may stack vertically
- Text may reflow for narrower widths
