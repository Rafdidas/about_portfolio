import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <p className="eyebrow" data-reveal>
          Frontend Portfolio
        </p>
        <h1 className={styles.title} data-reveal data-reveal-delay="1">
          화면을 코드로 채우는 일,
          <br />
          <strong>박현규</strong> 입니다.
        </h1>
        <p className={styles.lead} data-reveal data-reveal-delay="2">
          웹 퍼블리셔로 5년 이상 이커머스와 B2B 업무 시스템의 화면을 만들어 왔고,
          지금은 디자인 시스템과 컴포넌트 구조까지 고민하는 프론트엔드로 역량을
          넓혀가고 있습니다.
        </p>
        <div className={styles.actions} data-reveal data-reveal-delay="3">
          <a href="#projects" className={styles.primary}>
            프로젝트 보기
          </a>
          <a
            href="https://github.com/Rafdidas"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ghost}
          >
            GitHub
          </a>
        </div>
      </div>
      <div className={styles.glow} aria-hidden="true" />
    </section>
  );
}
