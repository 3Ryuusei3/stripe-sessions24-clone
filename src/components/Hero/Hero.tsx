import { HeroLocation } from "../../atoms/Hero/HeroLocation";
import { HeroTitle } from "../../atoms/Hero/HeroTitle";

export function Hero() {

  return (
    <div id="hero">
      <HeroTitle />
      <HeroLocation />
    </div>
  )
}