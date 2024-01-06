import { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import ArrowIcon from '../../components/Icons/ArrowIcon';
import AsteriskIcon from '../../components/Icons/AsteriskIcon';

interface Ticket {
  tag: string;
  title: string;
  price: string;
  marquee: string[];
  activities: string[];
}

export function PreTicket() {
  const [data, setData] = useState<Ticket[]>([]);

  useEffect(() => {
    fetch('/ticketsData.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);

  return (
    <div className="pretickets__section">
      <div className="pretickets__container">
        {data.map((ticket, index) => (
          <div className="pretickets__card" key={index}>
            <div className="pretickets__card--tags">
              <p><span className="live"></span>{ticket.tag}</p>
              <p>{ticket.price}</p>
            </div>
            <div className="pretickets__card--title">
              <h3>{ticket.title}</h3>
            </div>
            <div className="pretickets__card--activities">
              {ticket.activities.map((activities, index) => (
                <p key={index}>{activities}</p>
              ))}
            </div>
            <div className="pretickets__card--register">
              <Link className="register__btn" to="#">
                <div className="register__btn--text">
                  <span>Learn more</span>
                </div>
                <div className="register__btn--arrow">
                  <ArrowIcon fill='var(--color-white-primary)' />
                </div>
              </Link>
            </div>
            <Marquee className="pretickets__card--marquee" autoFill={true}>
              {ticket.marquee.map((marquee, index) => (
                <div key={index}>
                  <p>{marquee}</p>
                  <AsteriskIcon stroke='#FFFFFF'/>
                </div>
              ))}
            </Marquee>
          </div>
        ))}
      </div>
    </div>
  )
}