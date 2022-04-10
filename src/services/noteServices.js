import axios from 'axios'
import { successToast, errorToast } from 'components/toast/toasts'
import { getCurrentDate } from 'utils/getCurrentDate'

const allFieldsAreFilled = note => note.title !== '' && note.body !== ''

const saveNoteHandler = async(
    e,
    note,
    setNotes,
    setShowPalette,
    noteDispatch,
    encodedToken
) => {
    e.preventDefault()
    if (allFieldsAreFilled(note)) {
        try {
            const response = await axios.post(
                '/api/notes', {
                    note: {...note, createdOn: getCurrentDate() },
                }, {
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

const deleteNoteHandler = async(
    e,
    _id,
    setNotes,
    setTrash,
    trash,
    note,
    encodedToken
) => {
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

const deleteArchiveNoteHandler = async(
    e,
    _id,
    note,
    trash,
    setArchiveNotes,
    setTrash,
    encodedToken
) => {
    e.preventDefault()
    try {
        const response = await axios.delete(`/api/archives/delete/${_id}`, {
            headers: { authorization: encodedToken },
        })
        setArchiveNotes(response.data.archives)
        setTrash([...trash, note])
        successToast('Successfully deleted the note')
    } catch (err) {
        errorToast('Could not delete the note, please try again!')
    }
}

const archiveNoteHandler = async(_id, note, setNotes, encodedToken) => {
    try {
        const response = await axios.post(
            `/api/notes/archives/${_id}`, { note }, { headers: { authorization: encodedToken } }
        )
        setNotes(response.data.notes)
        successToast('Note has been successfully archived')
    } catch (error) {
        console.log(error)
        errorToast('Note was not archived, Please try again!')
    }
}

const restoreNoteHandler = async(
    _id,
    note,
    setNotes,
    encodedToken,
    setArchiveNotes
) => {
    try {
        const response = await axios.post(
            `/api/archives/restore/${_id}`, {}, {
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

export {
    saveNoteHandler,
    deleteNoteHandler,
    deleteArchiveNoteHandler,
    archiveNoteHandler,
    restoreNoteHandler,
}