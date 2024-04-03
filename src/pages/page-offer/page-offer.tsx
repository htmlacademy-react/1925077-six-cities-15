import {useParams} from 'react-router-dom';
import {LeafletMap} from '../../components/blocks/leaflet-map/leaflet-map';
import {PlaceCard} from '../../components/blocks/place-card/place-card';
import {useDocumentTitle} from '../../hooks/use-document-title';
import {OfferGallery} from '../../components/blocks/offer-gallery/offer-gallery';
import {OfferInfo} from '../../components/blocks/offer-info/offer-info';
import {Reviews} from '../../components/blocks/reviews/reviews';
import {useAppSelector} from '../../hooks/redux-hooks';
import {oneOfferSelectors} from '../../redux/slices/one-offer-slice';
import {FullOffer} from '../../types/common-types';
import {RequestStatus} from '../../types/redux-types';
import {Spinner} from '../../components/blocks/spinner/spinner';
import {useFetchOneOffer} from '../../hooks/use-fetch-one-offer';
import {sliceArrayToThreeElements} from '../../utils/slice-array-to-three-elements';
import {Page404} from '../page-404/page-404';

function PageOffer() {
  useDocumentTitle('6 cities. Offer');

  const {id} = useParams() as {id: string};
  const status = useAppSelector(oneOfferSelectors.status);
  const offer = useAppSelector(oneOfferSelectors.offer) as FullOffer;
  const allNearbyOffers = useAppSelector(oneOfferSelectors.nearbyOffers);
  const nearbyOffers = sliceArrayToThreeElements(allNearbyOffers);
  const isImages = !!offer && offer.images.length > 0;
  const isNearOffers = !!nearbyOffers && nearbyOffers.length > 0;

  useFetchOneOffer(status, id);

  if (status === RequestStatus.Loading) {
    return <Spinner main/>;
  }

  if (status === RequestStatus.Failed) {
    return <Page404 what='Offer'/>;
  }

  return (
    <main className="page__main page__main--offer">
      <section className="offer">

        {isImages && <OfferGallery images={offer.images}/>}

        <div className="offer__container container">
          <div className="offer__wrapper">

            <OfferInfo {...offer}/>

            <Reviews id={id}/>
          </div>
        </div>

        {isNearOffers && <LeafletMap className='offer' offers={nearbyOffers} oneOffer={offer}/>}

      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">

            {isNearOffers && nearbyOffers.map((nearOffer) => (
              <PlaceCard
                key={nearOffer.id}
                {...nearOffer}
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
