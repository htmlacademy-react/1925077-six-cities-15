export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  FavoritesEmpty = '/favorites-empty',
  Offer = '/offer/:id',
  NotFound = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export type AppRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
  isReverse?: boolean;
}

// ? ? ? где и как будет получать статус авторизации, то есть оставлять эту функцию здесь, или перенести в моки
export const getAuthorizationStatus = () => AuthorizationStatus.Auth;
