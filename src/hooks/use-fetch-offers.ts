import {useEffect} from 'react';
import {useActionCreators} from './redux-hooks';
import {offersActions} from '../redux/slices/offers-slice';
import {RequestStatus} from '../types/redux-types';

export function useFetchOffers(status: RequestStatus) {
  const {fetchAllOffers} = useActionCreators(offersActions);

  useEffect(() => {
    if (status === RequestStatus.Idle) {
      fetchAllOffers();
    }
  }, [status, fetchAllOffers]);
}
