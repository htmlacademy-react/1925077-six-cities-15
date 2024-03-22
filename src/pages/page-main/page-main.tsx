import {Cities} from '../../components/blocks/cities/cities';
import {Tabs} from '../../components/blocks/tabs/tabs';
import {useAppSelector} from '../../hooks/redux-hooks';

function PageMain() {
  const activeCity = useAppSelector((state) => state.city);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs activeTab={activeCity}/>
      <Cities selectedCity={activeCity}/>
    </main>
  );
}

export {PageMain};
