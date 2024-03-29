import {Cities} from '../../components/blocks/cities/cities';
import {Tabs} from '../../components/blocks/tabs/tabs';
import { PageMainProps} from '../../types/common-types';

function PageMain({selectedCity}: PageMainProps) {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>

      <Tabs activeTab={selectedCity}/>

      <Cities selectedCity={selectedCity}/>
    </main>
  );
}

export {PageMain};
