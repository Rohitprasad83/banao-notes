import { Layout, MainContent } from 'components/index'
function Archive() {
  return (
    <div className="home__container">
      <Layout />
      <div className="main__container">
        <h2 className="text__center">Archive </h2>
        <MainContent />
      </div>
    </div>
  )
}

export { Archive }
