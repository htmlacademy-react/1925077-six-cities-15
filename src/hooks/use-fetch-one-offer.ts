import {useEffect} from 'react';
import {oneOfferActions} from '../redux/slices/one-offer-slice';
import {RequestStatus} from '../types/redux-types';
import {useActionCreators} from './redux-hooks';

export function useFetchOffer(status: RequestStatus, id: string) {
  const {fetchOneOffer} = useActionCreators(oneOfferActions);

  useEffect(() => {
    if (status === RequestStatus.Idle) {
      fetchOneOffer(id);
    }
  }, [id, status, fetchOneOffer]);
}
