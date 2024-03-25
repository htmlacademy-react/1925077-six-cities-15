import {SortOption} from '../types/common-types';

export const CITIES = [
  {id: 'paris', name: 'Paris'},
  {id: 'cologne', name: 'Cologne'},
  {id: 'brussels', name: 'Brussels'},
  {id: 'amsterdam', name: 'Amsterdam'},
  {id: 'hamburg', name: 'Hamburg'},
  {id: 'dusseldorf', name: 'Dusseldorf'}
] as const;

export const SORT_OPTIONS = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'] satisfies Record<SortOption, string>;
