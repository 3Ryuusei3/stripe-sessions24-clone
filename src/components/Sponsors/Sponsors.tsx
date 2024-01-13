import { SponsorsBrands } from "../../atoms/Sponsors/SponsorsBrands";
import { SponsorsMarquee } from "../../atoms/Sponsors/SponsorsMarquee";
import { SponsorsTitle } from "../../atoms/Sponsors/SponsorsTitle";

export function Sponsors() {
  return (
    <section id="sponsors-section">
      <SponsorsMarquee />
      <SponsorsTitle />
      <SponsorsBrands />
    </section>
  )
}