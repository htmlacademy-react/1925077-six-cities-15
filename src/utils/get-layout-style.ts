import {AppRoute} from '../types/routes';

export const getLayoutStyle = (pathname: AppRoute) => {
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
