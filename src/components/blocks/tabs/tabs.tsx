import classNames from 'classnames';
import {CITIES} from '../../../consts/common-consts';
import {CityName} from '../../../types/common-types';
import {NavLink} from 'react-router-dom';

type TabProps = {
  city: CityName;
  isActive: boolean;
};

interface TabsProps {
  activeTab: CityName;
}

function Tab(props: TabProps) {
  const className = classNames('locations__item-link tabs__item', {
    'tabs__item--active': props.isActive,
  });

  return (
    <li className="locations__item">
      <NavLink
        to={`/${props.city}`}
        className={className}
      >
        <span>{props.city}</span>
      </NavLink>
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
              key={city.id}
              city={city.name}
              isActive={city.name === activeTab}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
