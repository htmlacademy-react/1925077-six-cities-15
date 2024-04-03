import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';
import {AppRoute} from '../../../types/routes';
import {PageMain} from '../../../pages/page-main/page-main';
import {Page404} from '../../../pages/page-404/page-404';
import {PageFavorites} from '../../../pages/page-favorites/page-favorites';
import {PageLogin} from '../../../pages/page-login/page-login';
import {ProtectedRoute} from '../private-route/private-route';
import {Layout} from '../layout/layout';
import {PageOffer} from '../../../pages/page-offer/page-offer';
import {CITIES} from '../../../consts/common-consts';
// import {useAuth} from '../../../hooks/use-auth';
import {getToken} from '../../../services/token';
import {useEffect} from 'react';
import {checkAuth} from '../../../redux/thunks/auth-thunk';

function App() {
  // const authorizationStatus = useAuth();

  const token = getToken();

  useEffect(() => {
    if (token) {
      checkAuth();
    }
  });

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
              <ProtectedRoute>
                <PageFavorites />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={
              <ProtectedRoute onlyAuth>
                <PageLogin />
              </ProtectedRoute>
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
