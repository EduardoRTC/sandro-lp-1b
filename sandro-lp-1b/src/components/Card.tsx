import { useState } from 'react';
import styles from '../LandingPage.module.css';

interface CardProps {
  title: string;
  description: string;
}

export default function Card({ title, description }: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`${styles.cardInner} ${isFlipped ? styles.flipped : ''}`}>
        <div className={styles.cardFront}>
          <h3>{title}</h3>
        </div>
        <div className={styles.cardBack}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}