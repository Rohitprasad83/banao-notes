import { useNote, useAuth } from 'context/index'
import { useState, useReducer } from 'react'
import { createNoteReducer } from 'reducer/createNoteReducer'
import { colors } from './colors'
import { useLocation } from 'react-router-dom'
import {
  deleteNoteHandler,
  deleteArchiveNoteHandler,
  archiveNoteHandler,
  restoreNoteHandler,
  editNoteHandler,
} from 'services/noteServices'

export const Note = note => {
  const {
    note: { _id, title, body, color, createdOn, tags, priority },
  } = note
  const { setNotes, setArchiveNotes, trash, setTrash, noteDispatch } = useNote()
  const { encodedToken } = useAuth()
  const [openEdit, setOpenEdit] = useState(false)
  const [showPalette, setShowPalette] = useState(false)
  const [showTags, setShowTags] = useState(false)
  const [showPriority, setShowPriority] = useState(false)

  const [editNote, editNoteDispatch] = useReducer(createNoteReducer, {
    _id: _id,
    title: title,
    body: body,
    color: color,
    tags: tags,
    priority: priority,
  })

  const allTags = tags.join(',')
  const location = useLocation()
  const pathName = location.pathname
  const allFieldsAreFilled = editNote.title !== '' && editNote.body !== ''

  return (
    <div>
      {openEdit ? (
        <div className="note" style={{ backgroundColor: editNote.color }}>
          <input
            type="text"
            placeholder="Title"
            className="input__title"
            value={editNote.title}
            onChange={e =>
              editNoteDispatch({ type: 'TITLE', payload: e.target.value })
            }
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Body of the Note"
            className="input__body"
            value={editNote.body}
            onChange={e =>
              editNoteDispatch({ type: 'BODY', payload: e.target.value })
            }></textarea>
          <div className="text__lg note__buttons">
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
                      editNoteDispatch({
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
                    value={editNote.tags}
                    onChange={e =>
                      editNoteDispatch({
                        type: 'TAGS',
                        payload: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <i
                    className="fa-solid fa-check cursor-pointer"
                    onClick={() => setShowTags(false)}></i>
                </div>
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
                    onClick={() => editNoteDispatch({ type: 'PRIORITY_LOW' })}
                  />
                  Low
                </label>
                <label htmlFor="medium">
                  <input
                    type="radio"
                    id="medium"
                    name="priority"
                    onClick={() => editNoteDispatch({ type: 'PRIORITY_MED' })}
                  />
                  Medium
                </label>
                <label htmlFor="high">
                  <input
                    type="radio"
                    id="high"
                    name="priority"
                    onClick={() => editNoteDispatch({ type: 'PRIORITY_HIGH' })}
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
              onClick={archiveNoteHandler}></i>
            <i
              className="fa-solid fa-trash input__icons"
              onClick={e =>
                pathName === '/home'
                  ? deleteNoteHandler(
                      e,
                      _id,
                      setNotes,
                      setTrash,
                      trash,
                      note,
                      encodedToken
                    )
                  : deleteArchiveNoteHandler(
                      e,
                      _id,
                      note,
                      trash,
                      setArchiveNotes,
                      setTrash,
                      encodedToken
                    )
              }></i>
            <i
              className="fa-solid fa-check cursor-pointer"
              onClick={e =>
                allFieldsAreFilled &&
                editNoteHandler(
                  e,
                  _id,
                  editNote,
                  setOpenEdit,
                  setNotes,
                  encodedToken
                )
              }></i>
            <i
              className="fa-solid fa-x cursor-pointer"
              onClick={() => setOpenEdit(false)}></i>
          </div>
        </div>
      ) : (
        <div className="note" style={{ backgroundColor: color }}>
          <div className="note__title">{title}</div>
          <div className="note__body">{body}</div>
          <div className="text__lg note__bottom">
            <div className="text__md">Created At {createdOn}</div>
            <div className="text__md flex-row">Tags: {allTags}</div>
            <div className="text__md">Priority: {priority}</div>
            <div className="text__lg note__buttons">
              {pathName !== '/trash' && (
                <i
                  className="fa-solid fa-box-archive input__icons"
                  onClick={() =>
                    pathName === '/home'
                      ? archiveNoteHandler(_id, note, setNotes, encodedToken)
                      : restoreNoteHandler(
                          _id,
                          note,
                          setNotes,
                          encodedToken,
                          setArchiveNotes
                        )
                  }></i>
              )}
              {pathName !== '/trash' && (
                <i
                  className="fa-solid fa-trash input__icons"
                  onClick={e =>
                    pathName === '/home'
                      ? deleteNoteHandler(
                          e,
                          _id,
                          setNotes,
                          setTrash,
                          trash,
                          note,
                          encodedToken
                        )
                      : deleteArchiveNoteHandler(
                          e,
                          _id,
                          note,
                          trash,
                          setArchiveNotes,
                          setTrash,
                          encodedToken
                        )
                  }></i>
              )}
              {pathName !== '/trash' && (
                <i
                  className="fa-solid fa-pen-to-square cursor-pointer"
                  onClick={() => setOpenEdit(true)}></i>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
