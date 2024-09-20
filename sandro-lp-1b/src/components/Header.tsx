import styles from '../LandingPage.module.css';

export default function Header() {
    return (
      <header className={styles.header}>
        <div className={styles.logo}>Água'Qui</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#products">Produtos</a>
          <a href="#contact">Contato</a>
        </nav>
      </header>
    );
  }