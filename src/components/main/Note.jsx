import { useNote } from 'context/index'
import axios from 'axios'

export const Note = ({ id, title, body, color }) => {
  const encodedToken = localStorage.getItem('token')
  const { setNotes } = useNote()
  const deleteNoteHandler = async e => {
    e.preventDefault()
    try {
      const response = await axios.delete(`/api/notes/${id}`, {
        headers: { authorization: encodedToken },
      })
      console.log(response)
      setNotes(response.data.notes)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="note" style={{ backgroundColor: color.color }}>
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
