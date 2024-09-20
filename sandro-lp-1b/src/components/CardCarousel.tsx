
import Card from './Card';
import styles from '../LandingPage.module.css';
import { useEffect, useState } from 'react';

const cards = [
  { title: "Água Pura", description: "Extraída de fontes naturais, nossa água é cristalina e refrescante." },
  { title: "Rica em Minerais", description: "Repleta de minerais essenciais para sua saúde e bem-estar." },
  { title: "Ecológica", description: "Nossa embalagem é 100% reciclável, apoiando um planeta mais verde." },
];

export default function CardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const nextCard = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex - 1 + cards.length) % cards.length);
  };

  if (isMobile) {
    return (
      <div className={styles.mobileCarousel}>
        <button onClick={prevCard} className={styles.carouselButton}>&lt;</button>
        <Card {...cards[currentIndex]} />
        <button onClick={nextCard} className={styles.carouselButton}>&gt;</button>
      </div>
    );
  }

  return (
    <div className={styles.cardCarousel}>
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}