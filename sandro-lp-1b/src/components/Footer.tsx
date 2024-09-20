
import styles from '../LandingPage.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Sobre Nós</h3>
            <p>Água'Qui é dedicada a fornecer água pura e refrescante para melhorar sua qualidade de vida.</p>
          </div>
          <div className={styles.footerSection}>
            <h3>Links Rápidos</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#products">Produtos</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3>Contato</h3>
            <p>Email: info@aguaqui.com</p>
            <p>Telefone: (11) 1234-5678</p>
            <p>Endereço: Rua da Água, 123 - São Paulo, SP</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2023 Água'Qui. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}