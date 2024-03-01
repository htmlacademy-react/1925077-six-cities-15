import {Cities} from '../../components/blocks/cities/cities';
import {Tabs} from '../../components/blocks/tabs/tabs';
import {PAGEMAIN} from '../../mock/common-mock';

function PageMain() {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs/>
      <Cities placesCount={PAGEMAIN.placesCount}/>
    </main>
  );
}

export {PageMain};
