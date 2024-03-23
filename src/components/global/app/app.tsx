import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';
import {AppRoute, getAuthorizationStatus} from '../../../types/routes';
import {PageMain} from '../../../pages/page-main/page-main';
import {Page404} from '../../../pages/page-404/page-404';
import {PageFavorites} from '../../../pages/page-favorites/page-favorites';
import {PageLogin} from '../../../pages/page-login/page-login';
import {PrivateRoute} from '../private-route/private-route';
import {Layout} from '../layout/layout';
import {PageOffer} from '../../../pages/page-offer/page-offer';
import {CITIES} from '../../../consts/common-consts';

function App() {
  const authorizationStatus = getAuthorizationStatus();

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout/>}>
          <Route
            element={<Navigate to={CITIES[0].name} />} index
            path={AppRoute.Main}
          />
          {CITIES.map((city) => (
            <Route
              key={city.name}
              path={`/${city.name}`}
              element={<PageMain selectedCity={city.name}/>}
            />
          ))}
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <PageFavorites />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus} isReverse>
                <PageLogin />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<PageOffer />}
          />
        </Route>
        <Route
          path={AppRoute.NotFound}
          element={<Page404 />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export {App};
