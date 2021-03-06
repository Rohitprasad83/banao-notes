import { useState } from 'react'
import { useNote, useAuth } from 'context/index'
import { colors } from './colors'
import { saveNoteHandler } from 'services/noteServices'
import { useLocation, useNavigate } from 'react-router-dom'
function MainContent() {
  const { note, noteDispatch, notes, setNotes } = useNote()
  const [showPalette, setShowPalette] = useState(false)
  const [showTags, setShowTags] = useState(false)
  const [showPriority, setShowPriority] = useState(false)
  const [createNote, setCreateNote] = useState(false)
  const typeOfTags = [
    'Work',
    'Exercise',
    'Health',
    'School',
    'Teams',
    'Chores',
    'Creativity',
  ]
  const location = useLocation()
  const navigate = useNavigate()
  const { encodedToken } = useAuth()

  const checkLocation = path => {
    path !== '/home' && navigate('/home')
    setCreateNote(true)
  }

  return (
    <div>
      <div className="text__lg text__center">
        <div className="new__note">
          <button
            className="btn btn__warning"
            onClick={() => checkLocation(location.pathname)}>
            Create a New Note
          </button>
        </div>

        {createNote && location.pathname === '/home' && (
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
                className="fa-solid fa-tags input__icons"
                onClick={() => setShowTags(!showTags)}></i>
              {showTags && (
                <div className="tags__input text__md">
                  {typeOfTags.map((item, index) => (
                    <span key={index}>
                      <input
                        type="checkbox"
                        name={item}
                        value={item}
                        id={item}
                        onClick={() =>
                          noteDispatch({ type: 'TAGS', payload: { item } })
                        }
                      />
                      <label htmlFor={item}>{item}</label>
                    </span>
                  ))}
                  <i
                    className="fa-solid fa-check cursor-pointer"
                    onClick={() => setShowTags(false)}></i>
                </div>
              )}
              <i
                className="fa-solid fa-sort input__icons"
                onClick={() => setShowPriority(!showPriority)}></i>
              {showPriority && (
                <div className="priority text__md">
                  <label htmlFor="low">
                    <input
                      type="radio"
                      id="low"
                      name="priority"
                      onClick={() => noteDispatch({ type: 'PRIORITY_LOW' })}
                    />
                    Low
                  </label>
                  <label htmlFor="medium">
                    <input
                      type="radio"
                      id="medium"
                      name="priority"
                      onClick={() => noteDispatch({ type: 'PRIORITY_MED' })}
                    />
                    Medium
                  </label>
                  <label htmlFor="high">
                    <input
                      type="radio"
                      id="high"
                      name="priority"
                      onClick={() => noteDispatch({ type: 'PRIORITY_HIGH' })}
                    />
                    High
                  </label>
                  <i
                    className="fa-solid fa-x cursor-pointer"
                    onClick={() => setShowPriority(false)}></i>
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
                onClick={e =>
                  saveNoteHandler(
                    e,
                    note,
                    setNotes,
                    setShowPalette,
                    noteDispatch,
                    encodedToken
                  )
                }></i>
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
