// import { Navbar, Footer } from 'components/index'
import { Layout } from 'components/index'
import { useTitle } from 'utils/useTitle'
import error404 from 'assets/images/error404.png'
export function Error404() {
  useTitle(' 404')
  return (
    <div className="home__container">
      {/* <Navbar /> */}
      <Layout />

      <div className={`main__container `}>
        <h3 className="text__center">
          We Could not Found What you are Looking For!!!
        </h3>
        <img
          src={error404}
          alt="Not Found"
          className="responsive__img error404"
        />
      </div>
      {/* <Footer /> */}
    </div>
  )
}
