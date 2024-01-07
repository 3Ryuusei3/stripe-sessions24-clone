import { Link } from "react-router-dom";
import AccordIcon from "../../components/Icons/Brands/AccordIcon";
import CheckIcon from "../../components/Icons/Brands/CheckIcon";
import ClerkIcon from "../../components/Icons/Brands/ClerkIcon";
import KlarnaIcon from "../../components/Icons/Brands/KlarnaIcon";
import MyersHolumIcon from "../../components/Icons/Brands/MyersHolumIcon";
import PaypackIcon from "../../components/Icons/Brands/PaypackIcon";
import PilotIcon from "../../components/Icons/Brands/PilotIcon";
import PulleyIcon from "../../components/Icons/Brands/PulleyIcon";
import ShopwareIcon from "../../components/Icons/Brands/ShopwareIcon";
import StunningIcon from "../../components/Icons/Brands/StunningIcon";
import SyftIcon from "../../components/Icons/Brands/SyftIcon";
import VennIcon from "../../components/Icons/Brands/VennIcon";

export function SponsorsBrands() {
  return (
    <div className="sponsors-brands__container">
      <div className="sponsors-brands__container--tag">
        <p>Platinum</p>
      </div>
      <div className="sponsors-brands__container--brands platinum">
        <Link className="single-brand__container" to="https://clerk.com/">
          <ClerkIcon />
        </Link>
        <Link className="single-brand__container" to="https://www.klarna.com/">
          <KlarnaIcon />
        </Link>
      </div>
      <div className="sponsors-brands__container--tag">
        <p>Gold</p>
      </div>
      <div className="sponsors-brands__container--brands gold">
        <Link className="single-brand__container" to="https://www.checkhq.com/">
          <CheckIcon />
        </Link>
        <Link className="single-brand__container" to="https://stunning.co/">
          <StunningIcon />
        </Link>
      </div>
      <div className="sponsors-brands__container--tag">
        <p>Silver</p>
      </div>
      <div className="sponsors-brands__container--brands silver">
        <Link className="single-brand__container" to="https://myersholum.com/">
          <MyersHolumIcon />
        </Link>
        <Link className="single-brand__container" to="https://www.shopware.com/">
          <ShopwareIcon />
        </Link>
      </div>
      <div className="sponsors-brands__container--tag">
        <p>Startup</p>
      </div>
      <div className="sponsors-brands__container--brands startup">
        <div className="three-brand__container">
          <Link className="single-brand__container" to="https://inaccord.com/">
            <AccordIcon />
          </Link>
          <Link className="single-brand__container" to="https://paypack.ai/">
            <PaypackIcon />
          </Link>
          <Link className="single-brand__container" to="https://pilot.com/">
            <PilotIcon />
          </Link>
        </div>
        <div className="three-brand__container">
          <Link className="single-brand__container" to="https://pulley.com/">
            <PulleyIcon />
          </Link>
          <Link className="single-brand__container" to="https://syftanalytics.com/">
            <SyftIcon />
          </Link>
          <Link className="single-brand__container" to="https://venntechnology.com/">
            <VennIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}