import {NAMES_OF_CITIES} from '../consts/common-consts';

export type PageMainProps = {
  selectedCity: string | null;
}

export type CityName = (typeof NAMES_OF_CITIES)[number];

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

export interface OfferCard extends Omit<OfferProps, 'description' | 'bedrooms' | 'goods' | 'host' | 'images' | 'maxAdults'> {
  previewImage: string;
  onMouseEnter?: (id: string) => void;
  onMouseLeave?: () => void;
}

export const enum ActionType {
  ChangeCity = 'OFFERS/ChangeCity',
}
