import { TalksCard } from "../../atoms/Talks/TalksCard";
import { TalksTitle } from "../../atoms/Talks/TalksTitle";
import { Wave } from "../Wave/Wave";


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