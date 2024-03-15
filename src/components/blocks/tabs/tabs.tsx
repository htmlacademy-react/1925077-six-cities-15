import classNames from 'classnames';
import {CITIES} from '../../../mock/common-mock';
import {CityName} from '../../../types/common-types';
import {Link} from 'react-router-dom';

interface TabProps {
  city: CityName;
  isActive: boolean;
  onClick: (city: CityName) => void;
}

interface TabsProps {
  city: CityName;
  onCitySelect: (city: CityName) => void;
}

export function Tab({isActive, city, onClick}: TabProps) {
  const className = classNames('locations__item-link tabs__item', {
    'tabs__item--active': isActive,
  });

  return (
    <li className="locations__item">
      <Link to='/' className={className} onClick={isActive ? undefined : onClick}>
        <span>{city}</span>
      </Link>
    </li>
  );
}

export function Tabs({city: cityName, onCitySelect}: TabsProps) {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <Tab
              key={city}
              city={city}
              isActive={cityName === city}
              onClick={onCitySelect}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
