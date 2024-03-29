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

export function SpeakersCarousel() {
  const [data, setData] = useState<Speaker[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [iconFill, setIconFill] = useState("#221B35");


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    fetch('data/speakersData.json')
      .then(response => response.json())
      .then(data => {
        const activeSpeakerIndex = data.findIndex((speaker: Speaker) => speaker.active);
        setActiveIndex(activeSpeakerIndex !== -1 ? activeSpeakerIndex : 0);
        setData(data);
      });
  }, [])

  const handleClick = (index: number) => {
    setActiveIndex(index);
  }

  const handleMouseOver = () => {
    setIconFill("#FFFFFF");
  };

  const handleMouseOut = () => {
    setIconFill("#221B35");
  };

  return (
    <div className="speakers__carousel">
      {data.map((speaker, index) => {
        const distanceFromActive = Math.abs(index - activeIndex);
        const isVisible = windowWidth < 940 ? distanceFromActive < 4 : distanceFromActive < 5;
        return (
          <div className={`speakers__carousel--card ${index === activeIndex ? 'active' : 'inactive'} ${isVisible ? '' : 'hidden'}`} key={index} onClick={() => handleClick(index)}>
            <Link className="speakers__carousel--card-linkedin" to={speaker.linkedin} target="_blank" rel="noopener noreferrer" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              <LinkedInIcon fill={iconFill} />
            </Link>
            <div className="speakers__carousel--card-photo">
              <img src={speaker.photo} alt={speaker.name} />
            </div>
            <div className="speakers__carousel--card-title">
              <h3>{speaker.name}</h3>
              <p>{speaker.jobtitle}</p>
            </div>
            <div className="speakers__carousel--card-tags">
              <p><span className="live"></span> {speaker.company}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}