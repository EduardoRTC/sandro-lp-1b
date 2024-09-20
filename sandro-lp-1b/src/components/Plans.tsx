import styles from '../LandingPage.module.css';
const planos = [
  {
    nome: "Hidratação Básica",
    preco: "Grátis",
    recursos: ["Lembrete diário de água", "Acompanhamento básico de hidratação", "Metas de consumo de água"],
    cta: "Comece Grátis"
  },
  {
    nome: "Pureza Premium",
    preco: "R$ 29,90/mês",
    recursos: ["Análise avançada da qualidade da água", "Planos de hidratação personalizados", "Integração com garrafas inteligentes"],
    cta: "Experimente Premium"
  },
  {
    nome: "Aqua Elite",
    preco: "R$ 59,90/mês",
    recursos: ["Assistente de hidratação com IA", "Eventos exclusivos de degustação de água", "Suporte ao cliente prioritário"],
    cta: "Seja Elite"
  }
];
export default function WaterPlans() {
  return (
    <section className={styles.productSection}>
      <h2 className={styles.sectionTitle}>Soluções acquosas</h2>
      <div className={styles.productGrid}>
        {planos.map((planos, index) => (
          <div key={index} className={styles.productCard}>
            <h3 className={styles.productName}>{planos.nome}</h3>
            <p className={styles.productPrice}>{planos.preco}</p>
            <ul className={styles.featureList}>
              {planos.recursos.map((recursos, recursosIndex) => (
                <li key={recursosIndex}>{recursos}</li>
              ))}
            </ul>
            <button className={styles.ctaButton}>{planos.cta}</button>
          </div>
        ))}
      </div>
    </section>
  );
}