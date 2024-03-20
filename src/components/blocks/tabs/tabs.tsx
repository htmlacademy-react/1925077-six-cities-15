import classNames from 'classnames';
import {NAMES_OF_CITIES} from '../../../consts/common-consts';
import {CityName} from '../../../types/common-types';
import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../../hooks/redux-toolkit-hooks';
import {changeCity} from '../../../redux-toolkit/reducer';

type TabProps = {
  city: CityName;
  isActive: boolean;
};

interface TabsProps {
  activeTab: string | null;
}

function Tab(props: TabProps) {
  const dispatch = useAppDispatch();
  const className = classNames('locations__item-link tabs__item', {
    'tabs__item--active': props.isActive,
  });

  return (
    <li className="locations__item">
      <Link to='/' className={className} onClick={() => dispatch(changeCity(props.city))}>
        <span>{props.city}</span>
      </Link>
    </li>
  );
}

export function Tabs({activeTab}: TabsProps) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {NAMES_OF_CITIES.map((city) => (
            <Tab
              key={city}
              city={city}
              isActive={city === activeTab}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
