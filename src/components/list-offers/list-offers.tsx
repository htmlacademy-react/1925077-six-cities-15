import {OFFERS} from '../../mock/offers';
import {PlaceCard} from '../place-card/place-card';

export function ListOffers() {
  return (
    <div className="cities__places-list places__list tabs__content">
      {OFFERS.map((offer) => <PlaceCard key={offer.id} {...offer} />)}
    </div>
  );
}
