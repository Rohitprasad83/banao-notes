import { Layout, MainContent } from 'components/index'
import { Note } from 'components/main/Note'
import { errorToast } from 'components/toast/toasts'
import { useEffect } from 'react'
import { useNote, useAuth } from 'context/index'
import axios from 'axios'

function Home() {
  const { encodedToken } = useAuth()
  const { notes, setNotes } = useNote()

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
  }, [notes, setNotes, encodedToken])
  return (
    <div className="home__container">
      <Layout />
      <div className="main__container">
        <h2 className="text__center">Home Page </h2>
        <MainContent />
        <div className="notes__container">
          {notes.map(note => (
            <Note key={note._id} note={note} />
          ))}
        </div>
      </div>
    </div>
  )
}

export { Home }
