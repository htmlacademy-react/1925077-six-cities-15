export type PageMainProps = {
  placesCount: number;
  selectedCity: string | null;
}

export type CityName = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

export interface OfferProps {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
}

export interface City {
  name: CityName;
  // name: string;
  location: Location;
}

export interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface Host {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export interface OfferCardProps extends Omit<OfferProps, 'description' | 'bedrooms' | 'goods' | 'host' | 'images' | 'maxAdults'> {
  previewImage: string;
  onMouseEnter?: (id: string) => void;
  onMouseLeave?: () => void;
}
