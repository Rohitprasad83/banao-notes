import { useNote } from 'context/index'
import axios from 'axios'
import { useState, useReducer } from 'react'
import { createNoteReducer } from 'reducer/createNoteReducer'

export const Note = note => {
  const {
    note: { _id, title, body, color },
  } = note
  const encodedToken = localStorage.getItem('token')
  const { setNotes } = useNote()
  const [openEdit, setOpenEdit] = useState(false)
  const [showPalette, setShowPalette] = useState(false)
  const colors = ['red', 'blue', 'green', 'yellow', 'black']
  const [editNote, editNoteDispatch] = useReducer(createNoteReducer, {
    _id: _id,
    title: title,
    body: body,
    color: color,
  })
  const deleteNoteHandler = async e => {
    e.preventDefault()
    try {
      const response = await axios.delete(`/api/notes/${_id}`, {
        headers: { authorization: encodedToken },
      })
      console.log(response)
      setNotes(response.data.notes)
    } catch (err) {
      console.log(err)
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
      console.log(response)
      setOpenEdit(false)
      setNotes(response.data.notes)
    } catch (err) {
      console.log(err)
    }
  }
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
            <i className="fa-solid fa-box-archive input__icons"></i>
            <i
              className="fa-solid fa-trash input__icons"
              onClick={deleteNoteHandler}></i>
            <button className="btn btn__warning" onClick={editNoteHandler}>
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
            <i className="fa-solid fa-box-archive input__icons"></i>
            <i
              className="fa-solid fa-trash input__icons"
              onClick={deleteNoteHandler}></i>
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
