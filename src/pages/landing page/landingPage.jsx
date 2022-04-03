import { Link } from 'react-router-dom'
import notesApp from '../../assets/images/notesApp.svg'
import landingStyle from './landingPage.module.css'
export function LandingPage() {
  return (
    <div className={landingStyle['container']}>
      <div className={landingStyle['details']}>
        <h3 className={landingStyle['heading']}>Banao Notes</h3>
        <h5>Meet your modern</h5>
        <h5>Note Taking App</h5>
        <p className="text__md">
          Manage your Daily tasks and workflow in a modern way and boost your
          efficiency without any efforts
        </p>
        <Link to="/signup">
          <button className={`btn btn__warning ${landingStyle['join']}`}>
            Join Now
          </button>
        </Link>
        <Link to="/login">
          <p className={`text__md ${landingStyle['alreadyAccount']}`}>
            Already have an account?
          </p>
        </Link>
      </div>
      <div className={landingStyle['landingImage']}>
        <img src={notesApp} alt="Landing Page" className="responsive__img" />
      </div>
    </div>
  )
}
