import {CityName, OfferCard, PageMainProps} from '../../../types/common-types';
import {PlaceCard} from '../place-card/place-card';
import {PlacesSorting} from '../places-sorting/places-sorting';
import {LeafletMap} from '../leaflet-map/leaflet-map';
import {useActionCreators, useAppSelector} from '../../../hooks/redux-hooks';
import {offerActions, offerSelectors} from '../../../redux/slices/offers-slice';
import {SortOption} from '../../../types/common-types';
import {useEffect, useState} from 'react';
import {RequestStatus} from '../../../types/redux-types';
import {Spinner} from '../spinner/spinner';

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
  const status = useAppSelector(offerSelectors.offerStatus);
  const {fetchAllOffers} = useActionCreators(offerActions);

  useEffect(() => {
    if (status === RequestStatus.Idle) {
      fetchAllOffers();
    }
  }, [status, fetchAllOffers]);

  const handleMouseEnter = (id: string) => setHoveredCardId(id);
  const [activeSort, setActiveSort] = useState(SortOption.Popular);

  let sortedOffers = filteredOffers;

  if (activeSort === SortOption.PriceLowToHigh) {
    sortedOffers = [...filteredOffers].sort((a, b) => a.price - b.price);
  }
  if (activeSort === SortOption.PriceHighToLow) {
    sortedOffers = [...filteredOffers].sort((a, b) => b.price - a.price);
  }
  if (activeSort === SortOption.TopRatedFirst) {
    sortedOffers = [...filteredOffers].sort((a, b) => b.rating - a.rating);
  }

  const showMap = filteredOffers.length > 0;

  if (status === RequestStatus.Loading) {
    return <Spinner className={'cities__places-container container'}/>;
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{filteredOffers.length} place{filteredOffers.length > 1 && 's'} to stay in {selectedCity || 'everywhere'}</b>
          <PlacesSorting current={activeSort} setter={setActiveSort} />
          <div className="cities__places-list places__list tabs__content">
            {sortedOffers.map((offer) => (
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
          {showMap &&
          <LeafletMap
            offers={filteredOffers}
            className="cities"
          />}
        </div>
      </div>
    </div>
  );
}
