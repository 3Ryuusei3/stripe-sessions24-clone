import { useEffect, useState } from 'react';

interface Date {
  day: string;
  month: string;
  activities: { title: string; time: string; }[];
}

export function ScheduleDates() {
  const [data, setData] = useState<Date[]>([]);

  useEffect(() => {
    fetch('data/scheduleData.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);

  return (
    <div className="dates__container">
      {data.map((item, index) => (
        <div className="dates__card" key={index}>
          <div className="dates__card--count">
            <p>Day 0{index + 1}</p>
          </div>
          <div className="dates__card--date">
            <h2 className="dates__card--month">{item.month}</h2>
            <h2 className="dates__card--day">{item.day}</h2>
          </div>
          <div className="dates__card--activities">
            {item.activities.map((activity, index) => (
              <div key={index}>
                <p><b>{activity.title}</b></p>
                <p><i>{activity.time}</i></p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}