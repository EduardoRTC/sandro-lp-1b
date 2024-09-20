import Header from './components/Header';
import Hero from './components/Hero';
import CardCarousel from './components/CardCarousel.tsx';
import styles from './LandingPage.module.css';
import Testimonials from './components/Testimonial.tsx';
import WaterPlans from './components/Plans.tsx';
import Footer from './components/Footer.tsx';
import ContactForm from './components/ContactForm.tsx';

export default function WaterLandingPage() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.mainContent}>
        <Hero />
        <section className={styles.cardSection}>
          <h2>Por que nos escolher</h2>
          <CardCarousel />
        </section>
        <Testimonials />
        <WaterPlans />
        <ContactForm />
        <Footer/>
      </main>
    </div>
  );
}