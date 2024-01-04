import { Hero } from "../../components/Hero/Hero";
import { Overview } from "../../components/Overview/Overview";
import { Schedule } from "../../components/Schedule/Schedule";
import { Talks } from "../../components/Talks/Talks";

export function Index() {

  return (
    <main>
      <Hero />
      <Overview />
      <Schedule />
      <Talks />
    </main>
  )
}