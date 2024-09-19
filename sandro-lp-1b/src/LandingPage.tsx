import Header from './components/Header';
import Hero from './components/Hero';
import CardCarousel from './components/CardCarousel.tsx';
import styles from './LandingPage.module.css';
import Testimonials from './components/Testimonials.tsx';
import WaterPlans from './components/WaterPlans.tsx';

export default function WaterLandingPage() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.mainContent}>
        <Hero />
        <section className={styles.cardSection}>
          <h2>Our Products</h2>
          <CardCarousel />
        </section>
        <Testimonials />
        <WaterPlans />
      </main>
    </div>
  );
}