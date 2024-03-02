import {Navigate} from 'react-router-dom';
import {AppRoute, AppRouteProps, AuthorizationStatus} from '../../../types/routes';

export function PrivateRoute({authorizationStatus, isReverse, children}: AppRouteProps) {
  return (
    authorizationStatus === (isReverse ? AuthorizationStatus.NoAuth : AuthorizationStatus.Auth) ?
      children
      : <Navigate to={!isReverse ? AppRoute.Login : AppRoute.Main} />
  );
}
