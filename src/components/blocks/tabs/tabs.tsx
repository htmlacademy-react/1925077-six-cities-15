import {useState} from 'react';
import classNames from 'classnames';
import {NAMES_OF_CITIES} from '../../../mock/common-mock';
import {CityName} from '../../../types/common-types';
import {Link} from 'react-router-dom';

type TabProps = {
  city: CityName;
  isActive: boolean;
  onClick: () => void;
};

export function Tab(props: TabProps) {
  const className = classNames('locations__item-link tabs__item', {
    'tabs__item--active': props.isActive,
  });

  return (
    <li className="locations__item">
      <Link to='/' className={className} onClick={props.onClick}>
        <span>{props.city}</span>
      </Link>
    </li>
  );
}

export function Tabs() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const handleTabClick = (city: string) => {
    setActiveTab(city === activeTab ? null : city);
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {NAMES_OF_CITIES.map((city) => (
            <Tab
              key={city}
              city={city}
              isActive={city === activeTab}
              onClick={() => handleTabClick(city)}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
