import { useEffect, useState } from 'react';

export function Wave() {
  const [blur, setBlur] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const blurValue = Math.min(50, scrollY / 2000 * 50);
      setBlur(blurValue);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="wave__container">
      <img src="/wave.svg" alt="Wave" style={{ ['--img-blur' as string]: `${blur}px` }} />
    </div>
  )
}