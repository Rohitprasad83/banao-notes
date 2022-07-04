import { useEffect } from 'react'
import { Layout, MainContent } from '../../components/index'
import { Note } from 'components/main/Note'
import { useNote, useFilter } from 'context/index'
import {
  sortNotesByAge,
  filterNotesByPriority,
  filterNotesByTags,
} from 'utils/filterUtils'
import { useTitle } from 'utils/useTitle'
import empty from '../../assets/images/empty.svg'

function Trash() {
  const { trash } = useNote()
  const { filters, filterDispatch } = useFilter()
  let allTrashNotes = []
  for (let note of trash) {
    allTrashNotes.push(note.note)
  }

  useEffect(() => filterDispatch({ type: 'RESET' }), [])

  useTitle('| Trash')
  const filteredTrashNotesByTags = filterNotesByTags(
    allTrashNotes,
    filters.tags
  )
  const filteredTrashNotes = filterNotesByPriority(
    filteredTrashNotesByTags,
    filters.priority
  )
  const sortedNotes = sortNotesByAge(filteredTrashNotes, filters.sortBy)

  return (
    <div className="home__container">
      <Layout />
      <div className="main__container">
        <h2 className="text__center">Trash </h2>
        <MainContent />

        <div className="notes__container">
          {sortedNotes.map(note => (
            <Note key={note._id} note={note} />
          ))}
        </div>
        {sortedNotes && sortedNotes.length < 1 && (
          <>
            <h4 className="text__center">No Notes Deleted</h4>
            <div className="empty__state">
              <img src={empty} alt="Landing Page" className="responsive__img" />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export { Trash }
