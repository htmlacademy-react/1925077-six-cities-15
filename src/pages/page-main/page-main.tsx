import {PlaceCard} from '../../components/blocks/place-card/place-card';
import {PlacesSorting} from '../../components/blocks/places-sorting/places-sorting';
import {Tabs} from '../../components/blocks/tabs/tabs';
import {OFFERS} from '../../mock/offers';
import {PageMainProps} from '../../types/common-types';

function PageMain({placesCount}: PageMainProps) {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs/>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{placesCount} places to stay in Amsterdam</b>
            <PlacesSorting/>
            <div className="cities__places-list places__list tabs__content">
              {OFFERS.map((offer) => <PlaceCard key={offer.id} {...offer} />)}
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  );
}

export {PageMain};
