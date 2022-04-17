import './Sidebar.css'
import { Link } from 'react-router-dom'
import { useFilter } from 'context/index'
function Sidebar() {
  const { filterDispatch } = useFilter()
  const typeOfTags = [
    'Work',
    'Exercise',
    'Health',
    'School',
    'Teams',
    'Chores',
    'Creativity',
  ]
  return (
    <div className="sidebar text__lg">
      <div className="sidebar__items">
        <Link to="/home">
          <i className="fa-solid fa-house"></i>Home
        </Link>
      </div>
      <div className="sidebar__items">
        <Link to="/archive">
          <i className="fa-solid fa-box-archive"></i> Archive
        </Link>
      </div>
      <div className="sidebar__items">
        <Link to="/trash">
          <i className="fa-solid fa-trash"></i> Trash
        </Link>
      </div>
      <div className="sidebar__items">
        <Link to="/profile">
          <i className="fa-solid fa-user"></i> Profile
        </Link>
      </div>
      <div className="sidebar__items ">
        <i className="fa-solid fa-filter input__icons"></i>
        <span> Sort By and Filters </span>
      </div>
      <div className="sidebar__items font__bold">Sort By Time</div>
      <div className="sidebar__items text__md">
        <input
          type="radio"
          name="sortByTime"
          id="Newest First"
          onChange={e => filterDispatch({ type: 'NEWEST_FIRST' })}
        />
        <label htmlFor="Newest First">Newest first</label>
      </div>
      <div className="sidebar__items text__md">
        <input
          type="radio"
          name="sortByTime"
          id="Oldest First"
          onChange={e => filterDispatch({ type: 'OLDEST_FIRST' })}
        />
        <label htmlFor="Oldest First">Oldest First</label>
      </div>
      <div className="sidebar__items font__bold">Filter By Priority</div>
      <div className="sidebar__items text__md">
        <input
          type="checkbox"
          id="sidebar low"
          onChange={e => filterDispatch({ type: 'LOW' })}
        />
        <label htmlFor="sidebar low">Low</label>
      </div>
      <div className="sidebar__items text__md">
        <input
          type="checkbox"
          id="sidebar medium"
          onChange={e => filterDispatch({ type: 'MEDIUM' })}
        />
        <label htmlFor="sidebar medium">Medium</label>
      </div>
      <div className="sidebar__items text__md">
        <input
          type="checkbox"
          id="sidebar high"
          onChange={e => filterDispatch({ type: 'HIGH' })}
        />
        <label htmlFor="sidebar high">High</label>
      </div>
      <div className="sidebar__items font__bold">Filter By Tags</div>
      {typeOfTags.map((tag, index) => {
        return (
          <div className="sidebar__items text__md" key={index}>
            <input
              type="checkbox"
              id={`sidebar ${tag}`}
              onChange={() => filterDispatch({ type: tag })}
            />
            <label htmlFor={`sidebar ${tag}`}>{tag}</label>
          </div>
        )
      })}
    </div>
  )
}

export { Sidebar }
