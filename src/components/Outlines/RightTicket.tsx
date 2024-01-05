interface RightTicketProps {
  stroke?: string;
  fill?: string;
}

const RightTicket = ({ stroke, fill }: RightTicketProps) => (
  <svg width="520.296875" height="520" viewBox="0 0 522.296875 520" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 7.99999C0.5 3.85785 3.85786 0.5 8 0.5H514.296875C518.438875 0.5 521.796875 3.85786 521.796875 8V239.56C510.705875 239.771 501.796875 248.84500000000003 501.796875 260C501.796875 271.155 510.705875 280.229 521.796875 280.49V512C521.796875 516.142 518.438875 519.5 514.296875 519.5H7.99999C3.85786 519.5 0.5 516.142 0.5 512V7.99999Z" stroke={stroke} fill={fill}></path></svg>
)
export default RightTicket;