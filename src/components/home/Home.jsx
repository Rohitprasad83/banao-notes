import { Navbar } from '../navbar/Navbar.jsx'
import { Sidebar } from '../sidebar/Sidebar.jsx'
import { MainContent } from '../main/MainContent.jsx'
import { useState, useEffect } from 'react'
import './Home.css'
function Home() {
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
            <i className="fa-solid fa-house"></i>
          </div>
          <div className="sidebar__items">
            <i className="fa-solid fa-tag"></i>
          </div>
          <div className="sidebar__items">
            <i className="fa-solid fa-box-archive"></i>
          </div>
          <div className="sidebar__items">
            <i className="fa-solid fa-trash"></i>
          </div>
          <div className="sidebar__items">
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="sidebar__items">
            <i
              className="fa-solid fa-filter input__icons"
              onClick={() => setOpenSidebar(!openSidebar)}></i>
          </div>
        </div>
      )}
      <div className="main__container">
        <MainContent />
      </div>
    </div>
  )
}
export { Home }
