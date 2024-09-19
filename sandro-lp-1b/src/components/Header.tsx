import styles from '../LandingPage.module.css';

export default function Header() {
    return (
      <header className={styles.header}>
        <div className={styles.logo}>WaterCo</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    );
  }