import { TalksCard } from "../../atoms/Talks/TalksCard";
import { TalksTitle } from "../../atoms/Talks/TalksTitle";

export function Talks() {

  return (
    <div className="talks__container">
      <TalksTitle />
      <div className="talks__cards">
        <TalksCard />
      </div>
    </div>
  )
}