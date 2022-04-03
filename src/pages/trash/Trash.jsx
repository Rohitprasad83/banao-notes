import { Layout, MainContent } from '../../components/index'
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
