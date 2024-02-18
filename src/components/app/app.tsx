import {PageMain} from '../../pages/page-main/page-main';
import {pageMain} from '../../mock/common-mock';

function App() {
  return <PageMain placesCount={pageMain.PlacesCount} />;
}

export {App};
