import {Review as ReviewType} from '../../../types/common-types';
import {FormReview} from '../form-review/form-review';
import {Review} from '../review/review';


export function Reviews({reviews}: {reviews: ReviewType[]}) {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">

        {reviews.map((review) => (
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
