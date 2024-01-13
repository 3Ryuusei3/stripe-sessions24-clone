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
          <li onClick={() => document.getElementById('overview-section')?.scrollIntoView({ behavior: 'smooth' })}>Overview</li>
          <li onClick={() => document.getElementById('talks-section')?.scrollIntoView({ behavior: 'smooth' })}>Talks</li>
          <li onClick={() => document.getElementById('speakers-section')?.scrollIntoView({ behavior: 'smooth' })}>Speakers</li>
          <li onClick={() => document.getElementById('tickets-section')?.scrollIntoView({ behavior: 'smooth' })}>Tickets</li>
          <li onClick={() => document.getElementById('sponsors-section')?.scrollIntoView({ behavior: 'smooth' })}>Sponsors</li>
          <li onClick={() => document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' })}>FAQ</li>
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