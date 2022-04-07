import { useEffect } from 'react'
import { useNote, useAuth } from 'context/index'
import axios from 'axios'
import { useState, useReducer } from 'react'
import { createNoteReducer } from 'reducer/createNoteReducer'
import { colors } from './colors'
import { successToast, errorToast } from 'components/toast/toasts'
import { useLocation } from 'react-router-dom'
export const Note = (note, props) => {
  const {
    note: { _id, title, body, color },
  } = note
  const { setNotes, setArchiveNotes, trash, setTrash } = useNote()
  const { encodedToken } = useAuth()
  const [openEdit, setOpenEdit] = useState(false)
  const [showPalette, setShowPalette] = useState(false)
  const [editNote, editNoteDispatch] = useReducer(createNoteReducer, {
    _id: _id,
    title: title,
    body: body,
    color: color,
  })

  const location = useLocation()
  const deleteNoteHandler = async e => {
    e.preventDefault()
    try {
      const response = await axios.delete(`/api/notes/${_id}`, {
        headers: { authorization: encodedToken },
      })
      setNotes(response.data.notes)
      setTrash([...trash, note])
      successToast('Successfully deleted the note')
    } catch (err) {
      errorToast('Could not delete the note, please try again!')
    }
  }

  const deleteArchiveNoteHandler = async e => {
    e.preventDefault()
    try {
      const response = await axios.delete(`/api/archives/delete/${_id}`, {
        headers: { authorization: encodedToken },
      })
      setArchiveNotes(response.data.archives)
      setTrash([...trash, ...note])
      successToast('Successfully deleted the note')
    } catch (err) {
      errorToast('Could not delete the note, please try again!')
    }
  }
  const archiveNoteHandler = async e => {
    e.preventDefault()
    try {
      const response = await axios.post(
        `/api/notes/archives/${_id}`,
        { note },
        { headers: { authorization: encodedToken } }
      )
      setNotes(response.data.notes)
      successToast('Note has been successfully archived')
    } catch (error) {
      successToast('Note was not archived, Please try again!')
    }
  }
  const editNoteHandler = async e => {
    e.preventDefault()
    try {
      const response = await axios.post(
        `/api/notes/${_id}`,
        {
          note: editNote,
        },
        {
          headers: { authorization: encodedToken },
        }
      )
      successToast('You have Successfully Edited the note')
      setOpenEdit(false)
      setNotes(response.data.notes)
    } catch (err) {
      errorToast('Could not Edit the note, please try again!')
    }
  }

  const restoreNoteHandler = async e => {
    e.preventDefault()
    try {
      const response = await axios.post(
        `/api/archives/restore/${_id}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      )
      successToast('You have Successfully restored the note')
      setNotes(response.data.notes)
      setArchiveNotes(response.data.archives)
    } catch (err) {
      errorToast('Could not restore the note, please try again!')
    }
  }

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
          <div className="text__lg note__bottom">
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
            <i className="fa-solid fa-tag input__icons"></i>
            <i
              className="fa-solid fa-box-archive input__icons"
              onClick={archiveNoteHandler}></i>
            <i
              className="fa-solid fa-trash input__icons"
              onClick={
                location.pathname === '/home'
                  ? deleteNoteHandler
                  : deleteArchiveNoteHandler
              }></i>
            <button
              className="btn btn__warning"
              onClick={editNoteHandler}
              disabled={!allFieldsAreFilled}>
              Save
            </button>
            <button
              className="btn btn__error"
              onClick={() => setOpenEdit(false)}>
              Close
            </button>
          </div>
        </div>
      ) : (
        <div className="note" style={{ backgroundColor: color }}>
          <div className="note__title">{title}</div>
          <div className="note__body">{body}</div>
          <div className="text__lg note__bottom">
            <i className="fa-solid fa-palette input__icons"></i>
            <i className="fa-solid fa-tag input__icons"></i>
            <i
              className="fa-solid fa-box-archive input__icons"
              onClick={
                location.pathname === '/home'
                  ? archiveNoteHandler
                  : restoreNoteHandler
              }></i>
            <i
              className="fa-solid fa-trash input__icons"
              onClick={
                location.pathname === '/home'
                  ? deleteNoteHandler
                  : deleteArchiveNoteHandler
              }></i>
            <button className="btn btn__warning">Save</button>
            <button
              className="btn btn__error"
              onClick={() => setOpenEdit(true)}>
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
