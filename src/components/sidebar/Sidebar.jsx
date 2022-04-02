import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar text__lg">
      <div className="sidebar__items">
        <i className="fa-solid fa-house"></i>Home
      </div>
      <div className="sidebar__items">
        <i className="fa-solid fa-tag"></i>Tags
      </div>
      <div className="sidebar__items">
        <i className="fa-solid fa-box-archive"></i> Archive
      </div>
      <div className="sidebar__items">
        <i className="fa-solid fa-trash"></i> Trash
      </div>
      <div className="sidebar__items">
        <i className="fa-solid fa-user"></i> Profile
      </div>
      <div className="sidebar__items ">
        <i className="fa-solid fa-filter input__icons"></i>
        <span> Sort By and Filters </span>
      </div>
      <div className="sidebar__items font__bold">Sort By</div>
      <div className="sidebar__items text__md">
        <input type="radio" name="sortBy" id="Newest First" />
        <label htmlFor="Newest First">Newest first</label>
      </div>
      <div className="sidebar__items text__md">
        <input type="radio" name="sortBy" id="Oldest First" />
        <label htmlFor="Oldest First">Oldest First</label>
      </div>
      <div className="sidebar__items font__bold">Filter By</div>
      <div className="sidebar__items text__md">
        <input type="checkbox" name="sortBy" id="Label 1" />
        <label htmlFor="Label 1">Label 1</label>
      </div>
      <div className="sidebar__items text__md">
        <input type="checkbox" name="sortBy" id="Label 2" />
        <label htmlFor="Label 2">Label 2</label>
      </div>
      <div className="sidebar__items text__md">
        <input type="checkbox" name="sortBy" id="Label 3" />
        <label htmlFor="Label 3">Label 3</label>
      </div>
      <div className="sidebar__items text__md">
        <input type="checkbox" name="sortBy" id="Label 4" />
        <label htmlFor="Label 4">Label 4</label>
      </div>
      <div className="sidebar__items text__md">
        <input type="checkbox" name="sortBy" id="Label 5" />
        <label htmlFor="Label 5">Label 5</label>
      </div>
    </div>
  )
}

export { Sidebar }
