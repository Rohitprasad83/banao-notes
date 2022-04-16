import { useAuth } from 'context'
import { Link } from 'react-router-dom'
import { successToast } from 'components/toast/toasts'

function Navbar({ openSidebar, setOpenSidebar }) {
  const { encodedToken, setEncodedToken } = useAuth

  const logout = () => {
    localStorage.removeItem('token')
    setEncodedToken(null)
    successToast('You have been successfully Logged Out.')
  }
  return (
    <nav className="navbar simple">
      <span className="hamburger" onClick={() => setOpenSidebar(!openSidebar)}>
        <i className="fa-solid fa-bars"></i>
      </span>
      <h3 className="navbar__header cursor__pointer">
        <Link to="/">Notes Banao</Link>
      </h3>
      <ul className="navbar__list">
        <li className="navbar__list__items">
          <Link to="/home">Home </Link>
        </li>
        <li className="navbar__list__items">
          {encodedToken !== null ? (
            <Link to="/" onClick={logout}>
              Logout
            </Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  )
}

export { Navbar }
