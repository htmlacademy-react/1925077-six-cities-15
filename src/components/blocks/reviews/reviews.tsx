import {useEffect} from 'react';
import {useActionCreators, useAppSelector} from '../../../hooks/redux-hooks';
import {reviewsActions, reviewsSelectors} from '../../../redux/slices/reviews-slice';
import {RequestStatus} from '../../../types/redux-types';
import {FormReview} from '../form-review/form-review';
import {Review} from '../review/review';


export function Reviews({id}: { id: string }) {
  const {fetchReviews} = useActionCreators(reviewsActions);
  const reviews = useAppSelector(reviewsSelectors.reviews);
  const status = useAppSelector(reviewsSelectors.status);

  useEffect(() => {
    if (status === RequestStatus.Idle) {
      fetchReviews(id);
    }
  }, [id, status, fetchReviews]);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">

        {Boolean(reviews.length) && reviews.map((review) => (
          <Review
            key={review.id}
            date={review.date}
            user={review.user}
            comment={review.comment}
            rating={review.rating}
          />
        ))}

      </ul>

      <FormReview/>

    </section>
  );
}
