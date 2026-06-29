import projects from "@/data/projects";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <header className={styles.head} data-reveal>
          <p className="eyebrow">Projects</p>
          <h2 className={styles.title}>개인 프로젝트</h2>
          <p className={styles.sub}>
            프론트엔드 역량을 넓히기 위해 직접 기획하고 구현한 작업물입니다.
          </p>
        </header>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <article
              key={p.id}
              className={styles.card}
              data-reveal
              data-reveal-delay={(i % 3) + 1}
            >
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.thumb}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.thumb} alt={`${p.name} 미리보기`} loading="lazy" />
                <span className={styles.view}>View Page →</span>
              </a>
              <div className={styles.content}>
                <div className={styles.titleRow}>
                  <h3>{p.name}</h3>
                </div>
                <p className={styles.tagline}>{p.tagline}</p>
                <p className={styles.desc}>{p.desc}</p>
                <ul className={styles.stack}>
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
