import {Link, Outlet, useLocation} from 'react-router-dom';
import {Logo} from '../logo/logo';
import {AppRoute, AuthorizationStatus, getAuthorizationStatus} from '../../../types/routes';

const getLayoutStyle = (pathname: AppRoute) => {
  let rootClassName = '';
  let isActiveLogo = false;
  let isNav = true;
  let isFooter = false;

  if (pathname === AppRoute.Main) {
    rootClassName = 'page--gray page--main';
    isActiveLogo = true;
  } else if (pathname === AppRoute.FavoritesEmpty) {
    rootClassName = 'page--favorites-empty';
    isFooter = true;
  } else if (pathname === AppRoute.Login) {
    rootClassName = 'page--gray page--login';
    isNav = false;
  } else if (pathname === AppRoute.Favorites) {
    isFooter = true;
  }
  return {
    rootClassName,
    isActiveLogo,
    isNav,
    isFooter
  };
};

export function Layout() {
  const {pathname} = useLocation();
  const {rootClassName, isActiveLogo, isNav, isFooter} = getLayoutStyle(pathname as AppRoute);
  const authorizationStatus = getAuthorizationStatus();

  return (
    <div className={`page ${rootClassName}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">

              <Logo isActiveLogo={isActiveLogo}/>

            </div>

            {isNav && (

              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      {authorizationStatus === AuthorizationStatus.Auth ? (
                        <>
                          <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                          <span className="header__favorite-count">0</span>
                        </>)
                        : <span className="header__login">Sign in</span>}
                    </a>
                  </li>

                  {(authorizationStatus === AuthorizationStatus.Auth) && (
                    <li className="header__nav-item">
                      <a className="header__nav-link" href="#">
                        <span className="header__signout">Sign out</span>
                      </a>
                    </li>
                  )}
                </ul>
              </nav>

            )}

          </div>
        </div>
      </header>

      <Outlet/>

      {isFooter && (
        <footer className="footer container">
          <Link className="footer__logo-link" to={AppRoute.Main}>
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </Link>
        </footer>
      )}

    </div>
  );
}
