import { Layout } from '../../components/layout/Layout'
import { MainContent } from '../../components/main/MainContent.jsx'
function Label() {
  return (
    <div className="home__container">
      <Layout />
      <div className="main__container">
        <h2>Labels </h2>
        <MainContent />
      </div>
    </div>
  )
}

export { Label }
