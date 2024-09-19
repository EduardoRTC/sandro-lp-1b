
import Card from './Card';
import styles from '../LandingPage.module.css';
import { useEffect, useState } from 'react';

const cards = [
  { title: "Pure Spring", description: "Sourced from natural springs, our water is crisp and refreshing." },
  { title: "Mineral Rich", description: "Packed with essential minerals for your health and wellbeing." },
  { title: "Eco Friendly", description: "Our packaging is 100% recyclable, supporting a greener planet." },
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