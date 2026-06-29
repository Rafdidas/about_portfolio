import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <aside className={styles.card} data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/avatar.png"
              alt="박현규 아바타"
              className={styles.avatar}
            />
            <p className={styles.name}>PARK HYEONGYU</p>
            <p className={styles.tag}>Web Publisher → Frontend</p>
            <a
              href="https://github.com/Rafdidas"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.gh}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/github_b.png" alt="" />
              github.com/Rafdidas
            </a>
          </aside>

          <div className={styles.body} data-reveal data-reveal-delay="1">
            <p className="eyebrow">About Me</p>
            <h2 className={styles.title}>
              시작한 일은 끝까지,
              <br />
              꾸준히 성장하는 사람입니다.
            </h2>
            <div className={styles.text}>
              <p>
                안녕하세요. 화면이 코드를 통해 하나씩 채워지는 과정을 좋아해 웹
                퍼블리셔로 커리어를 시작한 박현규입니다.
              </p>
              <p>
                이커머스 쇼핑몰을 다수 구축 · 운영하며 빠른 이슈 대응과 서비스
                운영 관점을 익혔고, 지금은 데이터와 업무 흐름이 중요한 B2B 업무
                시스템 화면을 만들며 화면 구조 · 반복 UI · 공용 컴포넌트 ·
                디자인 시스템까지 함께 고민하고 있습니다.
              </p>
              <p>
                개별 화면을 빠르게 구현하는 것을 넘어, 서비스의 일관성과
                확장성을 높이는 프론트엔드로 한 걸음씩 나아가고 있습니다. 실패를
                두려워하지 않고 꾸준히 배우며 발전하겠습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
