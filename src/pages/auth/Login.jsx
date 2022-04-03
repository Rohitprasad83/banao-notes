import { Link } from 'react-router-dom'
import authStyle from './auth.module.css'
export function Login() {
  return (
    <div>
      <form className={`form__group ${authStyle['form__group']}`}>
        <h4 className={authStyle['heading']}>Login</h4>
        <label htmlFor="username">Email</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your email"
          className={`form__group__input ${authStyle['input']}`}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          className={`form__group__input ${authStyle['input']}`}
        />
        <div className={`form__bottom ${authStyle['form__bottom']}`}>
          <label className="text__md">
            <input type="checkbox" />
            Remember me
          </label>
          <span className="forgot__password text__bold text__md">
            Forgot your password?
          </span>
        </div>
        <button className={`"btn btn__warning ${authStyle['login']}`}>
          <i className="fas fa-sign-in-alt login__icon"></i>
          Login
        </button>
        <div className="register text__center">
          <Link to="/signup"> Create a new account </Link>
        </div>
      </form>
    </div>
  )
}
