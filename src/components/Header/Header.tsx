import { useEffect, useState } from 'react';
import { HeaderFixed } from '../../atoms/Header/HeaderFixed';
import { HeaderNav } from './../../atoms/Header/HeaderNav';

export function Header() {
  const [showFixedHeader, setShowFixedHeader] = useState(false);

  const checkScroll = () => {
    const heroElement = document.getElementById('hero');
    const rect = heroElement?.getBoundingClientRect();
    if (rect) {
      setShowFixedHeader(rect.bottom < 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <>
      <HeaderNav />
      {<HeaderFixed shown={showFixedHeader}/>}
    </>
  );
}