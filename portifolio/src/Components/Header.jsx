import React from "react";
import styles from "../Styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Marina Goes.Dev</div>
      <nav className={styles.nav}>
        <a href="/" className={styles.link}>Home</a>
        <a href="/About" className={styles.link}>Sobre</a>
        <a href="/Projects" className={styles.link}>Projetos</a>
        <a href="/Contacts" className={styles.button}>Contato</a>
      </nav>
    </header>
  );
}