import { SponsorsBrands } from "../../atoms/Sponsors/SponsorsBrands";
import { SponsorsMarquee } from "../../atoms/Sponsors/SponsorsMarquee";
import { SponsorsTitle } from "../../atoms/Sponsors/SponsorsTitle";

export function Sponsors() {
  return (
    <>
      <SponsorsMarquee />
      <SponsorsTitle />
      <SponsorsBrands />
    </>
  )
}