import React from 'react';
import styles from '../LandingPage.module.css';

const products = [
  {
    name: "Basic Hydration",
    price: "Free",
    features: ["Daily water reminder", "Basic hydration tracking", "Water intake goals"],
    cta: "Start Free"
  },
  {
    name: "Premium Purity",
    price: "$9.99/mo",
    features: ["Advanced water quality analysis", "Personalized hydration plans", "Integration with smart water bottles"],
    cta: "Try Premium"
  },
  {
    name: "Aqua Elite",
    price: "$19.99/mo",
    features: ["AI-powered hydration assistant", "Exclusive water tasting events", "Priority customer support"],
    cta: "Go Elite"
  }
];

export default function WaterPlans() {
  return (
    <section className={styles.productSection}>
      <h2 className={styles.sectionTitle}>Our Hydration Solutions</h2>
      <div className={styles.productGrid}>
        {products.map((product, index) => (
          <div key={index} className={styles.productCard}>
            <h3 className={styles.productName}>{product.name}</h3>
            <p className={styles.productPrice}>{product.price}</p>
            <ul className={styles.featureList}>
              {product.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
            <button className={styles.ctaButton}>{product.cta}</button>
          </div>
        ))}
      </div>
    </section>
  );
}