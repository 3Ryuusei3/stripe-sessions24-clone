import { useState, useRef, useEffect } from 'react';

interface Faq {
  title: string;
  description: string;
}

interface FaqItemProps {
  faq: Faq;
  index: number;
}

export function FaqItem({ faq, index }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState<string | undefined>();
  const descriptionRef = useRef<HTMLDivElement>(null);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (descriptionRef.current) {
      if (isOpen) {
        const scrollHeight = descriptionRef.current.scrollHeight;
        setMaxHeight(`${scrollHeight}px`);
      } else {
        setMaxHeight('0px');
      }
    }
  }, [isOpen]);

  return (
    <div className="faq__card" key={index}>
      <div className="faq__card--title" onClick={toggleCollapse}>
        <p className="faq__card--title-tag">0{index + 1}</p>
        <p className="faq__card--title-name">{faq.title}</p>
      </div>
      <div
        className={`faq__card--description ${isOpen ? 'open' : 'closed'}`}
        style={{ maxHeight }}
        ref={descriptionRef}
        dangerouslySetInnerHTML={{ __html: faq.description }}
      >
      </div>
    </div>
  );
}