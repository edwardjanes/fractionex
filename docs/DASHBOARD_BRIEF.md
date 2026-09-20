# Fractionex Member Dashboard — Concept Brief
*Strategic outline for post-launch member experience. Conversion goal: retention and platform stickiness. Page job: make investors feel in control, informed, and rewarded.*

---

## Part 1 — Who Uses This and What Drives Them

### Primary User Personas

**The Portfolio Builder** (40% of users)
- Joined to diversify across multiple properties
- Checks dashboard 2-3x per week
- Mental model: "How's my portfolio performing vs my targets?"
- Drivers: diversification status, yield comparison, performance vs expectations
- Objections: complexity, hidden fees, unclear income attribution

**The Income Collector** (35% of users)
- Invested specifically for passive income
- Checks dashboard weekly to confirm distributions landed
- Mental model: "Am I getting the yield I signed up for?"
- Drivers: proof of distributions, income timeline, yield tracking, clarity on what's being paid
- Objections: "Where's my income?", delayed or misaligned distributions

**The Trader/Flipper** (15% of users)
- Watching for appreciation + liquidity windows
- Checks dashboard daily, especially around windows
- Mental model: "When can I sell? What's the current valuation?"
- Drivers: next liquidity window date, current valuations, sell queue status, exit timing
- Objections: "Can I sell now?", opaque valuation mechanics, surprise price changes

**The New Investor** (10% of users)
- First-time user, uncertain if they made the right choice
- Checks dashboard to understand what they own
- Mental model: "Did this work? Is this real?"
- Drivers: proof of ownership, clarity on holdings, tangibility of asset
- Objections: "What did I buy exactly?", hidden risks, information overload

### Dashboard Jobs to Be Done (by persona)

| Persona | Jobs | Metrics | Red Flags |
|---------|------|---------|-----------|
| **Portfolio Builder** | Manage diversification, compare yields, track allocation | Total value, # of properties, avg yield, allocation % | Imbalanced holdings, missing target allocations |
| **Income Collector** | Confirm distributions, track income over time, predict next payment | Total income YTD, recent distributions, next payout date | Missing expected distributions, income gaps |
| **Trader/Flipper** | Monitor valuations, plan exits, time liquidity windows | Current valuations, next window date, YTD appreciation | Opaque valuations, surprise changes, stuck sales |
| **New Investor** | Understand holdings, verify ownership, confirm legitimacy | Asset details, property photos, valuation breakdown, ownership proof | Confusion, mistrust, information gaps |

### The Trust Layer

The dashboard must signal **continuous legitimacy** to offset the #1 investor fear: "Is this real, or am I being scammed?"

Every section answers one question:
- **Portfolio summary** → "My money is actually deployed"
- **Property details** → "I own a real asset, not a token"
- **Income history** → "The income is real and predictable"
- **Transaction records** → "Everything is auditable and traceable"
- **Valuation updates** → "Changes are explained, not hidden"

---

## Part 2 — Dashboard Architecture (7 sections)

| # | Section | Job | Persona Priority | Visual |
|---|---------|-----|------------------|--------|
| 1 | Navigation & Account | Orientation, settings access | All | Clean sidebar or header nav |
| 2 | Portfolio Summary (hero) | One glance: total value, performance | Builder, Collector | Key stats cards + sparkline charts |
| 3 | Holdings Grid | See all properties, drill into details | All | Property cards with image, valuation, income, performance |
| 4 | Income Dashboard | Track distributions + predict next | Collector, Builder | Timeline of distributions, next payout, YTD total |
| 5 | Liquidity & Trading | Manage exits, time windows | Trader, Flipper | Window countdown, sell queue, valuation history |
| 6 | Insights & Performance | Understand what's driving returns | Builder, Trader | Charts, comparisons, property-by-property breakdowns |
| 7 | Account & Settings | Manage profile, download docs | All | Account status, KYC verification, payment methods, documents |

Design: Clean, dashboard-style. Dark mode preferred (fintech standard). Real-time or near-real-time data. Heavy use of numbers, charts, and status indicators. Zero ambiguity on values or dates.

---

## Part 3 — Section-by-Section Design Specs

### 1. Navigation & Account Status

**Header/Sidebar:**
- Fractionex logo + "Dashboard" title
- Account menu: Profile → Settings → Documents → Sign Out
- Quick status indicator: "Account verified ✔" or "KYC pending"
- Current balance/wallet display (top right)

**Purpose:** Orientation + continuous legitimacy signal (verification badge)

---

### 2. Portfolio Summary (Hero Section)

**Primary metric cards (4-card grid or horizontal layout):**

