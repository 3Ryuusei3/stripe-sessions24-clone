import { useEffect, useState } from 'react';

interface Talk {
  title: string;
  description: string;
  tags: string[];
}

export function TalksCard() {
  const [data, setData] = useState<Talk[]>([]);

  useEffect(() => {
    fetch('data/talksData.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);

  return (
    <>
      {data.map((talk, index) => (
        <div className="talks__card" key={index}>
          <div className="talks__card--title">
            <h3>{talk.title}</h3>
          </div>
          <div className="talks__card--description">
            <p>{talk.description}</p>
          </div>
          {talk.tags && talk.tags.length > 0 && (
            <div className="talks__card--tags">
              {talk.tags.map((tags, index) => (
                <p key={index}>{tags}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  )
}