import skills from "@/data/skills";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <header className={styles.head} data-reveal>
          <p className="eyebrow">Skills</p>
          <h2 className={styles.title}>기술 스택</h2>
          <p className={styles.sub}>
            마크업과 스타일을 기본으로, React · Next.js 생태계와 실무 프레임워크
            경험을 갖추고 있습니다.
          </p>
        </header>

        <ul className={styles.grid} data-reveal>
          {skills.map((s) => (
            <li key={s.name} className={styles.item}>
              <span
                className={styles.icon}
                style={{ "--icon": `url(/icons/${s.icon}.svg)` }}
                role="img"
                aria-label={s.name}
              />
              <span className={styles.name}>{s.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
