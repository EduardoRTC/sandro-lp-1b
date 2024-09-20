import styles from '../LandingPage.module.css';

export default function Header() {
    return (
      <header className={styles.header}>
        <div className={styles.logo}>Água'Qui</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#sobre">Sobre</a>
          <a href="#products">Produtos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>
    );
  }