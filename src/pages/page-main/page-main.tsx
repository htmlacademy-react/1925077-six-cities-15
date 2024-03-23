import {useLocation} from 'react-router-dom';
import {Cities} from '../../components/blocks/cities/cities';
import {Tabs} from '../../components/blocks/tabs/tabs';
import {CityName, PageMainProps} from '../../types/common-types';

function PageMain({selectedCity}: PageMainProps) {
  const activeCity = useLocation().pathname.slice(1) as CityName;

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>

      <Tabs activeTab={selectedCity}/>

      <Cities selectedCity={activeCity}/>
    </main>
  );
}

export {PageMain};
