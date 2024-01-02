import { Link } from "react-router-dom";
import ArrowIcon from "../../components/Icons/ArrowIcon";
import StripeIcon from "../../components/Icons/StripeIcon";

interface HeaderFixedProps {
  shown: boolean;
}

export function HeaderFixed({ shown }: HeaderFixedProps) {
  return (
    <header className={`header header-fixed ${shown ? 'shown' : 'closed'}`}>
      <div className="header__container">
        <div className="header__container--logo">
          <StripeIcon fill='var(--color-black-primary)' />
        </div>
        <ul className="header__container--nav">
          <li><Link to="#">Overview</Link></li>
          <li><Link to="#">Talks</Link></li>
          <li><Link to="#">Speakers</Link></li>
          <li><Link to="#">Tickets</Link></li>
          <li><Link to="#">Sponsors</Link></li>
          <li><Link to="#">FAQ</Link></li>
        </ul>
        <div className="header__container--register">
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