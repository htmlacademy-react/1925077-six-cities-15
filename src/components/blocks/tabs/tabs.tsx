import classNames from 'classnames';
import {CITIES} from '../../../consts/common-consts';
import {CityName} from '../../../types/common-types';
import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../../hooks/redux-hooks';
import {changeCity} from '../../../redux/reducer';

type TabProps = {
  city: CityName;
  isActive: boolean;
};

interface TabsProps {
  activeTab: CityName | null;
}

function Tab(props: TabProps) {
  const dispatch = useAppDispatch();
  const className = classNames('locations__item-link tabs__item', {
    'tabs__item--active': props.isActive,
  });

  return (
    <li className="locations__item">
      <Link
        to='/'
        className={className}
        onClick={() => dispatch(changeCity(props.city))}
      >
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
          {CITIES.map((city) => (
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
