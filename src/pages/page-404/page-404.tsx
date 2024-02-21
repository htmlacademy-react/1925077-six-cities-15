import {Link} from 'react-router-dom';
import {AppRoute} from '../../types/routes';
import './page-404.css';

export function Page404 () {
  return (
    <div className="page-404">
      <h1 className="page-404__title">404. Page not found</h1>
      <Link className="page-404__link" to={AppRoute.Main}>Go to main page</Link>
    </div>
  );
}
