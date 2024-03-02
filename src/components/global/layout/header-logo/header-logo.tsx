import {Link} from 'react-router-dom';
import {AppRoute} from '../../../../types/routes';

interface Logo {
  footerLogo: boolean;
  isActiveLogo: boolean;
}

export function Logo({isActiveLogo, footerLogo}: Logo) {
  let width = 81;
  let height = 41;
  let bemBlock = 'header';

  if (footerLogo) {
    width = 64;
    height = 33;
    bemBlock = 'footer';
  }

  return (
    !isActiveLogo ? (
      <Link
        className={`${bemBlock}__logo-link`}
        to={AppRoute.Main}
      >
        <img
          className={`${bemBlock}__logo`}
          src="img/logo.svg"
          alt="6 cities logo"
          width={width}
          height={height}
        />
      </Link>
    ) : (
      <span
        className={`${bemBlock}__logo-link ${bemBlock}__logo-link--active`}
      >
        <img
          className={`${bemBlock}__logo`}
          src="img/logo.svg"
          alt="6 cities logo"
          width={width}
          height={height}
        />
      </span>
    )
  );
}