| Card | Label | Value | Subtext | Visual |
|------|-------|-------|---------|--------|
| 1 | Total Portfolio Value | £12,450 | Updated live | [amount in bold blue] |
| 2 | Total Invested | £10,000 | Across 3 properties | [baseline reference] |
| 3 | Unrealised Gain/Loss | +£2,450 (+24.5%) | Year-to-date | [green if positive] |
| 4 | Total Income Earned | £1,280 | This year | [accumulation proof] |

**Secondary: Portfolio sparkline**
- 12-month portfolio value trend
- Interactive (hover for exact date/value)
- Shows investment timeline + appreciation moments

**Tertiary: Asset allocation donut**
- Visual breakdown: £X in Property A, £Y in Property B, etc.
- Click to filter holdings by property
- Shows diversification at a glance

**CTA band below:**
"Invest in another property" (links to marketplace/properties page)

**Purpose:** Answers "Is my money real and growing?" in 5 seconds.

---

### 3. Holdings Grid (Core Section)

**Each property card shows:**

```
┌─────────────────────────────────┐
│  [Property Image]               │
├─────────────────────────────────┤
│ Premium Office Tower, London    │ ← Property name + location
│ 45 shares @ £250/share          │ ← Holdings breakdown
├─────────────────────────────────┤
│ Current Value: £11,250          │ ← Live valuation
│ Your Share of Income: £842/year │ ← Yield (their share)
│ Projected Monthly Payout: £70   │ ← Frequency clarity
├─────────────────────────────────┤
│ Performance: +8.2% (YTD)        │ ← Individual property performance
│ Next Liquidity Window: Jul 30   │ ← Critical date (if applicable)
├─────────────────────────────────┤
│ [View Details ↗] [Sell] [More]  │ ← CTAs
└─────────────────────────────────┘
```

**Click "View Details ↗" opens:**
- Full property info (address, photos, description)
- Valuation breakdown (purchase price → current → why changed)
- Income breakdown (gross rent → costs → net distribution)
- Distribution history (last 12 months, dates + amounts)
- Risk factors (occupancy, tenant terms, market trends)
- Full property documentation (prospectus, title, management agreement)

**Grid layout:**
- Responsive: 1 col mobile, 2 cols tablet, 3 cols desktop
- Sortable: By value, by yield, by performance, by purchase date
- Filterable: By property type, by location, by performance

**Visual design:**
- Property image as hero (proves real asset)
- Color coding: green for positive performance, neutral for stable
- Badge system: "High Yield", "New Purchase", "Window Open Soon", etc.

**Purpose:** Answers "What do I own exactly?" and "How's each property performing?"

---

### 4. Income Dashboard

**Main timeline view:**

```
Distribution History (Last 12 Months)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

JAN 15  │ +£145  │ Quarterly distribution | Property A, B, C
APR 18  │ +£158  │ Quarterly distribution | Property A, B
JUL 20  │ +£162  │ Quarterly distribution | Property A, B, C
OCT 22  │ +£171  │ Quarterly distribution | All properties

──────────────────────────────────────
Total Income This Year: £636
Average Distribution: £159
Next Expected Payout: October 22, 2026
```

**Card breakdown (expandable):**
- Click any distribution to see itemised breakdown
  - Property A: +£85 (gross £100, costs £15)
  - Property B: +£52 (gross £60, costs £8)
  - Property C: +£25 (gross £30, costs £5)

**Income stats section:**
- YTD total income
- Average per distribution
- Current yield (annual projection)
- Income growth trend (month-over-month or quarter-over-quarter)

**Upcoming payouts section:**
- Next payout date (countdown)
- Projected amount (based on latest data)
- Which properties are paying

**Visual: Income trend chart**
- Bar chart: monthly/quarterly distributions over 12 months
- Shows increasing/stable/variable income patterns
- Interactive hover shows exact amounts

**Purpose:** Answers "Am I getting paid what I should be?" and "When's the next payout?"

---

### 5. Liquidity & Trading

**Liquidity window status (prominent):**

```
Next Liquidity Window
━━━━━━━━━━━━━━━━━━━━━━
Opens: September 15, 2026 (in 62 days)
Closes: September 30, 2026

Your sell queue: 15 shares @ £265/share (Property A)
Estimated proceeds: £3,975
Status: Queued for next window
```

**Sell order management:**
- List active sell orders (property, shares, price, queue position)
- Form to create new sell order: select property → qty → target price
- Option to cancel pending orders
- History of completed sales (date, price, proceeds)

**Valuation history (per property):**
- Chart showing 12-month valuation trend per property
- Why valuations changed (income improvements, market adjustments, cost changes)
- Current valuation date

**Market activity:**
- Recent sales in your portfolio (properties that sold)
- Average sale price vs listing price (shows market dynamics)
- Buyer/seller activity level by property

