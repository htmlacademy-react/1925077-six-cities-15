import {CityName, OfferCard} from '../types/common-types';

export function useFilterOffers(offers: OfferCard[], selectedCity: CityName) {
  const offersByCity: Partial<Record<CityName, OfferCard[]>> = {};

  offers.forEach((offer) => {
    if (!offersByCity[offer.city.name]) {
      offersByCity[offer.city.name] = [];
    }
    offersByCity[offer.city.name]!.push(offer);
  });

  const filteredOffers = offersByCity[selectedCity] ?? [];

  return filteredOffers;
}
