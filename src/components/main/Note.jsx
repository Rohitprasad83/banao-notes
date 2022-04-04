import { useNote } from 'context/index'
import axios from 'axios'

export const Note = note => {
  const {
    note: { _id, title, body, color },
  } = note
  const encodedToken = localStorage.getItem('token')
  const { setNotes } = useNote()
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

  //   const editNoteHandler = async e => {
  //     e.preventDefault()
  //     try {
  //       const response = await axios.delete(
  //         `/api/notes/${id}`,
  //         {
  //           note,
  //         },
  //         {
  //           headers: { authorization: encodedToken },
  //         }
  //       )
  //       console.log(response)
  //       setNotes(response.data.notes)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  return (
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
        <button className="btn btn__error">Edit</button>
      </div>
    </div>
  )
}
