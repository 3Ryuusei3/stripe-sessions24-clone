import { useEffect, useState } from 'react';
import { HeaderFixed } from '../../atoms/Header/HeaderFixed';
import { HeaderNav } from './../../atoms/Header/HeaderNav';

export function Header() {
  const [showFixedHeader, setShowFixedHeader] = useState(false);

  const checkScroll = () => {
    const heroElement = document.getElementById('hero');
    const footerElement = document.getElementById('footer');
    const rectHero = heroElement?.getBoundingClientRect();
    const rectFooter = footerElement?.getBoundingClientRect();

    if (rectHero && rectFooter) {
      const footerTop = rectFooter.top + window.scrollY;
      const isAboveFooter = window.scrollY < footerTop - 500;
      setShowFixedHeader(rectHero.bottom < 0 && isAboveFooter);
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