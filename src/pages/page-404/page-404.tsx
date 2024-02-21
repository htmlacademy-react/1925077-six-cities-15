import {Link} from 'react-router-dom';
import {AppRoute} from '../../types/routes';
import './page-404.css';
import {Helmet} from 'react-helmet-async';

export function Page404 () {
  return (
    <div className="page-404">
      <Helmet><title>6 cities. Page not found</title></Helmet>
      <h1 className="page-404__title">404. Page not found</h1>
      <Link className="page-404__link" to={AppRoute.Main}>Go to main page</Link>
    </div>
  );
}
