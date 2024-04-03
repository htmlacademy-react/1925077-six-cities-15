import { ReactNode } from 'react';
import { userSelectors } from '../../../redux/slices/user-slice';
import { AppRoute } from '../../../types/routes';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux-hooks';

type ProtectedRouteProps = {
  children: ReactNode;
  onlyAuth?: boolean;
};

type FromState = {
  from?: { pathname: string };
};

export function ProtectedRoute({ children, onlyAuth }: ProtectedRouteProps) {
  const location = useLocation();
  const user = useAppSelector(userSelectors.info);

  if (onlyAuth && user) {
    const from = (location.state as FromState)?.from?.pathname || AppRoute.Main;
    return <Navigate to={from} />;
  }

  if (!onlyAuth && !user) {
    return <Navigate state={{ from: location }} to={AppRoute.Login} />;
  }

  return children;
}
