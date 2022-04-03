import { Layout } from '../../components/layout/Layout'
import { MainContent } from '../../components/main/MainContent.jsx'
function Trash() {
  return (
    <div className="home__container">
      <Layout />
      <div className="main__container">
        <h2 className="text__center">Trash </h2>
        <MainContent />
      </div>
    </div>
  )
}

export { Trash }
