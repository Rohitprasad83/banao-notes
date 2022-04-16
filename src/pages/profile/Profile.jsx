import { Layout } from 'components/index'
import { useTitle } from 'utils/useTitle'

function Profile() {
  useTitle('Profile')

  return (
    <div className="home__container">
      <Layout />
      <div className="main__container">
        <h2 className="text__center">Profile </h2>
      </div>
    </div>
  )
}

export { Profile }
