# Crypto Assets Grid Specification

## Overview
- **Target file:** `src/components/CryptoAssetsGrid.tsx`
- **Position:** Below features carousel, above trust section
- **Display:** Grid of cryptocurrency asset cards
- **Assets:** Bitcoin, Ethereum, Tether, BNB, USDC, XRP

## Visual Structure

```
<section class="crypto-grid">
  <h2>Explore more crypto</h2>
  <p>Browse real-time prices, charts, and daily movers for thousands of cryptocurrencies</p>
  
  <div class="grid">
    <!-- 6 crypto cards in grid -->
    <div class="crypto-card">
      <div class="card-icon">
        <img src="bitcoin.png" alt="Bitcoin" />
      </div>
      <h3>Bitcoin</h3>
      <p class="symbol">BTC</p>
      <!-- Additional info if available -->
    </div>
    <!-- Repeat for Ethereum, Tether, BNB, USDC, XRP -->
  </div>
</section>
```

## Computed Styles

### Section Container
- `display: flex`
- `flex-direction: column`
- `align-items: center`
- `padding: 60px 40px`
- `background-color: #ffffff`
- `width: 100%`

### Section Heading
- `font-size: 32px`
- `font-weight: 700`
- `color: #000000`
- `margin-bottom: 16px`
- `text-align: center`

### Section Description
- `font-size: 16px`
- `color: #666666`
- `margin-bottom: 48px`
- `max-width: 600px`
- `text-align: center`

### Grid Container
- `display: grid`
- `grid-template-columns: repeat(3, 1fr)` (desktop)
- `gap: 24px`
- `width: 100%`
- `max-width: 1200px`

### Crypto Card
- `display: flex`
- `flex-direction: column`
- `align-items: center`
- `padding: 24px 16px`
- `background-color: #ffffff`
- `border: 1px solid #e5e5e5`
- `border-radius: 12px`
- `cursor: pointer`
- `transition: all 200ms ease`
- `aspect-ratio: 1/1` (square cards)

### Card Icon Container
- `width: 80px`
- `height: 80px`
- `display: flex`
- `align-items: center`
- `justify-content: center`
- `margin-bottom: 16px`

### Card Icon Image
- `width: 100%`
- `height: 100%`
- `object-fit: contain`

### Card Title
- `font-size: 16px`
- `font-weight: 600`
- `color: #000000`
- `margin-bottom: 8px`

### Card Symbol
- `font-size: 12px`
- `color: #999999`
- `text-transform: uppercase`

### Card Hover State
- `box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1)`
- `transform: translateY(-4px)`
- `border-color: #0052ff`
- `transition: all 200ms ease`

## Content

### 6 Cryptocurrencies

| Asset | Symbol | Icon | Color |
|-------|--------|------|-------|
| Bitcoin | BTC | crypto-bitcoin.png | Orange |
| Ethereum | ETH | crypto-ethereum.png | Purple |
| Tether | USDT | crypto-tether.png | Green |
| BNB | BNB | crypto-bnb.png | Yellow |
| USDC | USDC | crypto-usdc.png | Blue |
| XRP | XRP | crypto-xrp.png | Blue-Gray |

### Section Text

**Heading:** "Explore more crypto"

**Description:** "Browse real-time prices, charts, and daily movers for thousands of cryptocurrencies"

## Responsive Behavior

### Desktop (1440px+)
- 3-column grid
- Card size: ~320px x 320px
- Padding: 60px 40px
- Gap: 24px

### Tablet (768px - 1439px)
- 2-column grid
- Card size: ~280px x 280px
- Padding: 48px 32px
- Gap: 20px

### Mobile (390px - 767px)
- 2-column grid (or could be single)
- Card size: ~150px x 150px
- Padding: 32px 16px
- Gap: 16px
- Font sizes reduced 10-15%

## Interaction

### Hover States
- Card gains shadow
- Card lifts up (transform translateY)
- Border becomes blue (#0052ff)
- Smooth 200ms transition

### Click
- Navigate to crypto detail page (or /crypto/bitcoin, etc.)
- Can be display-only for now

## Accessibility

- Semantic `<section>` element
- `<h2>` for section heading
- `<img alt="">` for crypto icons
- `aria-label` on cards identifying each crypto
- Proper contrast ratios

## Technical Implementation

```tsx
interface CryptoAsset {
  symbol: string;
  name: string;
  icon: string;
}

interface CryptoAssetsGridProps {
  assets?: CryptoAsset[];
}
```

Default assets:
- Bitcoin, Ethereum, Tether, BNB, USDC, XRP
- Icons from `public/images/coinbase/crypto-*.png`

## CSS Classes (Tailwind)

- `grid grid-cols-3 md:grid-cols-2 gap-6`
- `flex flex-col items-center`
- `border border-gray-200 rounded-lg`
- `hover:shadow-lg hover:border-blue-600`
- `hover:-translate-y-1`
- `transition-all duration-200`

## Notes

- Square card aspect ratio for visual consistency
- Icons centered in cards
- Hover effect lifts cards up
- Clean, minimal design
- Links to crypto pages (can be display-only)
