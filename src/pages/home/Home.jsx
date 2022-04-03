import { Layout } from '../../components/layout/Layout'
import { MainContent } from '../../components/main/MainContent.jsx'
function Home() {
  return (
    <div className="home__container">
      <Layout />
      <div className="main__container">
        <h2>Home Page </h2>
        <MainContent />
      </div>
    </div>
  )
}

export { Home }
