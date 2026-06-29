import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.logo}>
          HG<span>.</span>
        </p>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Park HyeonGyu. Built with Next.js.
        </p>
        <a
          href="https://github.com/Rafdidas"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
