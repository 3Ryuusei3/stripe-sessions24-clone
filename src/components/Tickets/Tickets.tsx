import { MainTicket } from "../../atoms/Tickets/MainTicket";
import { PreTicket } from "../../atoms/Tickets/PreTicket";
import { TicketsTitle } from "../../atoms/Tickets/TicketsTitle";

export function Tickets() {

  return (
    <section id="tickets-sections">
      <TicketsTitle />
      <MainTicket />
      <PreTicket />
    </section>
  )
}