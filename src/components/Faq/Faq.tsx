import { FaqCard } from "../../atoms/Faq/FaqCard";
import { FaqTitle } from "../../atoms/Faq/FaqTitle";

export function Faq() {

  return (
    <>
      <FaqTitle />
      <div className="faq__cards">
        <FaqCard />
      </div>
    </>
  )
}