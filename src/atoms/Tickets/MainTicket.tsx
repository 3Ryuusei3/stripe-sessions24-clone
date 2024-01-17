import { Link } from "react-router-dom"
import ArrowIcon from "../../components/Icons/ArrowIcon"

export function MainTicket() {

  return (
    <div className="main-ticket__container">
      <div className="main-ticket__left">
        <picture className="main-ticket__left--img">
          <source media="(min-width: 940px)" srcSet="/img/wave.png 2x" />
          <img src="/img/wave-Y.png" alt="Wave" />
        </picture>
        <div className="main-ticket__left--tags">
          <p><span className="live"></span> Main Event</p>
          <p><span className="strikethrough">$999</span>$599</p>
        </div>
        <div className="main-ticket__left--subtitle">
          <p>Early-bird pricing ends February 23</p>
        </div>
        <div className="main-ticket__left--title">
          <h2>Sessions conference <i>pass</i></h2>
        </div>
      </div>
      <div className="main-ticket__right">
        <div className="main-ticket__right--activities">
          <p>Keynotes</p>
          <p>Breakout talks</p>
          <p>Expo hall</p>
          <p>Networking opportunities and evening events</p>
          <p>On-demand access to recordings after event</p>
        </div>
        <div className="main-ticket__right--register">
          <Link className="register__btn" to="#">
            <div className="register__btn--text">
              <span>Register</span>
            </div>
            <div className="register__btn--arrow">
              <ArrowIcon fill='var(--color-white-primary)' />
            </div>
          </Link>
        </div>
        <div className="main-ticket__right--barcode">
          <div className="barcode-img">
            <div></div>
          </div>
          <div className="barcode-span">
            <span>2</span>
            <span>Stripe Sessions</span>
            <span>4</span>
          </div>
        </div>
      </div>
    </div>
  )
}