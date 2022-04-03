import { Link } from 'react-router-dom'
import authStyle from './auth.module.css'
export function Signup() {
  return (
    <div>
      <form className={`form__group ${authStyle['form__group']}`}>
        <h4 className={authStyle['heading']}>Sign up</h4>
        <div className="form__name">
          <label htmlFor="first__name">
            First Name
            <input
              type="text"
              id="first__name"
              name="first__name"
              className={`form__group__input ${authStyle['input']}`}
            />
          </label>
          <label htmlFor="last__name">
            Last Name
            <input
              type="text"
              id="last__name"
              name="last__name"
              className={`form__group__input ${authStyle['input']}`}
            />
          </label>
        </div>
        <label htmlFor="username">
          Email
          <input
            type="text"
            id="username"
            name="username"
            className={`form__group__input ${authStyle['input']}`}
          />
        </label>
        <label htmlFor="pass">
          Password
          <input
            type="password"
            id="pass"
            name="pass"
            className={`form__group__input ${authStyle['input']}`}
          />
        </label>

        <label htmlFor="confirm__password">
          Confirm Password
          <input
            type="password"
            id="confirm__password"
            name="confirm__password"
            className={`form__group__input ${authStyle['input']}`}
          />
        </label>
        <label>
          <input type="checkbox" className="show__password text__md" /> Show
          Password
        </label>
        <div className="form__bottom">
          <label className="text__md">
            <input type="checkbox" />I accept all terms & conditions
          </label>
        </div>
        <button className={`"btn btn__warning ${authStyle['login']}`}>
          Create a new Account
        </button>
        <div className="register text__center">
          <Link to="/login"> Already have an account </Link>
        </div>
      </form>
    </div>
  )
}
