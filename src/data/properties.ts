// Design examples only. Fractionex has not listed any properties, so these carry no
// financial figures (valuation, returns, occupancy) — add those only for real, approved listings.
export interface Property {
  id: string;
  title: string;
  location: string;
  image: string;
}

export const FEATURED_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Premium Office Tower',
    location: 'London, UK',
    image: '/images/properties/premium-office-tower.jpg',
  },
  {
    id: '2',
    title: 'Residential Complex',
    location: 'Manchester, UK',
    image: '/images/properties/residential-complex.jpg',
  },
  {
    id: '3',
    title: 'Retail Shopping Centre',
    location: 'Birmingham, UK',
    image: '/images/properties/retail-shopping-centre.jpg',
  },
  {
    id: '4',
    title: 'Luxury Apartments',
    location: 'Edinburgh, UK',
    image: '/images/properties/luxury-apartments.jpg',
  },
  {
    id: '5',
    title: 'Business Park',
    location: 'Bristol, UK',
    image: '/images/properties/business-park.jpg',
  },
  {
    id: '6',
    title: 'Hotel & Leisure',
    location: 'Liverpool, UK',
    image: '/images/properties/hotel-leisure.jpg',
  },
];
