import {Outlet, useLocation} from 'react-router-dom';
import {Logo} from './header-logo/header-logo';
import {AppRoute, AuthorizationStatus, getAuthorizationStatus} from '../../../types/routes';
import {useDocumentTitle} from '../../../hooks/use-document-title';
import {CITIES} from '../../../consts/common-consts';

const getLayoutStyle = (pathname: AppRoute) => {
  let rootClassName = '';
  let isActiveLogo = false;
  let isNav = true;
  let isFooter = false;
  let title = '6 cities';

  switch (pathname) {
    case AppRoute.Main:
      rootClassName = 'page--gray page--main';
      isActiveLogo = true;
      title = '6 cities';
      break;
    case AppRoute.FavoritesEmpty:
      rootClassName = 'page--favorites-empty';
      isFooter = true;
      title += '. Favorites';
      break;
    case AppRoute.Login:
      rootClassName = 'page--gray page--login';
      isNav = false;
      title += '. Login';
      break;
    case AppRoute.Favorites:
      isFooter = true;
      title += '. Favorites';
      break;
    default:
  }
  return {
    rootClassName,
    isActiveLogo,
    isNav,
    isFooter,
    title
  };
};

const citiesRoutes = new Set(CITIES.map((city) => `/${city.name}`));

export function Layout() {
  const {pathname} = useLocation();
  const authorizationStatus = getAuthorizationStatus();
  const pathName = pathname as AppRoute;
  const isOnMain = citiesRoutes.has(pathName) || pathName === AppRoute.Main;
  const {isNav, isFooter} = getLayoutStyle(pathname as AppRoute);
  let {rootClassName, isActiveLogo, title} = getLayoutStyle(pathname as AppRoute);

  if (isOnMain) {
    rootClassName = 'page--gray page--main';
    isActiveLogo = true;
    title = `6 cities. ${pathName.slice(1)}`;
  }

  useDocumentTitle(title);

  return (
    <div className={`page ${rootClassName}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">

              <Logo
                isActiveLogo={isActiveLogo}
                footerLogo
              />

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
          <Logo isActiveLogo={isActiveLogo} footerLogo/>
        </footer>
      )}

    </div>
  );
}
