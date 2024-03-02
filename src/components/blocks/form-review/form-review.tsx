import {useState} from 'react';
import {RatingInput} from '../rating-input/rating-input';

export function FormReview() {
  const [formData, setFormData] = useState({
    rating: 0,
    review: '',
  });

  const ratingChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = evt.target;
    setFormData({...formData, rating: Number(value)});
  };

  const fieldChangeHandler = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingInput onChange={ratingChangeHandler}/>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.review}
        onChange={fieldChangeHandler}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}
