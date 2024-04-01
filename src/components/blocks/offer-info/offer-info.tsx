import classNames from 'classnames';
import {FullOffer} from '../../../types/common-types';

type OfferInfoProps = Pick<FullOffer, 'isPremium' | 'rating' | 'title' | 'type' | 'bedrooms' | 'maxAdults' | 'price' | 'goods' | 'host' | 'description'>;

export function OfferInfo({isPremium, rating, title, type, bedrooms, maxAdults, price, goods, host, description}: OfferInfoProps) {
  return (
    <>
      {isPremium && <div className="offer__mark"><span>Premium</span></div>}

      <div className="offer__name-wrapper">

        <h1 className="offer__name">{title}</h1>

        <button className="offer__bookmark-button button" type="button">
          <svg className="offer__bookmark-icon" width="31" height="33">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>

      </div>
      <div className="offer__rating rating">
        <div className="offer__stars rating__stars">

          <span style={{width: `${Math.round(rating) * 20}%`}}></span>

          <span className="visually-hidden">Rating</span>
        </div>
        <span className="offer__rating-value rating__value">4.8</span>
      </div>
      <ul className="offer__features">

        <li className="offer__feature offer__feature--entire" style={{textTransform: 'capitalize'}}>{type}</li>
        <li className="offer__feature offer__feature--bedrooms">{bedrooms} Bedrooms</li>
        <li className="offer__feature offer__feature--adults">Max {maxAdults} adults</li>

      </ul>
      <div className="offer__price">

        <b className="offer__price-value">&euro;{price}</b>

        <span className="offer__price-text">&nbsp;night</span>
      </div>
      <div className="offer__inside">
        <h2 className="offer__inside-title">What&apos;s inside</h2>
        <ul className="offer__inside-list">

          {Boolean(goods) && Boolean(goods.length) && goods.map((item) => <li className="offer__inside-item" key={item}>{item}</li>)}

        </ul>
      </div>

      <div className="offer__host">
        <h2 className="offer__host-title">Meet the host</h2>
        <div className="offer__host-user user">
          <div className={classNames('offer__avatar-wrapper user__avatar-wrapper',
            {'offer__avatar-wrapper--pro': host?.isPro},
          )}
          >
            <img className="offer__avatar user__avatar" src={host && host.avatarUrl} width="74" height="74" alt="Host avatar"/>
          </div>
          <span className="offer__user-name">
            {host ? host.name : 'Unknown'}
          </span>

          {host && host.isPro && <span className="offer__user-status">Pro</span>}

        </div>
        <div className="offer__description">

          <p className="offer__text">{description}</p>

        </div>
      </div>
    </>
  );
}
