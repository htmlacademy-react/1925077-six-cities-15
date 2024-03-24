import {CityName, OfferCard, PageMainProps} from '../../../types/common-types';
import {PlaceCard} from '../place-card/place-card';
import {PlacesSorting} from '../places-sorting/places-sorting';
import {LeafletMap} from '../leaflet-map/leaflet-map';
import {useActionCreators, useAppSelector} from '../../../hooks/redux-hooks';
import {offerActions, offerSelectors} from '../../../redux/slices';

export function Cities({selectedCity}: PageMainProps) {
  const offers = useAppSelector(offerSelectors.offers);
  const {setHoveredCardId} = useActionCreators(offerActions);

  const offersByCity: Partial<Record<CityName, OfferCard[]>> = {};

  offers.forEach((offer) => {
    if (!offersByCity[offer.city.name]) {
      offersByCity[offer.city.name] = [];
    }
    offersByCity[offer.city.name]!.push(offer);
  });

  const filteredOffers = offersByCity[selectedCity] ?? [];

  const handleMouseEnter = (id: string) => setHoveredCardId(id);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{filteredOffers.length} place{filteredOffers.length > 1 && 's'} to stay in {selectedCity || 'everywhere'}</b>
          <PlacesSorting/>
          <div className="cities__places-list places__list tabs__content">
            {filteredOffers.map((offer) => (
              <PlaceCard
                key={offer.id}
                {...offer}
                onMouseEnter={() => handleMouseEnter(offer.id)}
                onMouseLeave={() => setHoveredCardId(undefined)}
                className="cities"
              />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <LeafletMap
            offers={filteredOffers}
            className="cities"
          />
        </div>
      </div>
    </div>
  );
}