**CTA:**
- "Sell holdings" button (if user has unsold shares)
- "Set alert for next liquidity window" (email/push notification)

**Purpose:** Answers "When can I get out?" and "At what price?"

---

### 6. Insights & Performance

**Performance charts:**

**Chart 1: Portfolio Performance vs Benchmark**
- Portfolio value line (actual)
- Benchmark line (e.g., FTSE 100, S&P 500, or average property market)
- Shows outperformance/underperformance visually
- Hover for exact returns

**Chart 2: Property Comparison (yield)**
- Bar chart: all properties ranked by current yield %
- Shows which properties are performing strongest
- Identifies underperformers or reasons to hold

**Chart 3: Income by Property (pie chart)**
- Shows which properties are generating most income
- Helps portfolio builders understand income concentration

**Insights section (narrative):**
- "Your portfolio is up 24.5% since purchase" (headline stat)
- "Property A's income grew 8% YoY due to rent increases" (property-specific insight)
- "You're diversified across 3 properties and 2 locations" (diversification analysis)
- "Your average yield is 6.8%, above the platform average of 6.2%" (benchmarking)

**Trend cards:**
- "Best performer: Property A (+12.3% YTD)"
- "Highest yield: Property C (7.4%)"
- "Newest investment: Property B (3 months old)"

**Purpose:** Answers "How am I doing?" and "Why?" — builds confidence through transparency.

---

### 7. Account & Settings

**Account status section:**
- Name + email
- Verification status: "KYC verified ✔ (completed Jan 15, 2026)"
- Account created: "January 2, 2026"
- Account balance: Shows any pending withdrawals or reserves

**Payment & bank details:**
- Current bank account for distributions
- Option to add/update bank account
- Distribution method: "Automatic quarterly transfers"

**Documents & downloads:**
- Download yearly tax statements (1099-equiv)
- Download property prospectuses (all holdings)
- Download investment confirmations (proof of purchase)
- Download distribution history (CSV for accounting)

**Notification preferences:**
- Email on new distribution ✔
- Email on liquidity window opening ✔
- Push notification on valuation changes ◻
- Newsletter / market insights ✔

**Security:**
- Change password
- View login history
- Enable 2FA

**Help & support:**
- Contact support link
- FAQ link
- Knowledge base link
- Live chat (if available)

**Purpose:** Self-service account control + downloadable proof (auditable, tax-ready)

---

## Part 4 — Visual Design System (Dashboard-Specific)

