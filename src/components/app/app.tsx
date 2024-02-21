import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../types/routes';
import {PageMain} from '../../pages/page-main/page-main';
import {PAGEMAIN} from '../../mock/common-mock';
import {Page404} from '../../pages/page-404/page-404';
import {PageFavorites} from '../../pages/page-favorites/page-favorites';
import {PageLogin} from '../../pages/page-login/page-login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<PageMain placesCount={PAGEMAIN.placesCount} />}
        />
        <Route
          path={AppRoute.Favorites}
          element={<PageFavorites />}
        />
        <Route
          path={AppRoute.Login}
          element={<PageLogin />}
        />
        <Route
          path={AppRoute.NotFound}
          element={<Page404 />}
        />
      </Routes>

    </BrowserRouter>
  );
}

export {App};
