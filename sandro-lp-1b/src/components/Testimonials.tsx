import styles from '../LandingPage.module.css';

const quotes = [
  {
    text: "Water is the driving force of all nature.",
    author: "Leonardo da Vinci",
    role: "Polymath"
  },
  {
    text: "In one drop of water are found all the secrets of all the oceans.",
    author: "Kahlil Gibran",
    role: "Poet"
  }
];

export default function Testimonials() {
  return (
    <section className={styles.quoteSection}>
      <h2 className={styles.sectionTitle}>Water Wisdom</h2>
      <div className={styles.quoteGrid}>
        {quotes.map((quote, index) => (
          <div key={index} className={styles.quoteCard}>
            <p className={styles.quoteText}>"{quote.text}"</p>
            <p className={styles.quoteAuthor}>{quote.author}</p>
            <p className={styles.quoteRole}>{quote.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}