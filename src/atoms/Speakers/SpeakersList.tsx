import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import LinkedInIcon from "../../components/Icons/LinkedInIcon"

interface Speaker {
  name: string
  jobtitle: string
  company: string
  linkedin: string
  photo: string
  active: boolean
}

export function SpeakersList() {
  const [data, setData] = useState<Speaker[]>([]);

  useEffect(() => {
    fetch('data/speakersData.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, [])

  return (
    <div className="speakers__list">
      {data.map((speaker, index) => (
        <div className="speakers__list--card" key={index}>
          <div className="speakers__list--card-info">
            <div className="speakers__list--card-tags">
              <p><span className="live"></span> {speaker.company}</p>
              <Link to={speaker.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon fill="#221B35" />
              </Link>
            </div>
            <div className="speakers__list--card-title">
              <h3>{speaker.name}</h3>
              <p>{speaker.jobtitle}</p>
            </div>
          </div>
          <div className="speakers__list--card-photo">
            <img src={speaker.photo} alt={speaker.name} />
          </div>
        </div>
      ))}
    </div>
  )
}