import {userSelectors} from '../redux/slices/user-slice';
import {AuthorizationStatus} from '../types/routes';
import {useAppSelector} from './redux-hooks';

export function useAuth() {
  const status = useAppSelector(userSelectors.authStatus);

  return status === AuthorizationStatus.Auth;
}
