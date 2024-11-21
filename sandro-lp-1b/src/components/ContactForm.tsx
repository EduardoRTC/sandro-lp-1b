import React, { useState } from 'react';
import styles from '../LandingPage.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
   
      const payload = {
        ToMail: 'ertcarvalho@minha.fag.edu.br', 
        Content: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`
      };


      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {

        console.log('E-mail enviado com sucesso');
        alert('E-mail enviado com sucesso!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
       
        const errorText = await response.text();
        console.error('Erro ao enviar o e-mail:', errorText);
        alert('Erro ao enviar o e-mail: ' + errorText);
      }
    } catch (error) {
      console.error('Erro de rede:', error);
      alert('Erro de rede ao enviar o e-mail.');
    }
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
