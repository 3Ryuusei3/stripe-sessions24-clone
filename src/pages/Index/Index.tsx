import { Hero } from "../../components/Hero/Hero";
import { Overview } from "../../components/Overview/Overview";
import { Schedule } from "../../components/Schedule/Schedule";

export function Index() {

  return (
    <main>
      <Hero />
      <Overview />
      <Schedule />
    </main>
  )
}