import {useEffect} from 'react';
import {useActionCreators} from '../../../hooks/redux-hooks';
import {offerActions} from '../../../redux/slices/offers-slice';
import {RequestStatus} from '../../../types/redux-types';

export function useFetchOffers(status: RequestStatus) {
  const {fetchAllOffers} = useActionCreators(offerActions);

  useEffect(() => {
    if (status === RequestStatus.Idle) {
      fetchAllOffers();
    }
  }, [status, fetchAllOffers]);
}
