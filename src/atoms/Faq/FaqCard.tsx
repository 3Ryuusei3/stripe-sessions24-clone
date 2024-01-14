import { useEffect, useState } from 'react';
import { FaqItem } from './FaqItem';

interface Faq {
  title: string;
  description: string;
}

export function FaqCard() {
  const [data, setData] = useState<Faq[]>([]);

  useEffect(() => {
    fetch('data/faqData.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);

  return (
    <>
      {data.map((faq, index) => (
        <FaqItem faq={faq} index={index} key={index} />
      ))}
    </>
  )
}