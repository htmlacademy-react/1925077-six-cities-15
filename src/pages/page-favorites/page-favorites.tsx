import {FavoriteCard} from '../../components/blocks/favorite-card/favorite-card';
import {FAVORITES_OFFERS} from '../../mock/favorites-offers';

function PageFavorites() {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">

            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>Amsterdam</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {FAVORITES_OFFERS.map((offer) => <FavoriteCard key={offer.id} {...offer} />)}
              </div>
            </li>

          </ul>
        </section>
      </div>
    </main>
  );
}

export {PageFavorites};
