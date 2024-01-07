import Marquee from "react-fast-marquee";
import Asterisk2Icon from "../../components/Icons/Asterisk2Icon";

export function SponsorsMarquee() {

  return (
    <Marquee className="sponsors-marquee__container" autoFill={true}>
      <div className="marquee__card">
        <div className="marquee__card--title">
          <p>Sponsors</p>
        </div>
        <div className="marquee__card--img">
          <Asterisk2Icon stroke="#221B35" />
        </div>
      </div>
    </Marquee>
  );
}