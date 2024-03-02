import {Fragment} from 'react';

const VALUES = [
  {title: 'perfect', value: 5},
  {title: 'good', value: 4},
  {title: 'not bad', value: 3},
  {title: 'badly', value: 2},
  {title: 'terribly', value: 1},
];


export function RatingInput({onChange}: {onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void}) {
  return (
    <div className="reviews__rating-form form__rating">
      {VALUES.map(({title, value}) => (
        <Fragment key={value}>
          <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio" onChange={onChange}/>
          <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </Fragment>
      ))}
    </div>
  );
}
