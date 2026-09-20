export interface Property {
  id: string;
  title: string;
  location: string;
  image: string;
  valuation: string;
  expectedReturn: string;
  sharePrice: string;
  sharesAvailable: number;
  occupancyRate: string;
}

export const FEATURED_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Premium Office Tower',
    location: 'London, UK',
    image: '/images/properties/premium-office-tower.jpg',
    valuation: '£45.2M',
    expectedReturn: '7.5%',
    sharePrice: '£250',
    sharesAvailable: 1200,
    occupancyRate: '92%',
  },
  {
    id: '2',
    title: 'Residential Complex',
    location: 'Manchester, UK',
    image: '/images/properties/residential-complex.jpg',
    valuation: '£28.5M',
    expectedReturn: '6.8%',
    sharePrice: '£180',
    sharesAvailable: 1500,
    occupancyRate: '88%',
  },
  {
    id: '3',
    title: 'Retail Shopping Centre',
    location: 'Birmingham, UK',
    image: '/images/properties/retail-shopping-centre.jpg',
    valuation: '£52.0M',
    expectedReturn: '8.2%',
    sharePrice: '£320',
    sharesAvailable: 950,
    occupancyRate: '95%',
  },
  {
    id: '4',
    title: 'Luxury Apartments',
    location: 'Edinburgh, UK',
    image: '/images/properties/luxury-apartments.jpg',
    valuation: '£35.8M',
    expectedReturn: '7.1%',
    sharePrice: '£215',
    sharesAvailable: 1800,
    occupancyRate: '90%',
  },
  {
    id: '5',
    title: 'Business Park',
    location: 'Bristol, UK',
    image: '/images/properties/business-park.jpg',
    valuation: '£41.3M',
    expectedReturn: '7.9%',
    sharePrice: '£285',
    sharesAvailable: 1100,
    occupancyRate: '87%',
  },
  {
    id: '6',
    title: 'Hotel & Leisure',
    location: 'Liverpool, UK',
    image: '/images/properties/hotel-leisure.jpg',
    valuation: '£29.7M',
    expectedReturn: '8.5%',
    sharePrice: '£195',
    sharesAvailable: 2000,
    occupancyRate: '91%',
  },
];
