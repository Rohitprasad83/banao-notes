import { useState, useEffect } from 'react'
import { Layout, MainContent } from 'components/index'
import { successToast, errorToast } from 'components/toast/toasts'
import { useNote, useAuth } from 'context/index'
import axios from 'axios'
import { Note } from 'components/main/Note'

function Archive() {
  const { encodedToken } = useAuth()

  const { archiveNotes, setArchiveNotes } = useNote()
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
  return (
    <div className="home__container">
      <Layout />
      <div className="main__container">
        <h2 className="text__center">Archive </h2>
        <MainContent />
        {archiveNotes.map(note => (
          <Note key={note._id} note={note} />
        ))}
      </div>
    </div>
  )
}

export { Archive }
