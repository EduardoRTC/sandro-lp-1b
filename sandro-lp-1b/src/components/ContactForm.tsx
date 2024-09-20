import React, { useState } from 'react';
import styles from '../LandingPage.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id='contato' className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Se hidrate conosco</h2>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Enviar Mensagem</button>
        </form>
      </div>
    </section>
  );
}