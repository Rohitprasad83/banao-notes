import { Layout, MainContent } from '../../components/index'
import { Note } from 'components/main/Note'
import { useNote } from 'context/index'
function Trash() {
  const { trash } = useNote()
  return (
    <div className="home__container">
      <Layout />
      <div className="main__container">
        <h2 className="text__center">Trash </h2>
        <MainContent />
        <div className="notes__container">
          {trash.map(({ note }) => (
            <Note key={note._id} note={note} />
          ))}
        </div>
      </div>
    </div>
  )
}

export { Trash }
