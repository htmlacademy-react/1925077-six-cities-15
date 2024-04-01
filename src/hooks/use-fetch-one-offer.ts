import {useEffect} from 'react';
import {oneOfferActions} from '../redux/slices/one-offer-slice';
import {RequestStatus} from '../types/redux-types';
import {useActionCreators} from './redux-hooks';

export function useFetchOffer(status: RequestStatus, id: string) {
  const {fetchOneOffer, clear} = useActionCreators(oneOfferActions);

  useEffect(() => {
    if (status === RequestStatus.Idle) {
      Promise.all([fetchOneOffer(id)]);
    }
  }, [id, status, fetchOneOffer]);

  useEffect(() => () => {
    clear();
  }, [id, clear]);
}
