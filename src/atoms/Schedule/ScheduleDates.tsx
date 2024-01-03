import { useEffect, useState } from 'react';

interface Date {
  day: string;
  month: string;
  activities: string[];
}

export function ScheduleDates() {
  const [data, setData] = useState<Date[]>([]);

  useEffect(() => {
    fetch('/scheduleData.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);

  return (
    <div className="dates__container">
      {data.map((item, index) => (
        <div className="dates__card" key={index}>
          <div className="dates__card--date">
            <h2 className="dates__card--month">{item.month}</h2>
            <h2 className="dates__card--day">{item.day}</h2>
          </div>
          <div className="dates__card--activities">
            {item.activities.map((activity, index) => (
              <p key={index}>{activity}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}