import {Link} from 'react-router-dom';
import {AppRoute} from '../../types/routes';

export function Logo() {
  return (
    <Link className="header__logo-link" to={AppRoute.Main}>
      <img className="header__logo-link" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
    </Link>
  );
}

export function LogoActive() {
  return (
    <span className="header__logo-link header__logo-link--active">
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
    </span>
  );
}
