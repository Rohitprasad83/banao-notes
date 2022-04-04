import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNote } from 'context/index'
import { Note } from './Note'
function MainContent() {
  const { note, noteDispatch, notes, setNotes } = useNote()
  const [showPalette, setShowPalette] = useState(false)
  const [createNote, setCreateNote] = useState(false)
  const colors = ['red', 'blue', 'green', 'yellow', 'black']
  const encodedToken = localStorage.getItem('token')
  const saveNoteHandler = async e => {
    e.preventDefault()
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
      setNotes(response.data.notes)
      setShowPalette(false)
      response.status === 201 && noteDispatch({ type: 'RESET' })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    ;(async () => {
      try {
        const response = await axios.get('/api/notes', {
          headers: { authorization: encodedToken },
        })
        console.log('from useEffect', response)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [notes])
  return (
    <div>
      <div className="text__lg text__center notes__container">
        <div className="new__note">
          <button
            className="btn btn__warning"
            onClick={() => setCreateNote(true)}>
            Create a New Note
          </button>
        </div>
        <div className="notes__container">
          {createNote && (
            <div
              className="note__input"
              style={{ backgroundColor: note.color.color }}>
              <input
                type="text"
                placeholder="Title"
                className="input__title"
                value={note.title}
                onChange={e =>
                  noteDispatch({ type: 'TITLE', payload: e.target.value })
                }
              />
              <textarea
                cols="30"
                rows="10"
                placeholder="Body of the Note"
                className="input__body"
                value={note.body}
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
                    <div>
                      <i
                        className="fa-solid fa-x cursor-pointer"
                        onClick={() => setShowPalette(false)}></i>
                    </div>
                  </div>
                )}
                <i className="fa-solid fa-tag input__icons"></i>
                <i
                  className="fa-solid fa-box-archive input__icons"
                  style={{ color: note.archive ? 'var(--warning)' : 'black' }}
                  onClick={e => noteDispatch({ type: 'ARCHIVE' })}></i>
                <i
                  className="fa-solid fa-trash input__icons"
                  onClick={e => noteDispatch({ type: 'RESET' })}></i>
                <button className="btn btn__warning" onClick={saveNoteHandler}>
                  Save
                </button>
                <button
                  className="btn btn__error"
                  onClick={() => setCreateNote(false)}>
                  Close
                </button>
              </div>
            </div>
          )}
          {notes.map(({ _id, title, body, color }) => (
            <Note key={_id} id={_id} title={title} body={body} color={color} />
          ))}
        </div>
      </div>
    </div>
  )
}

export { MainContent }
