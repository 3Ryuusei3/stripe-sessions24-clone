import { Hero } from "../../components/Hero/Hero";
import { Overview } from "../../components/Overview/Overview";
import { Schedule } from "../../components/Schedule/Schedule";
import { Speakers } from "../../components/Speakers/Speakers";
import { Talks } from "../../components/Talks/Talks";

export function Index() {

  return (
    <main>
      <Hero />
      <Overview />
      <Schedule />
      <Talks />
      <Speakers />
    </main>
  )
}