import {useState} from 'react';
import {Cities} from '../../components/blocks/cities/cities';
import {Tabs} from '../../components/blocks/tabs/tabs';
import {PAGEMAIN} from '../../mock/common-mock';
import {START_CITY} from './const';

const PLACES = PAGEMAIN.placesCount;

function PageMain() {
  const [activeTab, setActiveTab] = useState<string>(START_CITY);

  const handleCityChange = (city: string) => {
    setActiveTab(city);
  };

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs activeTab={activeTab} setActiveTab={handleCityChange}/>
      <Cities placesCount={PLACES} selectedCity={activeTab}/>
    </main>
  );
}

export {PageMain};
