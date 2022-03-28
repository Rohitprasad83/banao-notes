import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar text__lg">
      <div className="sidebar__items">
        <i className="fa-solid fa-house"></i>Home
      </div>
      <div className="sidebar__items">
        <i class="fa-solid fa-tag"></i>Tags
      </div>
      <div className="sidebar__items">
        <i class="fa-solid fa-box-archive"></i> Archive
      </div>
      <div className="sidebar__items">
        <i class="fa-solid fa-trash"></i> Trash
      </div>
      <div className="sidebar__items">
        <i class="fa-solid fa-user"></i> Profile
      </div>
    </div>
  )
}

export { Sidebar }
