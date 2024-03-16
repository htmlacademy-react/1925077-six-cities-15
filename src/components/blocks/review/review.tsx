import {Reviews} from '../../../types/reviews-and-user';

type ReviewProps = Pick<Reviews, 'date' | 'user' | 'comment' | 'rating'>;

function convertDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {month: 'long', year: 'numeric'}).format(new Date(date));
}

export function Review({date, user, comment, rating}: ReviewProps) {
  const dateForAttr = date.slice(0, 10).replace(/-/g, '-');
  const visualDate = convertDate(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src="img/avatar-max.jpg"
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${Math.round(rating) * 20}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={dateForAttr}>
          {visualDate}
        </time>
      </div>
    </li>
  );
}
