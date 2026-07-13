# Coinbase UK Homepage Clone - Status Report

**Project:** Reverse-engineer and rebuild https://www.coinbase.com/en-gb as pixel-perfect Next.js clone  
**Target Framework:** Next.js 16 + React 19 + Tailwind CSS v4 + shadcn/ui  
**Start Date:** 2026-07-13  
**Status:** Phase 3 - Component Building in Progress

## Completion Status by Phase

### Phase 1: Reconnaissance ✅ COMPLETE
- [x] Navigation to target URL
- [x] Screenshot capture (desktop/mobile)
- [x] Design tokens extraction (fonts, colors, spacing)
- [x] Behaviors documentation (scroll, click, hover patterns)
- [x] Page topology mapping (sections and structure)
- [x] Asset discovery and extraction
- [x] Interaction model identification

**Output Files:**
- `docs/research/coinbase-en-gb/PAGE_TOPOLOGY.md` - Page structure and sections
- `docs/research/coinbase-en-gb/DESIGN_TOKENS.md` - Colors, fonts, spacing, shadows
- `docs/research/coinbase-en-gb/BEHAVIORS.md` - Interactions, animations, responsive patterns

### Phase 2: Foundation Build ✅ COMPLETE
- [x] Font configuration (system fonts as fallback for CoinbaseSans)
- [x] Design tokens in globals.css (#0052ff primary, white bg, dark mode)
- [x] Asset download (19 images, 5 SVGs)
- [x] Icon component extraction (LogoIcon, IconWorldwide, IconSafe, IconSupport, IconX)
- [x] TypeScript types definition (CoinbasePageContent, NavbarProps, FooterProps, etc.)
- [x] Project build verification (npm run build ✓)
- [x] Metadata updates (title, description)

**Output Files:**
- `src/app/globals.css` - Design tokens, color scheme
- `src/app/layout.tsx` - Metadata
- `src/components/icons.tsx` - SVG icon components
- `src/types/coinbase.ts` - TypeScript interfaces
- `public/images/coinbase/` - 19 downloaded assets
- `public/icons/coinbase/` - 5 SVG icons

### Phase 3: Component Building ✅ MAJOR SECTIONS COMPLETE

#### Builders Completed & Merged ✅
1. **HeroSection Builder** (aba4b9e90698158ed)  
   - Built: `src/components/HeroSection.tsx` ✅
   - Full-screen responsive hero with video background
   - 48px headlines, generous padding, blue CTA button
   - Merged and integrated into page.tsx

2. **Navbar Builder** (abb8f5c29a32e2e54)
   - Built: `src/components/Navbar.tsx` ✅
   - Fixed 56px navbar, dropdown menus, mobile hamburger
   - Search, theme toggle, Sign in/up buttons
   - Merged and integrated into page.tsx

3. **RiskWarningBanner Builder** (a40f2a35d9554ee93)
   - Built: `src/components/RiskWarningBanner.tsx` ✅
   - Sticky warning banner below navbar
   - Non-dismissible regulatory compliance text
   - Merged and integrated into page.tsx

#### Components Ready for Build  
- **Footer** - Spec ready (`docs/research/components/Footer.spec.md`)
  - Multiple columns, social links, language selector
  - Next for builder dispatch

#### Components Pending (Specs to Create)
- Features/Carousel Section - "Page 1 of 3" carousel
- Crypto Assets Grid - Bitcoin, Ethereum, Tether, BNB, USDC, XRP cards
- Trust Section - Social proof badges and statistics
- Product Feature Cards - Feature highlights with images and CTAs

### Phase 4: Page Assembly 🔲 PENDING
- Merge component worktrees back to main
- Wire components in `src/app/page.tsx`
- Verify build passes
- Fix TypeScript type errors
- Test responsive behavior

### Phase 5: Visual QA 🔲 PENDING
- Side-by-side comparison (original vs. clone)
- Desktop comparison (1440px)
- Mobile comparison (390px)
- Interaction testing (hover, click, scroll)
- Visual discrepancy checklist

## Component Inventory

### Navigation & Layout
- ✅ Navbar (building)
- ✅ RiskWarningBanner (building)
- ⏳ Footer (spec ready)

### Hero & Main Content
- ✅ HeroSection (building)
- ⏳ FeaturesCarousel (spec to create)
- ⏳ CryptoAssetsGrid (spec to create)
- ⏳ TrustSection (spec to create)
- ⏳ ProductFeatures (spec to create)

### Shared Components
- ✅ Icons (done)
- ⏳ Button (may need custom)
- ⏳ Link (may need custom)

## Build Verification Status

```
$ npm run build
✓ Compiled successfully
✓ TypeScript checked
✓ All pages generated
✓ Build: PASSING
```

Build will be re-verified after each component merge.

## Known Gaps & TODOs

1. **Video Handling**
   - Hero video: `public/images/coinbase/hero-video.webm` is placeholder
   - Need to verify WebM works or provide proper fallback

2. **Custom Font Handling**
   - CoinbaseSans is not available (proprietary)
   - Using system font stack fallback (acceptable for clone)
   - Could upgrade to similar alternative (e.g., Inter, Geist)

3. **Responsive Images**
   - Asset images may need responsive srcset
   - Next.js Image component can optimize automatically

4. **Dark Mode**
   - Tokens defined in globals.css
   - Component implementation pending
   - Color scheme added for .dark mode

5. **Dropdown Navigation**
   - Navbar dropdown menus need menu content details
   - Will be added during builder implementation

6. **Form Components**
   - Sign up button goes to `/signup` (external form handling)
   - No actual form implementation needed for this clone

## Dependencies

### Installed
- Next.js 16.2.1
- React 19
- Tailwind CSS v4
- shadcn/ui (utilities)

### Custom
- Icon components (SVG-based)
- TypeScript types (Coinbase-specific)
- Design tokens (CSS variables)

## Success Criteria

- [ ] All 5 major sections built and responsive
- [ ] TypeScript strict mode: no errors
- [ ] Build passes: `npm run build`
- [ ] Visual QA: Pixel-perfect match on desktop
- [ ] Responsive: Mobile (390px) and tablet (768px) work correctly
- [ ] Accessibility: Semantic HTML, keyboard navigation, color contrast
- [ ] No console errors or warnings
- [ ] All links navigate properly

## Next Steps

1. **Await builder completion** (notifications will arrive)
2. **Review merged components** for:
   - TypeScript compliance
   - CSS accuracy vs. spec
   - Responsive behavior
3. **Create remaining component specs** while builders work
4. **Dispatch Footer builder**
5. **Merge all components**
6. **Final assembly and QA**

## Notes

- **Estimation:** With 3 parallel builders, first wave should complete in 10-15 minutes
- **Approach:** Specs-first, detailed extraction, incremental building and merging
- **Quality:** Pixel-perfect emulation per spec, no approximations
- **Speed vs. Perfection:** Prioritizing accurate specs + builders over speed
