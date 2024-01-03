import { OverviewCarousel } from "../../atoms/Overview/OverviewCarousel";
import { OverviewMarquee } from "../../atoms/Overview/OverviewMarquee";
import { OverviewTitle } from "../../atoms/Overview/OverviewTitle";

export function Overview() {

  return (
    <>
      <OverviewTitle />
      <OverviewCarousel />
      <OverviewMarquee />
    </>
  )
}