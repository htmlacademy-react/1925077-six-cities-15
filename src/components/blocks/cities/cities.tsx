import {useState} from 'react';
import {OFFERS} from '../../../mock/offers';
import {PageMainProps} from '../../../types/common-types';
import {PlaceCard} from '../place-card/place-card';
import {PlacesSorting} from '../places-sorting/places-sorting';
import {LeafletMap} from '../leaflet-map/leaflet-map';
import {POINTS} from '../leaflet-map/mock';

const CITY = {
  title: 'Нью-Йорк',
  lat: 52.37454,
  lng: 4.897976,
  zoom: 10,
};


export function Cities({placesCount, activeTab}: PageMainProps) {
  const [hoveredCardId, setHoveredCardId] = useState('');

  const handleMouseEnter = (id: string): void => {
    setHoveredCardId(id);
  };

  let filteredOffers = OFFERS;

  if (activeTab) {
    filteredOffers = OFFERS.filter((offer) => offer.city.name === activeTab);
  }

  // console.log(filteredOffers);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{placesCount} places to stay in Amsterdam {hoveredCardId}</b>
          <PlacesSorting/>
          <div className="cities__places-list places__list tabs__content">
            {filteredOffers.map((offer) => (
              <PlaceCard
                key={offer.id}
                {...offer}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={() => setHoveredCardId('')}
              />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <LeafletMap city={CITY} points={POINTS}/>
        </div>
      </div>
    </div>
  );
}
