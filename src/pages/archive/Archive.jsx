import { useEffect } from 'react'
import { Layout, MainContent } from 'components/index'
import { errorToast } from 'components/toast/toasts'
import { useNote, useAuth, useFilter } from 'context/index'
import axios from 'axios'
import { Note } from 'components/main/Note'
import {
  sortNotesByAge,
  filterNotesByTags,
  filterNotesByPriority,
} from 'utils/filterUtils'
import { useTitle } from 'utils/useTitle'
function Archive() {
  const { encodedToken } = useAuth()
  const { filters, filterDispatch } = useFilter()
  const { archiveNotes, setArchiveNotes } = useNote()

  const filterByTags = filterNotesByTags(archiveNotes, filters.tags)
  const filteredNotes = filterNotesByPriority(filterByTags, filters.priority)
  const sortedNotes = sortNotesByAge(filteredNotes, filters.sortBy)

  useTitle('Archive')
  useEffect(() => {
    ;(async () => {
      try {
        const response = await axios.get('/api/archives', {
          headers: { authorization: encodedToken },
        })
        setArchiveNotes(response.data.archives)
      } catch (err) {
        errorToast('Could not Fetch All notes, please try again')
      }
    })()
  }, [archiveNotes])

  useEffect(() => filterDispatch({ type: 'RESET' }), [])
  return (
    <div className="home__container">
      <Layout />
      <div className="main__container">
        <h2 className="text__center">Archive </h2>
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

export { Archive }
