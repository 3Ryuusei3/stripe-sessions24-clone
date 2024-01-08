import { Link } from "react-router-dom"
import ArrowIcon from "../Icons/ArrowIcon";

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
      </div>
    </footer>
  );
}