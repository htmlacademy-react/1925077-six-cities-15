import {Link} from 'react-router-dom';
import {OfferCard} from '../../../types/common-types';
import {Rating} from '../rating/rating';
import classNames from 'classnames';

type PlaceCardProps = Pick<OfferCard, 'id' | 'isPremium' | 'previewImage' | 'price' | 'title' | 'rating' | 'type' | 'isFavorite' | 'onMouseEnter' | 'onMouseLeave'> & {
  className?: string;
}

function PlaceCard({id, isPremium, previewImage, price, title, rating, type, className, isFavorite, onMouseEnter, onMouseLeave}: PlaceCardProps) {
  return (
    <article
      className={`${className}__card place-card`}
      onMouseEnter={() => onMouseEnter && onMouseEnter(id)}
      onMouseLeave={() => onMouseLeave && onMouseLeave()}
    >
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={classNames(
            'place-card__bookmark-button button',
            {'place-card__bookmark-button--active': isFavorite}
          )} type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <Rating bemBlock="place-card" rating={rating}/>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type" style={{textTransform: 'capitalize'}}>{type}</p>
      </div>
    </article>
  );
}

export {PlaceCard};
