import React, { useState } from 'react';
import styles from '../LandingPage.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Construir o payload da requisição
      const payload = {
        ToMail: 'ertcarvalho@minha.fag.edu.br', 
        Content: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`
      };

      // Enviar a requisição POST para a função de backend
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NzQwYTcwYjA5NzJkY2NmNzVmYTg4YmM1MjliZDE2YTMwNTczYmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA0Mjk2Mzg3MDM0ODA0Mzg5MTQ4IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJlcnRjYXJ2YWxob0BtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiI4NzN0ZzhZanJ2Wkl6QlQ1YnR5a2VBIiwibmJmIjoxNzMyMTk3NDg5LCJpYXQiOjE3MzIxOTc3ODksImV4cCI6MTczMjIwMTM4OSwianRpIjoiYjkxZGM1YmI2ZTg2NDFlODc5YTcyMTdlYWNkYTZlZDVlNDc5YjUwZCJ9.J0d_GimAUUobfBsBgfbHckXfec6zYl9-g1l1eCeGa7Rktz5bHHn7WMeLxwvPce9JS4BiiaNvhc0p3mf08yNXwu43MuldVJNa-18imNZ2sLPaAPLbDhRg4BZPyrCnDNQAsrEz9BkNIBNVxhzmBUBb75OxVx5tPVk5aQyflTI9Drl-ksNM5XqwO_ofEoeh_-Wy0v7jV6fjup8onmashibGX66JDub475NPnk0TNoSDqPj8clu4mFp_YIdq_VrrWl9abUjiSGAtIcVwehG3mXiJmgj6bg4joVbaZDQMhEpUvsdFdRwxoKukqOz0ImyLh4cKbUH9GBCVp3Yts4xPTuSVuw'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        // Sucesso
        console.log('E-mail enviado com sucesso');
        alert('E-mail enviado com sucesso!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        // Tratar erros
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
