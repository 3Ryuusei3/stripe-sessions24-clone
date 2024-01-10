import { Link } from "react-router-dom"
import ArrowIcon from "../Icons/ArrowIcon";
import StripeSessionsIcon from "../Icons/StripeSessionsIcon";

export function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer__container">
        <div className="footer__container--tags">
          <span>San Francisco</span>
          <span>April 23-25 2024</span>
          <span>Moscone West</span>
        </div>
        <div className="footer__container--title">
          <h2>Save your spot</h2>
        </div>
        <Link to="#" className="footer__container--register">
          <div className="register__btn--text">
            <span>Register</span>
          </div>
          <div className="register__btn--arrow">
            <ArrowIcon fill='var(--color-white-primary)' />
          </div>
        </Link>
        <div className="footer__container--nav">
          <div>
            <StripeSessionsIcon />
          </div>
          <div>
            <p>For Sessions support, email</p>
            <Link to="#">registration@stripesessions.com</Link>
          </div>
          <div>
            <Link to="#">View stripe.com</Link>
          </div>
          <div>
            <Link to="#">Privacy and cookies</Link>
            <Link to="#">Event terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}