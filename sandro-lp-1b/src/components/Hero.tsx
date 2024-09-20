import styles from '../LandingPage.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Hidratação Pura para um Você Melhor</h1>
      <p>Descubra o sabor refrescante da natureza em cada gota</p>
      <div className={styles.cta}>
        <button className={styles.primaryButton}>Comprar Agora</button>
        <button className={styles.secondaryButton}>Saiba Mais</button>
      </div>
    </section>
  );
}