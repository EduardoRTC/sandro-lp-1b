import styles from '../LandingPage.module.css';

const quotes = [
  {
    texto: "Desde que comecei a beber esta água mineral, minha energia e disposição melhoraram significativamente.",
    autor: "Maria Silva",
    cargo: "Atleta Profissional"
  },
  {
    texto: "O sabor puro e refrescante desta água tornou muito mais fácil manter-me hidratado durante o dia todo.",
    autor: "João Santos",
    cargo: "Gerente de TI"
  },
  {
    texto: "Como nutricionista, recomendo esta água mineral aos meus clientes. A qualidade e o equilíbrio de minerais são excepcionais.",
    autor: "Dra. Ana Rodrigues",
    cargo: "Nutricionista"
  }
];


export default function Testimonials() {
  return (
    <section className={styles.quoteSection}>
      <h2 className={styles.sectionTitle}>Quem provou da água sabe</h2>
      <div className={styles.quoteGrid}>
        {quotes.map((quote, index) => (
          <div key={index} className={styles.quoteCard}>
            <p className={styles.quoteText}>"{quote.texto}"</p>
            <p className={styles.quoteAuthor}>{quote.autor}</p>
            <p className={styles.quoteRole}>{quote.cargo}</p>
          </div>
        ))}
      </div>
    </section>
  );
}