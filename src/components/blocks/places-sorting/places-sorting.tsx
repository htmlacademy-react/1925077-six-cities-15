import {useEffect} from 'react';
import {useBoolean} from '../../../hooks/use-boolean';
import {SortOption} from '../../../types/common-types';
import {SORT_OPTIONS} from '../../../consts/common-consts';
import classNames from 'classnames';

interface PlacesSortingProps {
  current: SortOption;
  setter: (option: SortOption) => void;
}

export function PlacesSorting({current, setter}: PlacesSortingProps) {
  const {isOn, off, toggle} = useBoolean(false);

  useEffect(() => {
    if (isOn) {
      const onEscKeyDown = (evt: KeyboardEvent) => {
        if (evt.key === 'Escape') {
          evt.preventDefault();
          off();
        }
      };

      const handleClickOutside = (evt: MouseEvent) => {
        const target = evt.target as HTMLElement;
        const sortingElement = document.querySelector('.places__sorting');

        if (sortingElement && !sortingElement.contains(target)) {
          off();
        }
      };
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', onEscKeyDown);

      return () => {
        document.removeEventListener('click', handleClickOutside);
        document.removeEventListener('keydown', onEscKeyDown);
      };
    }
  }, [isOn, off]);

  const selectedOption = SORT_OPTIONS[current];

  return (
    <form className="places__sorting" action="#" method="get" onClick={toggle}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        &nbsp;{selectedOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={classNames('places__options', 'places__options--custom', { 'places__options--opened': isOn })}
      >
        {SORT_OPTIONS.map((option, index) => (
          <li
            key={option}
            className={`places__option ${option === selectedOption ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => setter(index)}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
}
