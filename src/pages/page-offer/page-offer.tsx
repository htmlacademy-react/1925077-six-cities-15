// import {useParams} from 'react-router-dom';
import {LeafletMap} from '../../components/blocks/leaflet-map/leaflet-map';
import {PlaceCard} from '../../components/blocks/place-card/place-card';
// import {useActionCreators, useAppSelector} from '../../hooks/redux-hooks';
import {useDocumentTitle} from '../../hooks/use-document-title';
import {NEAR_OFFERS} from '../../mock/near-offers';
import {REVIEWS} from '../../mock/reviews';
// import {offerSelector} from '../../redux/slices/one-offer-slice';
// import {fetchOneOffer, fetchNearestOffers} from '../../redux/thunks/offers-thunk';
import {OfferGallery} from '../../components/blocks/offer-gallery/offer-gallery';
import {OfferInfo} from '../../components/blocks/offer-info/offer-info';
import {Reviews} from '../../components/blocks/reviews/reviews';

function PageOffer() {
  useDocumentTitle('6 cities. Offer');
  // const {id} = useParams();

  return (
    <main className="page__main page__main--offer">
      <section className="offer">

        <OfferGallery />

        <div className="offer__container container">
          <div className="offer__wrapper">

            <OfferInfo />

            <Reviews reviews={REVIEWS}/>
          </div>
        </div>

        <LeafletMap className='offer' offers={NEAR_OFFERS}/>

      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {NEAR_OFFERS.map((offer) => (
              <PlaceCard
                key={offer.id}
                {...offer}
                className="near-places"
              />
            ))}


          </div>
        </section>
      </div>
    </main>
  );
}

export {PageOffer};
