import {PageMainProps} from '../../../types/common-types';
import {PlaceCard} from '../place-card/place-card';
import {PlacesSorting} from '../places-sorting/places-sorting';
import {LeafletMap} from '../leaflet-map/leaflet-map';
import {useActionCreators, useAppSelector} from '../../../hooks/redux-hooks';
import {offerActions, offerSelectors} from '../../../redux/slices/offers-slice';
import {SortOption} from '../../../types/common-types';
import {useState} from 'react';
import {RequestStatus} from '../../../types/redux-types';
import {Spinner} from '../spinner/spinner';
import {useFilterOffers} from '../../../hooks/use-filter-offers';
import {useFetchOffers} from '../../../hooks/use-fetch-offers';

export function Cities({selectedCity}: PageMainProps) {
  const offers = useAppSelector(offerSelectors.offers);
  const {setHoveredCardId} = useActionCreators(offerActions);
  const filteredOffers = useFilterOffers(offers, selectedCity);
  const handleMouseEnter = (id: string) => setHoveredCardId(id);
  const [activeSort, setActiveSort] = useState(SortOption.Popular);
  let sortedOffers = filteredOffers;
  const showMap = filteredOffers.length > 0;
  const status = useAppSelector(offerSelectors.offerStatus);
  useFetchOffers(status);

  if (activeSort === SortOption.PriceLowToHigh) {
    sortedOffers = [...filteredOffers].sort((a, b) => a.price - b.price);
  } else if (activeSort === SortOption.PriceHighToLow) {
    sortedOffers = [...filteredOffers].sort((a, b) => b.price - a.price);
  } else if (activeSort === SortOption.TopRatedFirst) {
    sortedOffers = [...filteredOffers].sort((a, b) => b.rating - a.rating);
  }

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
