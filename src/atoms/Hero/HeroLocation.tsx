import { Link } from "react-router-dom";
import ArrowIcon from "../../components/Icons/ArrowIcon";

export function HeroLocation() {

  return (
    <div className="hero__location">
      <div className="hero__location--title">
        <div className="section-subtitle">
          <span>Location</span>
        </div>
        <div className="section-title">
          <div><h2>San Francisco,</h2></div>
          <div><h2><i>California</i></h2></div>
        </div>
      </div>
      <Link to="#" className="hero__location--register">
        <div className="register__btn--text">
          <span>Register</span>
        </div>
        <div className="register__btn--arrow">
          <ArrowIcon fill='var(--color-black-primary)' />
        </div>
      </Link>
      <span className="hero__location--coordinates">37.7830593° N, 122.404101° W</span>
    </div>
  )
}