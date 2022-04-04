import { useNote } from 'context/index'
export const Note = ({ title, body, color }) => {
  return (
    <div className="note" style={{ backgroundColor: color.color }}>
      <div className="note__title">{title}</div>
      <div className="note__body">{body}</div>
      <div className="text__lg note__bottom">
        <i className="fa-solid fa-palette input__icons"></i>
        <i className="fa-solid fa-tag input__icons"></i>
        <i className="fa-solid fa-box-archive input__icons"></i>
        <i className="fa-solid fa-trash input__icons"></i>
        <button className="btn btn__warning">Save</button>
        <button className="btn btn__error">Edit</button>
      </div>
    </div>
  )
}
