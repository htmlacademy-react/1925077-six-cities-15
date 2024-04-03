import {LIMIT_REVIEWS} from '../../../consts/common-consts';
import {useAppSelector} from '../../../hooks/redux-hooks';
import {useFetchReviews} from '../../../hooks/use-fetch-reviews';
import {reviewsSelectors} from '../../../redux/slices/reviews-slice';
import {FormReview} from '../form-review/form-review';
import {Review} from '../review/review';

export function Reviews({id}: { id: string }) {
  const status = useAppSelector(reviewsSelectors.status);
  useFetchReviews(status, id);
  const allReviews = useAppSelector(reviewsSelectors.reviews);
  const visibleReviews = allReviews.slice(0, LIMIT_REVIEWS);
  const sortedReviews = visibleReviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{allReviews.length}</span></h2>
      <ul className="reviews__list">

        {Boolean(allReviews.length) && sortedReviews.map((review) => (
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
