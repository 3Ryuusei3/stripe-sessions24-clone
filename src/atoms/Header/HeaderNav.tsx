import { Link } from "react-router-dom";
import StripeIcon from "../../components/Icons/StripeIcon";
import ArrowIcon from "../../components/Icons/ArrowIcon";

export function HeaderNav() {

  return (
    <header className="header-nav">
      <div className="header-nav__container">
        <div className="header-nav__container--logo">
          <StripeIcon fill='var(--color-black-primary)' />
        </div>
        <ul className="header-nav__container--nav">
          <li><Link to="#">Overview</Link></li>
          <li><Link to="#">Talks</Link></li>
          <li><Link to="#">Speakers</Link></li>
          <li><Link to="#">Tickets</Link></li>
          <li><Link to="#">Sponsors</Link></li>
          <li><Link to="#">FAQ</Link></li>
        </ul>
        <div className="header-nav__container--register">
          <Link className="register__btn" to="#">
            <div className="register__btn--text">
              <span>Register</span>
            </div>
            <div className="register__btn--arrow">
              <ArrowIcon fill='var(--color-white-primary)' />
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

