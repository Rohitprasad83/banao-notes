import { Navbar } from '../navbar/Navbar.jsx'
import { Sidebar } from '../sidebar/Sidebar.jsx'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
function Layout() {
  const [openSidebar, setOpenSidebar] = useState(false)
  useEffect(() => {
    window.onresize = () =>
      window.innerWidth <= 576 ? setOpenSidebar(false) : setOpenSidebar(true)
  }, [])
  return (
    <div className={'home__container'}>
      <Navbar
        className={'navbar'}
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />
      {openSidebar ? (
        <Sidebar
          className="sidebar"
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
        />
      ) : (
        <div className="sidebar text__lg">
          <div className="sidebar__items">
            <Link to="/home">
              <i className="fa-solid fa-house"></i>
            </Link>
          </div>
          <div className="sidebar__items">
            <Link to="/label">
              <i className="fa-solid fa-tag"></i>
            </Link>
          </div>
          <div className="sidebar__items">
            <Link to="/archive">
              <i className="fa-solid fa-box-archive"></i>
            </Link>
          </div>
          <div className="sidebar__items">
            <Link to="/trash">
              <i className="fa-solid fa-trash"></i>
            </Link>
          </div>
          <div className="sidebar__items">
            <Link to="/profile">
              <i className="fa-solid fa-user"></i>
            </Link>
          </div>
          <div className="sidebar__items">
            <i
              className="fa-solid fa-filter input__icons"
              onClick={() => setOpenSidebar(!openSidebar)}></i>
          </div>
        </div>
      )}
    </div>
  )
}
export { Layout }
