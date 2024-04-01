import {useEffect} from 'react';
import {oneOfferActions} from '../redux/slices/one-offer-slice';
import {RequestStatus} from '../types/redux-types';
import {useActionCreators} from './redux-hooks';
import {OfferCard} from '../types/common-types';

export function useFetchOneOffer(status: RequestStatus, id: string) {
  const {fetchOneOffer, fetchNearestOffers, clear} = useActionCreators(oneOfferActions);

  useEffect(() => {
    if (status === RequestStatus.Idle) {
      Promise.all([fetchOneOffer(id), fetchNearestOffers(id)]);
    }
  }, [id, status, fetchOneOffer, fetchNearestOffers]);

  useEffect(() => () => {
    clear();
  }, [id, clear]);
}

export function sliceArrayToThreeElements(array: OfferCard[]) {
  if (array.length > 3) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array.slice(randomIndex, randomIndex + 3);
  }
  return array;
}
