import { createContext, useContext, useState, useReducer } from 'react'
import { createNoteReducer } from 'reducer/createNoteReducer'
import { v4 as uuidv4 } from 'uuid'

const noteContext = createContext()
const useNote = () => useContext(noteContext)

const NoteContextProvider = ({ children }) => {
  const [note, noteDispatch] = useReducer(createNoteReducer, {
    _id: uuidv4(),
    title: '',
    body: '',
    color: '#fff',
    archive: false,
    pinned: false,
  })

  const [notes, setNotes] = useState([])
  const [archiveNotes, setArchiveNotes] = useState([])

  return (
    <noteContext.Provider
      value={{
        note,
        noteDispatch,
        notes,
        setNotes,
        archiveNotes,
        setArchiveNotes,
      }}>
      {children}
    </noteContext.Provider>
  )
}

export { NoteContextProvider, useNote }
