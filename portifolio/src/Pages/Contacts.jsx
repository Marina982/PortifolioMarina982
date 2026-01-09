import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer"; // ajuste o caminho se necessário
import styles from "../Styles-Pages/Contacts.module.css";

export default function Contact() {
  return (
    <>
      <Header />  {/* Mantido no topo */}

      <section className={styles.contactSection}>
        <div className={styles.container}>

          <h1 className={styles.title}>Entre em Contato</h1>
          <p className={styles.subtitle}>Me acompanhe nas redes sociais!</p>

          <div className={styles.socialContainer}>
            <a
              href="https://github.com/Marina982"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/marina-goes-08324930b/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              href="https://www.instagram.com/marinagoes92/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <i className="fab fa-instagram"></i>
            </a>

          </div>

        </div>
      </section>
      <Footer/>
    </>
  );
}
