import {useState} from 'react';
import {OFFERS} from '../../../mock/offers';
import {PageMainProps} from '../../../types/common-types';
import {PlaceCard} from '../place-card/place-card';
import {PlacesSorting} from '../places-sorting/places-sorting';

export function Cities({placesCount}: PageMainProps) {
  const [hoveredCardId, setHoveredCardId] = useState('');

  const handleMouseEnter = (id: string): void => {
    setHoveredCardId(id);
  };

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{placesCount} places to stay in Amsterdam {hoveredCardId}</b>
          <PlacesSorting/>
          <div className="cities__places-list places__list tabs__content">
            {OFFERS.map((offer) => (
              <PlaceCard
                key={offer.id}
                {...offer}
                onMouseEnter={handleMouseEnter}
              />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map"></section>
        </div>
      </div>
    </div>
  );
}
