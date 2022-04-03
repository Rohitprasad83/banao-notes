function MainContent() {
  return (
    <div>
      <div className="text__lg text__center notes__container">
        <div className="new__note">
          <button className="btn btn__warning">Create a New Note</button>
        </div>
        <div className="notes__container">
          <div className="note__input">
            <input type="text" placeholder="Title" className="input__title" />
            <textarea
              cols="30"
              rows="10"
              placeholder="Body of the Note"
              className="input__body"></textarea>
            <div className="text__lg input__bottom">
              <i className="fa-solid fa-palette input__icons"></i>
              <i className="fa-solid fa-tag input__icons"></i>
              <i className="fa-solid fa-box-archive input__icons"></i>
              <i className="fa-solid fa-trash input__icons"></i>
              <button className="btn btn__warning">Save</button>
            </div>
          </div>
          <div className="note">
            <div className="note__title">
              Lorem ipsum dolor sit amet afawafwaffawwjawn
            </div>
            <div className="note__body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              velit consectetur tempore temporibus dolor aperiam amet fuga, illo
              quibusdam laborum deserunt asperiores hic soluta animi iste illum
              eligendi ut assumenda esse est doloremque. A, animi, placeat nisi
              inventore vel corporis sint illo, culpa impedit nesciunt
              temporibus asperiores corrupti aut maxime?
            </div>
            <div className="text__lg note__bottom">
              <i className="fa-solid fa-palette input__icons"></i>
              <i className="fa-solid fa-tag input__icons"></i>
              <i className="fa-solid fa-box-archive input__icons"></i>
              <i className="fa-solid fa-trash input__icons"></i>
              <button className="btn btn__warning">Save</button>
              <button className="btn btn__error">Edit</button>
            </div>
          </div>
          <div className="note">
            <div className="note__title">
              Lorem ipsum dolor sit amet afawafwaffawwjawn
            </div>
            <div className="note__body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              velit consectetur tempore temporibus dolor aperiam amet fuga, illo
              quibusdam laborum deserunt asperiores hic soluta animi iste illum
              eligendi ut assumenda esse est doloremque. A, animi, placeat nisi
              inventore vel corporis sint illo, culpa impedit nesciunt
              temporibus asperiores corrupti aut maxime?
            </div>
            <div className="text__lg note__bottom">
              <i className="fa-solid fa-palette input__icons"></i>
              <i className="fa-solid fa-tag input__icons"></i>
              <i className="fa-solid fa-box-archive input__icons"></i>
              <i className="fa-solid fa-trash input__icons"></i>
              <button className="btn btn__warning">Save</button>
              <button className="btn btn__error">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { MainContent }
