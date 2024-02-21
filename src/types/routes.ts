export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer:id',
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
}
