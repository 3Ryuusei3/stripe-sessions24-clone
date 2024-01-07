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
        <div className="single-brand__container">
          <ClerkIcon />
        </div>
        <div className="single-brand__container">
          <KlarnaIcon />
        </div>
      </div>
      <div className="sponsors-brands__container--tag">
        <p>Gold</p>
      </div>
      <div className="sponsors-brands__container--brands gold">
        <div className="single-brand__container">
          <CheckIcon />
        </div>
        <div className="single-brand__container">
          <StunningIcon />
        </div>
      </div>
      <div className="sponsors-brands__container--tag">
        <p>Silver</p>
      </div>
      <div className="sponsors-brands__container--brands silver">
        <div className="single-brand__container">
          <MyersHolumIcon />
        </div>
        <div className="single-brand__container">
          <ShopwareIcon />
        </div>
      </div>
      <div className="sponsors-brands__container--tag">
        <p>Startup</p>
      </div>
      <div className="sponsors-brands__container--brands startup">
        <div className="three-brand__container">
          <div className="single-brand__container">
            <AccordIcon />
          </div>
          <div className="single-brand__container">
            <PaypackIcon />
          </div>
          <div className="single-brand__container">
            <PilotIcon />
          </div>
        </div>
        <div className="three-brand__container">
          <div className="single-brand__container">
            <PulleyIcon />
          </div>
          <div className="single-brand__container">
            <SyftIcon />
          </div>
          <div className="single-brand__container">
            <VennIcon />
          </div>
        </div>
      </div>
    </div>
  );
}