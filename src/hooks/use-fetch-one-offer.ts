import {useEffect} from 'react';
import {oneOfferActions} from '../redux/slices/one-offer-slice';
import {RequestStatus} from '../types/redux-types';
import {useActionCreators} from './redux-hooks';

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
