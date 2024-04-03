import {FormEvent, ReactEventHandler, useState} from 'react';
import {useActionCreators} from '../../hooks/redux-hooks';
import {userActions} from '../../redux/slices/user-slice';
import {Link} from 'react-router-dom';

type HTMLLoginFormElement = HTMLFormElement & {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

type ChangeHandler = ReactEventHandler<HTMLInputElement> | HTMLTextAreaElement;

function PageLogin() {
  const [formData, setFormData] = useState({email: '', password: ''});
  const {login} = useActionCreators(userActions);

  const handleChange: ChangeHandler = (evt) => {
    const {name, value} = evt.currentTarget;
    setFormData({...formData, [name]: value});
  };

  function handleSubmit(evt: FormEvent<HTMLLoginFormElement>) {
    evt.preventDefault();
    login(formData);
  }

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                className="login__input form__input" type="email" name="email" placeholder="Email" required
                pattern="^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$"
                onChange={handleChange}
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input" type="password" name="password" placeholder="Password" required
                pattern="^(?=.*[a-zA-Z])(?=.*\d).+$"
                title="Password must contain at least one letter and one number"
                onChange={handleChange}
              />
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to={'/Amsterdam'}>
              <span>Amsterdam</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export {PageLogin};
