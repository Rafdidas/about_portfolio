"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const NAV = [
  { id: "hero", label: "Home" },
  { id: "career", label: "Career" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "ai", label: "AI" },
  { id: "about", label: "About" },
];

export default function Header() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(
      Boolean
    );

    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const pos = window.scrollY + window.innerHeight / 3;
      let current = sections[0]?.id ?? "hero";
      for (const sec of sections) {
        if (pos >= sec.offsetTop) current = sec.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#hero" className={styles.logo} onClick={(e) => go(e, "hero")}>
          HG<span>.</span>
        </a>
        <nav className={styles.nav}>
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={active === n.id ? styles.active : ""}
              onClick={(e) => go(e, n.id)}
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
