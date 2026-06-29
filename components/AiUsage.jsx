import ai from "@/data/ai";
import styles from "./AiUsage.module.css";

export default function AiUsage() {
  return (
    <section id="ai" className={styles.section}>
      <div className="container">
        <header className={styles.head} data-reveal>
          <p className="eyebrow">AI</p>
          <h2 className={styles.title}>AI를 일하는 방식에 더합니다</h2>
          <p className={styles.sub}>{ai.intro}</p>
        </header>

        <div className={styles.grid}>
          {ai.items.map((item, i) => {
            const Card = item.link ? "a" : "div";
            const linkProps = item.link
              ? {
                  href: item.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};
            return (
              <Card
                key={item.id}
                className={`${styles.card} ${item.link ? styles.linked : ""}`}
                data-reveal
                data-reveal-delay={(i % 2) + 1}
                {...linkProps}
              >
                <div className={styles.cardTop}>
                  <h3>{item.title}</h3>
                  {item.link && <span className={styles.arrow}>↗</span>}
                </div>
                <p className={styles.desc}>{item.desc}</p>
                <ul className={styles.tags}>
                  {item.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
