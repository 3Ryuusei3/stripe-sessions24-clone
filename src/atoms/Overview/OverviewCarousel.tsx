import { useEffect, useState } from 'react';
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
  const [data, setData] = useState<Item[]>([]);
  const [columnCount, setColumnCount] = useState(getColumnCount());
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [columnWidth, setColumnWidth] = useState((viewportWidth - (20 * 2)) / columnCount);


  useEffect(() => {
    setData(OverviewData);
  }, []);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => {
        const firstItem = prevData[0];
        const remainingItems = prevData.slice(1);
        const nextActiveIndex = (prevData.findIndex(item => item.active) + 1) % prevData.length;

        // Mueve el primer elemento al final
        const newData = [...remainingItems, firstItem];

        // Marca la siguiente tarjeta como activa
        return newData.map((item, index) => ({
          ...item,
          active: index === nextActiveIndex
        }));
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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

  function getStrokeColor(isActive: boolean): string {
    return isActive ? '#FFFFFF' : '#221B35';
  }

  const activeIndex = data.findIndex(item => item.active);

  return (
    <div className="carousel__container">
      {data.map((item, index) => (
        <div
          className={`carousel__card ${item.active ? 'active' : ''}`}
          key={index}
          style={{
            '--card-translate-x': calculateXPosition(index, activeIndex),
            '--card-translate-y': calculateYPosition(index, activeIndex, columnWidth),
            '--card-z-index': calculateZIndex(index, activeIndex)
          } as React.CSSProperties}
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