### Color Palette
- **Primary data**: Black text on white background
- **Positive performance**: Green (#10B981 or Fractionex green)
- **Neutral/stable**: Gray (#6B7280)
- **Alerts/attention**: Red (#EF4444)
- **Secondary actions**: Blue (#3B82F6, Fractionex blue)
- **Backgrounds**: White cards on light gray (#F9FAFB) page

### Layout Grid
- 12-column responsive grid
- Safe margins (2rem desktop, 1rem mobile)
- Card-based layout (each section = distinct card)
- Clear visual hierarchy: big numbers first, detail on hover/click

### Typography
- Headlines: Bold, large (h1 = 2rem, h2 = 1.5rem)
- Labels: Medium weight, small (0.875rem), all-caps for field labels
- Data: Bold mono-font for numbers (ensures alignment and scannability)
- Supporting text: Regular weight, gray color

### Components
- **Stat cards**: Value + label, optional sparkline
- **Charts**: Recharts or similar (interactive, tooltips)
- **Tables**: Simple, sortable headers, clear row separation
- **Buttons**: Primary (blue fill), secondary (outline), tertiary (text-only)
- **Modals**: For detailed drills (property details, send order)
- **Badges**: Status indicators (verified, window open, etc.)

### Dark Mode
- Invert colors: dark background (#1F2937), light text (#F9FAFB)
- Green/red remain same (sufficient contrast)
- Cards: slightly lighter background (#374151)

### Real-time / Live Data Indicators
- Small "updated 2 mins ago" text below values
- Optional: pulsing dot to indicate live data
- Refresh button for manual update
- Clear timestamp for data staleness

---

## Part 5 — Key UX Principles

### 1. **Trust Through Transparency**
Every number is traceable to a source. Hover on a value → see the underlying data. Click through to full details.
Example: "£70/month payout" → click → see gross rent £85, management costs £15, your share calculation.

### 2. **Clarity Over Aesthetics**
Numbers > pretty graphics. A boring table of distributions with exact dates beats a beautiful timeline that's ambiguous about timing.

### 3. **Zero Surprises**
If a valuation changed, show why. If a payout is lower than expected, explain it. The absence of explanation is a trust killer.

### 4. **Mobile-First, But Data-Rich**
Mobile: show top-level stats + one drill-down per section.
Desktop: multi-card grids, side-by-side comparisons, charts.

### 5. **One CTA Per Card**
Primary CTA only. Avoid decision paralysis. Example: property card = "View Details" (not also "Sell" and "Email Support").

### 6. **Live Data or Honest Staleness**
If data isn't live, say when it was last updated. If it's live, show a subtle indicator.
Never guess or estimate — "last updated" > "approximately" every time.

---

## Part 6 — Dashboard States & Edge Cases

### Empty State (New Investor, First Day)
- Hero message: "Welcome! Your first property will appear here once your initial investment settles."
- Timeline: "Settlement typically takes 3-5 business days."
- Suggested action: Link to /properties to browse or to /how-it-works for clarity
- CTA: "Browse properties to invest" or "Learn how it works"

### Single Property
- Same layout, just one card in holdings grid
- Don't hide the diversification CTA ("Invest in another property")

### Awaiting First Distribution
- Income section shows: "Your first distribution will be paid on [DATE]"
- Countdown timer, not just a date
- Proactive: "Learn how distributions work" link

### Liquidity Window Open
- Banner at top: "🔓 Liquidity window open through [DATE]. Sell now or close window."
- Sell queue shows position and eta if oversubscribed

### Valuation Decline
- Property card flags it: "⚠ Valuation adjusted" with reason
- Open detail view to show why (e.g., occupancy impact, market trends)
- DON'T hide bad news — explain it

---

## Part 7 — Success Metrics (Pre-Launch KPIs)

| Metric | Target | Measures |
|--------|--------|----------|
| **Daily Active Users** | 40% of registered members | Engagement + habit formation |
| **Avg Session Length** | 5-8 mins | Sticky enough to accomplish tasks |
| **Income Distribution Trust** | 95% of users confirm within 48h of payout | Proof functionality works |
| **Support ticket reduction** | 60% fewer "where's my payout?" tickets | Dashboard clarity wins |
| **Click-through to details** | 30%+ of users drill into property details monthly | Transparency drives confidence |
| **Repeat visitor rate** | 70% return within 30 days | Habit and stickiness |
| **Mobile vs desktop** | 60% mobile traffic | Design must work small |

---

## Part 8 — Open Inputs (Blockers Before Build)

1. **Data architecture**: What's live vs batch-loaded? (Distribution dates, valuations, income?)
2. **Update frequency**: When do valuations update? Weekly? Daily? Real-time?
3. **Compliance requirements**: What disclosures must appear? (Risks, conflicts, fees, disclaimers?)
4. **Property documentation**: What docs should be downloadable? (Prospectus, title, management agreement, valuations?)
5. **Multi-property accounting**: How does income attribution work if a user holds multiple shares of one property at different purchase prices?
6. **Liquidity mechanics**: What happens if sell orders exceed available buyers? Pro-rata? Queue?
7. **Tax reporting**: Do we generate downloadable tax docs? What format/jurisdiction?
8. **Performance benchmarking**: What's the "average" we compare against? (FTSE? S&P? Platform average?)
9. **Alert mechanisms**: Email, push, SMS, or in-app only? Frequency limits?
10. **Historical data**: How far back do we show distributions, valuations, transaction history?

---

## Part 9 — Phased Rollout Plan

### Phase 1 (MVP - Launch Day)
- Sections 2, 3, 4 (Portfolio summary, holdings, income history)
- Read-only data (no trading, no order management yet)
- Basic charts (no interactivity)
- Mobile + desktop responsive

### Phase 2 (1 Month Post-Launch)
- Section 5: Liquidity windows + sell orders (if live)
- Section 6: Basic performance insights
- Account settings (Section 7)
- Push notifications

### Phase 3 (3 Months Post-Launch)
- Advanced charts (performance vs benchmark)
- Download tax documents
- Notification preferences
- Dark mode

---

## Part 10 — Success Looks Like

✅ New investor lands on dashboard, sees their property card with photo + "£10K invested" + "projected yield 6.8%" — they feel ownership and confidence.

✅ Income collector gets distribution alert → logs in → confirms exact amount in Income section → sees next payout date → closes dashboard happy.

✅ Trader/flipper opens dashboard → sees "next window: 45 days" → can plan timing → knows exactly what they'll get in proceeds.

✅ Member tells a friend: "I can actually see everything. They're not hiding anything. The numbers match what they promised."

✅ Support tickets drop 60% (from "where's my income?" to complex edge cases only).

✅ Daily active user rate climbs to 40% (beating fintech benchmarks of 15-25%).

---

*Dashboard brief complete. Ready for design sprint and implementation.*
