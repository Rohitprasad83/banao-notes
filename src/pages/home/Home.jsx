import { Layout, MainContent } from '../../components/index'
function Home() {
  return (
    <div className="home__container">
      <Layout />
      <div className="main__container">
        <h2 className="text__center">Home Page </h2>
        <MainContent />
      </div>
    </div>
  )
}

export { Home }
