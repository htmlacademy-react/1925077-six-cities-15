import {Link, Outlet, useLocation} from 'react-router-dom';
import {Logo} from './header-logo/header-logo';
import {AppRoute} from '../../../types/routes';
import {useDocumentTitle} from '../../../hooks/use-document-title';
import {CITIES} from '../../../consts/common-consts';
import {useAuth} from '../../../hooks/use-auth';
import {useCallback} from 'react';
import {useActionCreators, useAppSelector} from '../../../hooks/redux-hooks';
import {userActions, userSelectors} from '../../../redux/slices/user-slice';
import {getLayoutStyle} from '../../../utils/get-layout-style';

const citiesRoutes = new Set(CITIES.map((city) => `/${city.name}`));

export function Layout() {
  const {pathname} = useLocation();
  const authorizationStatus = useAuth();
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

  const user = useAppSelector(userSelectors.info);
  const {logout} = useActionCreators(userActions);
  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

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
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      {authorizationStatus ? (
                        <>
                          <span className="header__user-name user__name">{user?.email}</span>
                          <span className="header__favorite-count">0</span>
                        </>)
                        : <span className="header__login">Sign in</span>}
                    </Link>
                  </li>

                  {authorizationStatus && (
                    <li className="header__nav-item">
                      <Link className="header__nav-link"
                        to={pathName}
                        onClick={handleLogout}
                      >
                        <span className="header__signout">Sign out</span>
                      </Link>
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
