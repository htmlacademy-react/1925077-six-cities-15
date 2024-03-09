import {useState} from 'react';
import {OFFERS} from '../../../mock/offers';
import {PageMainProps} from '../../../types/common-types';
import {PlaceCard} from '../place-card/place-card';
import {PlacesSorting} from '../places-sorting/places-sorting';
import {LeafletMap} from '../leaflet-map/leaflet-map';
import {POINTS} from '../leaflet-map/mock';

// const CITY = {
//   title: 'Нью-Йорк',
//   latitude: 52.37454,
//   longitude: 4.897976,
//   zoom: 10,
// };


export function Cities({placesCount, activeTab}: PageMainProps) {
  const [hoveredCardId, setHoveredCardId] = useState('');

  const handleMouseEnter = (id: string): void => {
    setHoveredCardId(id);
  };

  let filteredOffers = OFFERS;
  let city = OFFERS[75].city.location;
  let points = OFFERS.map((offer) => ({title: offer.title, latitude: offer.location.latitude, longitude: offer.location.longitude}));

  if (activeTab) {
    filteredOffers = OFFERS.filter((offer) => offer.city.name === activeTab);
    city = filteredOffers[0].city.location;// на данный момент не отображается
    points = filteredOffers.map((offer) => ({title: offer.title, latitude: offer.location.latitude, longitude: offer.location.longitude}));
  }

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
          <LeafletMap city={city} points={points}/>
        </div>
      </div>
    </div>
  );
}
