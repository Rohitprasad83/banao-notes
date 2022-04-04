import { useReducer, useState } from 'react'
import { createNoteReducer } from 'reducer/createNoteReducer'
import axios from 'axios'

function MainContent() {
  const [note, noteDispatch] = useReducer(createNoteReducer, {
    title: '',
    body: '',
    color: '',
    archive: false,
    pinned: false,
  })
  const [showPalette, setShowPalette] = useState(false)
  const colors = ['red', 'blue', 'green', 'yellow', 'black']
  const encodedToken = localStorage.getItem('token')
  const saveNoteHandler = async e => {
    e.preventDefault()
    console.log('submitted')
    try {
      const response = await axios.post(
        '/api/notes',
        {
          note,
        },
        {
          headers: { authorization: encodedToken },
        }
      )
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <div className="text__lg text__center notes__container">
        <div className="new__note">
          <button className="btn btn__warning">Create a New Note</button>
        </div>
        <div className="notes__container">
          <div
            className="note__input"
            style={{ backgroundColor: note.color.color }}>
            <input
              type="text"
              placeholder="Title"
              className="input__title"
              onChange={e =>
                noteDispatch({ type: 'TITLE', payload: e.target.value })
              }
            />
            <textarea
              cols="30"
              rows="10"
              placeholder="Body of the Note"
              className="input__body"
              onChange={e =>
                noteDispatch({ type: 'BODY', payload: e.target.value })
              }></textarea>
            <div className="text__lg input__bottom">
              <i
                className="fa-solid fa-palette input__icons palette__container"
                onClick={() => setShowPalette(!showPalette)}></i>
              {showPalette && (
                <div className="palette">
                  {colors.map((color, index) => (
                    <div
                      className="palette__color"
                      key={index}
                      style={{ backgroundColor: color }}
                      onClick={e =>
                        noteDispatch({ type: 'COLOR', payload: { color } })
                      }></div>
                  ))}
                </div>
              )}
              <i className="fa-solid fa-tag input__icons"></i>
              <i
                className="fa-solid fa-box-archive input__icons"
                style={{ color: note.archive ? 'var(--warning)' : 'black' }}
                onClick={e => noteDispatch({ type: 'ARCHIVE' })}></i>
              <i className="fa-solid fa-trash input__icons"></i>
              <button className="btn btn__warning" onClick={saveNoteHandler}>
                Save
              </button>
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
