import {useState} from 'react';
import {OFFERS} from '../../../mock/offers';
import {PageMainProps} from '../../../types/common-types';
import {PlaceCard} from '../place-card/place-card';
import {PlacesSorting} from '../places-sorting/places-sorting';
import {LeafletMap} from '../leaflet-map/leaflet-map';
import {START_CITY} from '../../../pages/page-main/const';

export function Cities({selectedCity}: PageMainProps) {
  const [hoveredCardId, setHoveredCardId] = useState('');

  const placesCount = selectedCity ? OFFERS.filter((offer) => offer.city.name === selectedCity).length : OFFERS.length;

  const handleMouseEnter = (id: string): void => {
    setHoveredCardId(id);
  };

  let filteredOffers = OFFERS.filter((offer) => offer.city.name === START_CITY);

  if (selectedCity) {
    filteredOffers = OFFERS.filter((offer) => offer.city.name === selectedCity);
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{placesCount} places to stay in {selectedCity || 'everywhere'}</b>
          <PlacesSorting/>
          <div className="cities__places-list places__list tabs__content">
            {filteredOffers.map((offer) => (
              <PlaceCard
                key={offer.id}
                {...offer}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={() => setHoveredCardId('')}
                className="cities"
              />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <LeafletMap
            offers={filteredOffers}
            activePoint={hoveredCardId}
            className="cities"
          />
        </div>
      </div>
    </div>
  );
}
