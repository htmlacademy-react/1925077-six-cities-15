import {CITIES} from '../consts/common-consts';

export type PageMainProps = {
  selectedCity: CityName;
}

export type CityName = (typeof CITIES)[number]['name'];

export interface FullOffer {
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

export interface OfferCard extends Omit<FullOffer, 'description' | 'bedrooms' | 'goods' | 'host' | 'images' | 'maxAdults'> {
  previewImage: string;
  onMouseEnter?: (id: string) => void;
  onMouseLeave?: () => void;
}

export const enum ActionType {
  ChangeCity = 'OFFERS/ChangeCity',
}

export const enum SortOption {
  Popular = 0,
  PriceLowToHigh = 1,
  PriceHighToLow = 2,
  TopRatedFirst = 3
}
