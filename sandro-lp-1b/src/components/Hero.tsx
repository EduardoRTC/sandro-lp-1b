import styles from '../LandingPage.module.css';

export default function Hero() {
    return (
      <section className={styles.hero}>
        <h1>Pure Hydration for a Better You</h1>
        <p>Discover the refreshing taste of nature in every drop</p>
        <div className={styles.cta}>
          <button className={styles.primaryButton}>Shop Now</button>
          <button className={styles.secondaryButton}>Learn More</button>
        </div>
      </section>
    );
  }