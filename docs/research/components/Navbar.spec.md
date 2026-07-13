# Navigation Bar Specification

## Overview
- **Target file:** `src/components/Navbar.tsx`
- **Position:** Fixed/sticky at top of page
- **Height:** 56px
- **Interaction model:** Dropdown navigation on hover (desktop) or click (mobile)
- **Sticky behavior:** Stays visible on scroll, gains shadow at scroll position > 0

## DOM Structure

```
<nav class="navbar">
  <div class="navbar-container">
    <!-- Logo -->
    <a href="/" class="logo">
      <svg>Coinbase Logo</svg>
    </a>
    
    <!-- Main Menu -->
    <div class="nav-menu">
      <a href="/explore">Explore</a>
      <button class="nav-dropdown-trigger">Individuals</button>
      <button class="nav-dropdown-trigger">Businesses</button>
      <button class="nav-dropdown-trigger">Institutions</button>
      <button class="nav-dropdown-trigger">Developers</button>
      <button class="nav-dropdown-trigger">Company</button>
    </div>
    
    <!-- Right Section -->
    <div class="navbar-right">
      <button aria-label="Search" class="search-button">🔍</button>
      <button aria-label="Theme toggle" class="theme-toggle">☀️/🌙</button>
      <a href="/login" class="sign-in">Sign in</a>
      <a href="/signup" class="sign-up-btn">Sign up</a>
    </div>
  </div>
  
  <!-- Dropdown Menus -->
  <div class="navbar-dropdown" data-menu="individuals">
    <!-- Dropdown content -->
  </div>
</nav>
```

## Computed Styles

### Navbar Container
- `position: fixed` or `sticky`
- `top: 0`
- `left: 0`
- `right: 0`
- `height: 56px`
- `z-index: 100` (above other content)
- `background-color: #ffffff`
- `border-bottom: 1px solid transparent` (no border initially)
- `box-shadow: none` (initially)
- `display: flex`
- `align-items: center`
- `justify-content: space-between`
- `padding: 0 24px` (horizontal padding)
- `backdrop-filter: none`

### On Scroll (Scrolled State)
- `box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1)`
- `border-bottom: 1px solid #e5e5e5`
- `transition: box-shadow 300ms ease, border-color 300ms ease`

### Logo
- `width: 40px`
- `height: 40px`
- `display: flex`
- `align-items: center`
- `justify-content: center`
- `color: #0052ff`
- `text-decoration: none`
- `cursor: pointer`

### Nav Menu Links
- `display: flex`
- `gap: 32px`
- `align-items: center`
- `margin-left: 40px`
- `flex: 1`

### Individual Menu Item
- `color: #000000`
- `font-size: 14px`
- `font-weight: 500`
- `text-decoration: none`
- `cursor: pointer`
- `padding: 8px 0`
- `border-bottom: 2px solid transparent`
- `transition: color 200ms ease, border-color 200ms ease`

### Menu Item Hover State
- `color: #0052ff`
- `border-bottom: 2px solid #0052ff`

### Dropdown Trigger Button
- Same as menu items but `background: none`, `border: none`
- Shows dropdown indicator icon

### Navbar Right Section
- `display: flex`
- `gap: 16px`
- `align-items: center`

### Search Button
- `width: 24px`
- `height: 24px`
- `background: none`
- `border: none`
- `cursor: pointer`
- `color: #000000`
- `font-size: 20px`

### Theme Toggle Button
- Same as search button

### Sign In Link
- `color: #000000`
- `text-decoration: none`
- `font-size: 14px`
- `padding: 8px 0`
- `transition: color 200ms ease`

### Sign In Link Hover
- `color: #0052ff`

### Sign Up Button (CTA)
- `background-color: #0052ff`
- `color: #ffffff`
- `padding: 10px 20px`
- `border-radius: 24px`
- `border: none`
- `font-size: 14px`
- `font-weight: 600`
- `cursor: pointer`
- `text-decoration: none`
- `display: inline-block`
- `transition: background-color 200ms ease`

### Sign Up Button Hover
- `background-color: #0045cc` (darker blue)

