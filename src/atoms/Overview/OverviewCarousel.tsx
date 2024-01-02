import { useEffect, useState, useRef } from 'react';
import OverviewData from './../../data/OverviewData.json';
import { getColumnCount } from './../../utils/getColumnCount.js';
import WorldIcon from '../../components/Icons/WorldIcon';
import BubbleIcon from '../../components/Icons/BubbleIcon';
import SquaresIcon from '../../components/Icons/SquaresIcon';
import GlobeIcon from '../../components/Icons/GlobeIcon';

interface Item {
  title: string;
  description: string;
  icon: string;
  active: boolean;
}

export function OverviewCarousel() {
  const originalData = OverviewData;
  const [data, setData] = useState<Item[]>([]);
  const [columnCount, setColumnCount] = useState(getColumnCount());
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [columnWidth, setColumnWidth] = useState((viewportWidth - (20 * 2)) / columnCount);
  const [isHovering, setIsHovering] = useState(false);
  const [disableHover, setDisableHover] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setData(OverviewData);
  }, []);

  // Update column count and column width on resize
  useEffect(() => {
    const handleResize = () => {
      setColumnCount(getColumnCount());
      setViewportWidth(window.innerWidth);
      setColumnWidth((window.innerWidth - (20 * 2)) / getColumnCount());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Check if the carousel is in view
  const carouselRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setIsInView(entries[0].isIntersecting);
    });

    const currentCarouselRef = carouselRef.current;

    if (currentCarouselRef) {
      observer.observe(currentCarouselRef);
    }

    return () => {
      if (currentCarouselRef) {
        observer.unobserve(currentCarouselRef);
      }
    };
  }, []);

  // Create carousel effect and inject and remove cards from the data array
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isInView && !isHovering) {
      interval = setInterval(() => {
        setData(prevData => {
          const activeIndex = prevData.findIndex(item => item.active);
          const remainingCards = prevData.length - activeIndex;
          let newData = [...prevData];
          if (remainingCards <= 6) {
            newData = [...newData, ...originalData];
            newData.splice(0, 4);
          }
          const nextActiveIndex = (activeIndex + 1) % newData.length;
          return newData.map((item, index) => ({
            ...item,
            active: index === nextActiveIndex
          }));
        });
      }, 4000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [originalData, isHovering, isInView]);

  // Handle card click
  const handleCardClick = (clickedIndex: number) => {
    setData(prevData => {
      let newData = [...prevData];
      let newActiveIndex = clickedIndex;
      if (newData.length - clickedIndex < 6) {
        newData = [...newData, ...originalData.slice(0, 4)];
      } else if (clickedIndex < 6) {
        const itemsToAdd = originalData.slice(0, 4);
        newData = [...itemsToAdd, ...newData];
        newActiveIndex += 4; // Actualiza el índice activo
      }

      return newData.map((item, index) => ({
        ...item,
        active: index === newActiveIndex
      }));
    });

    setDisableHover(true);
    setTimeout(() => setDisableHover(false), 800);
  };

  // Calculate the position and the z-index of each card
  function calculateXPosition(index: number, activeIndex: number) {
    const distanceFromActive = index - activeIndex;
    const position = distanceFromActive * columnWidth * 3.5;
    return `${position}px`;
  }

  function calculateYPosition(index: number, activeIndex: number, columnWidth: number) {
    const distanceFromActive = Math.abs(index - activeIndex);
    if (index === activeIndex) {
      return '-2px';
    } else if (distanceFromActive % 2 === 0) {
      return `${columnWidth / 2 - 5}px`;
    }
    return `${columnWidth - 5}px`;
  }

  function calculateZIndex(index: number, activeIndex: number) {
    const distanceFromActive = Math.abs(index - activeIndex);
    if (index === activeIndex) {
      return 50;
    }
    return 50 - distanceFromActive;
  }

  // Get stroke color for icons
  function getStrokeColor(isActive: boolean): string {
    return isActive ? '#FFFFFF' : '#221B35';
  }

  // Get active index
  const activeIndex = data.findIndex(item => item.active);

  return (
    <div className="carousel__container" ref={carouselRef}>
      {data.map((item, index) => (
        <div
          className={`carousel__card ${item.active ? 'active' : ''}`}
          key={index}
          style={{
            ['--card-translate-x' as string]: calculateXPosition(index, activeIndex),
            ['--card-translate-y' as string]: calculateYPosition(index, activeIndex, columnWidth),
            ['--card-z-index' as string]: calculateZIndex(index, activeIndex),
            pointerEvents: disableHover ? 'none' : 'auto'
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={() => handleCardClick(index)}
        >
          <div className="carousel__card--top">
            <h3>{item.title}</h3>
            {item.icon === 'world' ? <WorldIcon stroke={getStrokeColor(item.active)} />
              : item.icon === 'bubble' ? <BubbleIcon stroke={getStrokeColor(item.active)} />
              : item.icon === 'squares' ? <SquaresIcon stroke={getStrokeColor(item.active)} />
              : <GlobeIcon stroke={getStrokeColor(item.active)} /> }
          </div>
          <div className="carousel__card--bottom">
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}