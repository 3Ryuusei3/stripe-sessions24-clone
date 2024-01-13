import { TalksCard } from "../../atoms/Talks/TalksCard";
import { TalksTitle } from "../../atoms/Talks/TalksTitle";

export function Talks() {

  return (
    <section className="talks__container" id="talks-section">
      <TalksTitle />
      <div className="talks__cards">
        <TalksCard />
      </div>
    </section>
  )
}