import { Layout, MainContent } from 'components/index'
import { Note } from 'components/main/Note'
import { errorToast } from 'components/toast/toasts'
import { useEffect } from 'react'
import { useNote, useAuth, useFilter } from 'context/index'
import axios from 'axios'
import {
  sortNotesByAge,
  filterNotesByPriority,
  filterNotesByTags,
} from 'utils/filterUtils'
import { useTitle } from 'utils/useTitle'

function Home() {
  const { encodedToken } = useAuth()
  const { notes, setNotes } = useNote()
  const { filters, filterDispatch } = useFilter()
  const filterByTags = filterNotesByTags(notes, filters.tags)
  const filteredNotes = filterNotesByPriority(filterByTags, filters.priority)
  const sortedNotes = sortNotesByAge(filteredNotes, filters.sortBy)

  useTitle('Home')

  useEffect(() => {
    ;(async () => {
      try {
        const response = await axios.get('/api/notes', {
          headers: { authorization: encodedToken },
        })
        setNotes(response.data.notes)
      } catch (err) {
        errorToast('Could not Fetch All notes, please try again')
      }
    })()
  }, [notes])

  useEffect(() => filterDispatch({ type: 'RESET' }), [])

  return (
    <div className="home__container">
      <Layout />
      <div className="main__container">
        <h2 className="text__center">Home Page </h2>
        <MainContent />
        <div className="notes__container">
          {sortedNotes.map(note => (
            <Note key={note._id} note={note} />
          ))}
        </div>
      </div>
    </div>
  )
}

export { Home }
