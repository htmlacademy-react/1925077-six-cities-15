import {useEffect} from 'react';
import {RequestStatus} from '../types/redux-types';
import {useActionCreators} from './redux-hooks';
import {reviewsActions} from '../redux/slices/reviews-slice';

export function useFetchReviews(status: RequestStatus, id: string) {

  const {fetchReviews, clear} = useActionCreators(reviewsActions);

  useEffect(() => {
    if (status === RequestStatus.Idle) {
      fetchReviews(id);
    }
  }, [id, status, fetchReviews]);

  useEffect(() => () => {
    clear();
  }, [id, clear]);
}
