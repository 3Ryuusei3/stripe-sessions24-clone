import { OverviewCarousel } from "../../atoms/Overview/OverviewCarousel";
import { OverviewMarquee } from "../../atoms/Overview/OverviewMarquee";
import { OverviewTitle } from "../../atoms/Overview/OverviewTitle";

export function Overview() {

  return (
    <section id="overview-section">
      <OverviewTitle />
      <OverviewCarousel />
      <OverviewMarquee />
    </section>
  )
}