import { useEffect, useState } from 'react';

export function Wave() {
  const [blur, setBlur] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const blurValue = Math.min(50, scrollY / 2000 * 50);
      const opacityValue = Math.max(0.5, 1 - scrollY / 2000 * 0.5);
      setBlur(blurValue);
      setOpacity(opacityValue);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="wave__container">
      <img src="/img/wave.svg" alt="Wave" style={{
        ['--img-blur' as string]: `${blur}px`,
        ['--img-opacity' as string]: `${opacity}` }} />
    </div>
  )
}