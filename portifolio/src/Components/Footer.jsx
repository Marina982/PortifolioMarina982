import React from "react";
import styles from "../Styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Coluna esquerda */}
        <div className={styles.left}>
          <h2 className={styles.logo}>Marina Goes.Dev</h2>
          <p className={styles.text}>
            © 2026 Marina Goes. Todos os direitos reservados.
          </p>
        </div>

        {/* Coluna central */}
        <div className={styles.center}>
          <h3 className={styles.title}>Links úteis</h3>
          <nav className={styles.nav}>
            <a href="/" className={styles.link}>Home</a>
            <a href="/About" className={styles.link}>Sobre</a>
            <a href="/Projects" className={styles.link}>Projetos</a>
            <a href="/Contacts" className={styles.link}>Contato</a>
          </nav>
        </div>

        {/* Coluna direita */}
        <div className={styles.right}>
          <h3 className={styles.title}>Redes sociais</h3>
          <div className={styles.social}>

             {/* Instagran */}
            <a href="https://www.instagram.com/marinagoes92/" className={styles.icon} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/marina-goes-08324930b/" className={styles.icon} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>

            {/* GitHub */}
            <a href="https://github.com/Marina982" className={styles.icon} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
