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

export { saveNoteHandler }