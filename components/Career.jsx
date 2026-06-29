import career from "@/data/career";
import styles from "./Career.module.css";

export default function Career() {
  return (
    <section id="career" className={styles.section}>
      <div className="container">
        <header className={styles.head} data-reveal>
          <p className="eyebrow">Career</p>
          <h2 className={styles.title}>업무 경력</h2>
          <p className={styles.sub}>
            이커머스부터 B2B 업무 시스템까지, 현장에서 쌓아온 화면 구현과 운영
            경험입니다.
          </p>
        </header>

        <div className={styles.list}>
          {career.map((job) => (
            <article key={job.id} className={styles.job} data-reveal>
              <div className={styles.meta}>
                <span className={styles.period}>
                  {job.current && <i className={styles.dot} aria-hidden="true" />}
                  {job.period}
                </span>
                <h3 className={styles.company}>{job.company}</h3>
                <p className={styles.role}>{job.role}</p>
                <ul className={styles.stack}>
                  {job.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.body}>
                <p className={styles.summary}>{job.summary}</p>
                <ul className={styles.projects}>
                  {job.projects.map((p) => (
                    <li key={p.name} className={styles.project}>
                      <div className={styles.projectTop}>
                        <h4>{p.name}</h4>
                        <span className={styles.env}>{p.env}</span>
                      </div>
                      <p>{p.desc}</p>
                    </li>
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
