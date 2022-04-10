import { useState } from 'react'
import { useNote, useAuth } from 'context/index'
import axios from 'axios'
import { colors } from './colors'
import { successToast, errorToast } from 'components/toast/toasts'
import { getCurrentDate } from 'utils/getCurrentDate'
function MainContent() {
  const { note, noteDispatch, notes, setNotes } = useNote()
  const [showPalette, setShowPalette] = useState(false)
  const [showTags, setShowTags] = useState(false)

  const [createNote, setCreateNote] = useState(false)

  const { encodedToken } = useAuth()

  const saveNoteHandler = async e => {
    e.preventDefault()
    if (allFieldsAreFilled) {
      try {
        const response = await axios.post(
          '/api/notes',
          {
            note: { ...note, createdOn: getCurrentDate() },
          },
          {
            headers: { authorization: encodedToken },
          }
        )
        setNotes(response.data.notes)
        setShowPalette(false)
        response.status === 201 && noteDispatch({ type: 'RESET' })
        successToast('You have successfully saved the note!')
      } catch (err) {
        errorToast('Something went wrong, Please try again!')
      }
    } else {
      errorToast('Please fill all the fields')
    }
  }
  const allFieldsAreFilled = note.title !== '' && note.body !== ''
  return (
    <div>
      <div className="text__lg text__center">
        <div className="new__note">
          <button
            className="btn btn__warning"
            onClick={() => setCreateNote(true)}>
            Create a New Note
          </button>
        </div>

        {createNote && (
          <div className="note__input" style={{ backgroundColor: note.color }}>
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
                        noteDispatch({
                          type: 'COLOR',
                          payload: { color },
                        })
                      }></div>
                  ))}
                  <div>
                    <i
                      className="fa-solid fa-x cursor-pointer"
                      onClick={() => setShowPalette(false)}></i>
                  </div>
                </div>
              )}
              <i
                className="fa-solid fa-tag input__icons"
                onClick={() => setShowTags(!showTags)}></i>
              {showTags && (
                <div className="palette">
                  <div className="text__md">
                    Add Tag
                    <input
                      type="text"
                      className="tags"
                      placeholder="Tag"
                      value={note.tags}
                      onChange={e =>
                        noteDispatch({
                          type: 'TAGS',
                          payload: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <i
                      className="fa-solid fa-x cursor-pointer"
                      onClick={() => setShowTags(false)}></i>
                  </div>
                </div>
              )}
              <i
                className="fa-solid fa-box-archive input__icons"
                style={{ color: note.archive ? 'var(--warning)' : 'black' }}
                onClick={e => noteDispatch({ type: 'ARCHIVE' })}></i>
              <i
                className="fa-solid fa-trash input__icons"
                onClick={e => noteDispatch({ type: 'RESET' })}></i>
              <i
                className="fa-solid fa-check cursor-pointer"
                onClick={saveNoteHandler}></i>
              <i
                className="fa-solid fa-x cursor-pointer"
                onClick={() => setCreateNote(false)}></i>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export { MainContent }
