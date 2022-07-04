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

    if (encodedToken) {
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
    } else {
        errorToast('Please Login First!')
    }
}

const editNoteHandler = async(
    e,
    _id,
    editNote,
    setOpenEdit,
    setNotes,
    encodedToken
) => {
    e.preventDefault()
    if (encodedToken) {
        try {
            const response = await axios.post(
                `/api/notes/${_id}`, {
                    note: editNote,
                }, {
                    headers: { authorization: encodedToken },
                }
            )
            successToast('You have Successfully Edited the note')
            setOpenEdit(false)
            setNotes(response.data.notes)
        } catch (err) {
            errorToast('Could not Edit the note, please try again!')
        }
    } else {
        errorToast('Please Login First!')
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
    if (encodedToken) {
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
    } else {
        errorToast('Please Login First!')
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
    if (encodedToken) {
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
    } else {
        errorToast('Please Login First!')
    }
}

const archiveNoteHandler = async(_id, note, setNotes, encodedToken) => {
    if (encodedToken) {
        try {
            const response = await axios.post(
                `/api/notes/archives/${_id}`, { note }, { headers: { authorization: encodedToken } }
            )
            setNotes(response.data.notes)
            successToast('Note has been successfully archived')
        } catch (error) {
            errorToast('Note was not archived, Please try again!')
        }
    } else {
        errorToast('Please Login First!')
    }
}

const restoreNoteHandler = async(
    _id,
    note,
    setNotes,
    encodedToken,
    setArchiveNotes
) => {
    if (encodedToken) {
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
    } else {
        errorToast('Please Login First!')
    }
}

export {
    saveNoteHandler,
    deleteNoteHandler,
    deleteArchiveNoteHandler,
    archiveNoteHandler,
    restoreNoteHandler,
    editNoteHandler,
}