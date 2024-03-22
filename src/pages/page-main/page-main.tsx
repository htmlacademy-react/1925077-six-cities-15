import {Cities} from '../../components/blocks/cities/cities';
import {Tabs} from '../../components/blocks/tabs/tabs';
import {useAppSelector} from '../../hooks/redux-hooks';
import {offerSelectors} from '../../redux/slices';

function PageMain() {
  const activeCity = useAppSelector(offerSelectors.city);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs activeTab={activeCity}/>
      <Cities selectedCity={activeCity}/>
    </main>
  );
}

export {PageMain};