## Dropdown Menus

### Dropdown Container
- `position: absolute`
- `top: 100%` (below navbar)
- `left: 0`
- `right: 0`
- `background-color: #ffffff`
- `border-bottom: 1px solid #e5e5e5`
- `box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1)`
- `padding: 24px 40px`
- `display: none` (hidden initially)
- `z-index: 99`
- `animation: slideDown 300ms ease forwards` (on open)

### Dropdown Trigger Hover
- Shows dropdown: `display: grid` or `flex`
- Dropdown slides/fades in over 300ms

### Dropdown Grid Layout
- `display: grid`
- `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))`
- `gap: 24px`

### Dropdown Item
- `padding: 12px 0`
- `color: #000000`
- `text-decoration: none`
- `font-size: 14px`
- `cursor: pointer`
- `transition: color 200ms ease`

### Dropdown Item Hover
- `color: #0052ff`

### Dropdown Item Title
- `font-size: 16px`
- `font-weight: 600`
- `color: #000000`
- `margin-bottom: 8px`

### Dropdown Item Description
- `font-size: 12px`
- `color: #666666`
- `line-height: 1.4`

### Dropdown Item Image
- `width: 100%`
- `max-width: 300px`
- `height: auto`
- `border-radius: 8px`
- `object-fit: cover`
- `margin-bottom: 12px`

## Mobile Responsive

### Mobile Layout (< 768px)
- `display: flex`
- `justify-content: space-between`
- `align-items: center`
- `padding: 0 16px`

### Mobile Menu
- Hidden initially
- Hamburger icon visible
- Toggles full-screen dropdown on click
- Dropdown becomes full-screen modal overlay
- `position: fixed`
- `top: 56px` (below navbar)
- `left: 0`
- `right: 0`
- `bottom: 0`
- `width: 100vw`
- `background-color: #ffffff`
- `z-index: 99`
- Slides in from left/top, fades in

### Mobile Dropdown Content
- Full width
- Stacked vertically
- `padding: 16px`
- Single column layout

## Keyboard Navigation

- Tab through menu items
- Enter to activate dropdown/link
- Escape to close dropdown
- Arrow keys within dropdown (if custom behavior)

## Content

### Menu Labels (Exact Text)
- "Explore"
- "Individuals"
- "Businesses"
- "Institutions"
- "Developers"
- "Company"

### Right Section Buttons
- "Sign in" (text link)
- "Sign up" (button with arrow or icon)

## Accessibility

- Semantic `<nav>` element
- `<button>` for interactive elements
- `aria-expanded` for dropdown state
- `aria-label` for icon buttons
- Focus visible on all interactive elements
- Keyboard navigable
- High contrast text (#000000 on #ffffff)

## Animation Details

### Dropdown Enter
- `animation: slideDown 300ms ease-out`
- OR `transition: opacity 200ms ease, transform 200ms ease` (fade + slide)
- Initial state: `opacity: 0`, `transform: translateY(-10px)`
- Final state: `opacity: 1`, `transform: translateY(0)`

### Dropdown Exit
- Reverse animation on mouseout/blur
- Duration: 200-300ms

### Scroll Shadow
- `transition: all 300ms ease`
- Shadow appears smoothly as user scrolls

## Notes

- No parallax or scroll-driven effects on navbar
- Navbar remains fixed at top at all times
- Dropdowns close on clicking outside
- Dropdowns close on Escape key
- Search button may not be functional (display only)
- Theme toggle may not be functional (display only)
- Language selector in footer, not navbar

## Import References

```tsx
// Icon components
import { LogoIcon } from '@/components/icons';

// Props interface
interface NavbarProps {
  logo: {
    href: string;
    ariaLabel: string;
  };
  menuItems: Array<{
    label: string;
    href?: string;
    dropdown?: DropdownMenu;
  }>;
  ctaButton: {
    text: string;
    href: string;
  };
}

interface DropdownMenu {
  items: Array<{
    title: string;
    description?: string;
    href?: string;
    image?: string;
    icon?: string;
  }>;
  featured?: boolean;
  image?: string;
}
```
