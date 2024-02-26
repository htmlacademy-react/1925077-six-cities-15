import {Link} from 'react-router-dom';
import {AppRoute} from '../../types/routes';

export function HeaderLogo({isActiveLogo}: {isActiveLogo: boolean}) {
  return (
    !isActiveLogo ? (
      <Link className="header__logo-link" to={AppRoute.Main}>
        <img className="header__logo-link" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
      </Link>
    ) : (
      <span className="header__logo-link header__logo-link--active">
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
      </span>
    )
  );
}
