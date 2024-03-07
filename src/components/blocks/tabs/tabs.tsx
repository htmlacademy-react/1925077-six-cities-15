import classNames from 'classnames';
import {NAMES_OF_CITIES} from '../../../mock/common-mock';
import {CityName} from '../../../types/common-types';

export type TabProps = {
  city: CityName;
};

export function Tab(props: TabProps) {
  const className = classNames('locations__item-link tabs__item', {
    // 'tabs__item--active': props.city === isActive,
  });

  return (
    <li className="locations__item">
      <a className={className} href="#">
        <span>{props.city}</span>
      </a>
    </li>
  );
}

export function Tabs() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {NAMES_OF_CITIES.map((city) => (
            <Tab key={city} city={city}/>
          ))}
        </ul>
      </section>
    </div>
  );
}
