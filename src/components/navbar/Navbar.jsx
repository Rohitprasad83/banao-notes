import { Link } from 'react-router-dom'
function Navbar({ openSidebar, setOpenSidebar }) {
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
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  )
}

export { Navbar }
