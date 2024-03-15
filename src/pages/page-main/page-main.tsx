import {useState} from 'react';
import {Cities} from '../../components/blocks/cities/cities';
import {Tabs} from '../../components/blocks/tabs/tabs';
import {CITIES, PAGEMAIN} from '../../mock/common-mock';
import {CityName} from '../../types/common-types';

function PageMain() {
  const [city, setCity] = useState<CityName>(CITIES[0]);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs city={city} onCitySelect={setCity}/>
      <Cities placesCount={PAGEMAIN.placesCount} city={city}/>
    </main>
  );
}

export {PageMain};
