// Coinbase homepage content types

export interface CryptoAsset {
  id: string;
  name: string;
  symbol: string;
  icon: string;
  price?: string;
  change?: string;
  changePercent?: string;
}

export interface NavigationLink {
  text: string;
  href: string;
  icon?: string;
  description?: string;
  image?: string;
  children?: NavigationLink[];
}

export interface HeroSection {
  headline: string;
  subheading: string;
  description: string;
  cta: {
    text: string;
    href: string;
  };
  videoUrl?: string;
  posterImage?: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  image?: string;
  cta?: {
    text: string;
    href: string;
  };
  icon?: string;
}

export interface TrustBadge {
  text: string;
  icon?: string;
  description?: string;
}

export interface NavigationMenu {
  label: string;
  items: NavigationLink[];
  image?: string;
  featured?: boolean;
}

export interface FooterLink {
  text: string;
  href: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface CoinbasePageContent {
  hero: HeroSection;
  features: FeatureCard[];
  cryptoAssets: CryptoAsset[];
  trustBadges: TrustBadge[];
  productCards: FeatureCard[];
  footerSections: FooterSection[];
}

// Navbar specific types
export interface NavbarItem {
  label: string;
  href?: string;
  submenu?: NavigationMenu;
  icon?: string;
}

export interface NavbarProps {
  items: NavbarItem[];
  logo: {
    src: string;
    alt: string;
  };
  cta: {
    text: string;
    href: string;
  };
  searchEnabled?: boolean;
  themeToggle?: boolean;
}

// Section component props
export interface HeroSectionProps {
  data: HeroSection;
  fullScreen?: boolean;
  videoAutoplay?: boolean;
}

export interface FeatureGridProps {
  cards: FeatureCard[];
  columns?: 1 | 2 | 3 | 4;
  gap?: string;
}

export interface CryptoAssetGridProps {
  assets: CryptoAsset[];
  displayMode?: 'carousel' | 'grid';
  itemsPerRow?: number;
}

export interface TrustSectionProps {
  badges: TrustBadge[];
  title: string;
  description?: string;
}

export interface FooterProps {
  sections: FooterSection[];
  copyright?: string;
  socialLinks?: Array<{
    icon: string;
    href: string;
    label: string;
  }>;
  logoSrc?: string;
}

// Risk warning banner props
export interface RiskWarningProps {
  text: string;
  learnMoreLink?: string;
}
