function MainContent() {
  return (
    <div>
      <div className="text__lg text__center">
        <div>
          <input type="text" placeholder="Search" />
          <i class="fa-solid fa-filter"></i>
        </div>
        <div className="note__input">
          <input type="text" placeholder="Title" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Body of the Note"></textarea>
          <div className="text__md">
            <i class="fa-solid fa-palette"></i>
            <i class="fa-solid fa-tag"></i>
            <i class="fa-solid fa-box-archive"></i>
            <i class="fa-solid fa-trash"></i>
            <button className="btn btn__primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { MainContent }
