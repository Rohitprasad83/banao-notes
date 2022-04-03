import { Layout } from '../../components/layout/Layout'
import { MainContent } from '../../components/main/MainContent.jsx'
function Archive() {
  return (
    <div className="home__container">
      <Layout />
      <div className="main__container">
        <h2>Archive </h2>
        <MainContent />
      </div>
    </div>
  )
}

export { Archive }
