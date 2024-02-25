import {Navigate} from 'react-router-dom';
import {AppRoute, AppRouteProps, AuthorizationStatus} from '../../../types/routes';

export function PrivateRoute({authorizationStatus, children}: AppRouteProps) {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
