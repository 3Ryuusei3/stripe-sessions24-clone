import { SpeakersCarousel } from "../../atoms/Speakers/SpeakersCarousel";
import { SpeakersList } from "../../atoms/Speakers/SpeakersList";
import { SpeakersTitle } from "../../atoms/Speakers/SpeakersTitle";

export function Speakers() {

  return (
    <section id="speakers-section">
      <SpeakersTitle />
      <SpeakersCarousel />
      <SpeakersList />
    </section>
  )
}