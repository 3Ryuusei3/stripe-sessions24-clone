import { Faq } from "../../components/Faq/Faq";
import { Hero } from "../../components/Hero/Hero";
import { Overview } from "../../components/Overview/Overview";
import { Schedule } from "../../components/Schedule/Schedule";
import { Speakers } from "../../components/Speakers/Speakers";
import { Sponsors } from "../../components/Sponsors/Sponsors";
import { Talks } from "../../components/Talks/Talks";
import { Tickets } from "../../components/Tickets/Tickets";

export function Index() {

  return (
    <main>
      <Hero />
      <Overview />
      <Schedule />
      <Talks />
      <Speakers />
      <Tickets />
      <Sponsors />
      <Faq />
    </main>
  )
}