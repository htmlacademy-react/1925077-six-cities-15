import {useState} from 'react';
import {OFFERS} from '../../../mock/offers';
import {CityName, OfferCardProps, PageMainProps} from '../../../types/common-types';
import {PlaceCard} from '../place-card/place-card';
import {PlacesSorting} from '../places-sorting/places-sorting';
import {LeafletMap} from '../leaflet-map/leaflet-map';


export function Cities({placesCount, city}: PageMainProps) {
  const [hoveredCardId, setHoveredCardId] = useState('');

  const handleMouseEnter = (id: string): void => {
    setHoveredCardId(id);
  };

  const offersByCity = {} as Record<CityName, OfferCardProps[]>;

  for (const offer of OFFERS) {
    if (offer.city.name in offersByCity) {
      offersByCity[offer.city.name].push(offer);
    } else {
      offersByCity[offer.city.name] = [offer];
    }
  }

  const filteredOffers = offersByCity[city] ?? [];

  const points = filteredOffers.map((offer) => ({
    latitude: offer.location.latitude,
    longitude: offer.location.longitude,
  }));

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{placesCount} places to stay in Amsterdam</b>
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
          {Boolean(filteredOffers.length) && (
            <LeafletMap
              city={filteredOffers[0].city}
              points={points}
              activeId={hoveredCardId}
            />
          )}
        </div>
      </div>
    </div>
  );
}
