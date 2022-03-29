function Navbar({ openSidebar, setOpenSidebar }) {
  return (
    <nav className="navbar simple">
      <span className="hamburger" onClick={() => setOpenSidebar(!openSidebar)}>
        <i className="fa-solid fa-bars"></i>
      </span>
      <h3 className="navbar__header">Banao Notes</h3>
      <ul className="navbar__list">
        <li className="navbar__list__items">Home</li>
        <li className="navbar__list__items">Profile</li>
      </ul>
    </nav>
  )
}

export { Navbar }
