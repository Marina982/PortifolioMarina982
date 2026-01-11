import React from "react";
import Header from "../Components/Header";
import styles from "../Styles-Pages/Home.module.css";
import heroImage from "../images/hero-image.png";
import Footer from "../Components/Footer";

/* IMPORTANDO LOGOS DAS FERRAMENTAS */
import jsLogo from "../images/tech/jsLogo.svg";
import cssLogo from "../images/tech/cssLogo.svg";
import htmlLogo from "../images/tech/htmlLogo.svg";
import nodeLogo from "../images/tech/nodeLogo.svg";
import gitLogo from "../images/tech/gitLogo.svg";
import gitPage from "../images/tech/gitPage.svg";
import figmaLogo from "../images/tech/figmaLogo.svg";
import mysqlLogo from "../images/tech/mysqlLogo.svg";
import tsLogo from "../images/tech/tsLogo.svg";


export default function Home() {
  return (
    <div className={styles.container}>

      <Header />

      {/* SEÇÃO HERO */}
      <section className={styles.hero}>
        <div className={styles.left}>
          <h1 className={styles.title}>Marina Goes 🤖👾</h1>

          <p className={styles.subtitle}>
            Sou desenvolvedora focada em Full Stack. Aqui você encontra projetos
            dos mais diversos temas, com ênfase em desenvolvimento com a
            linguagem JS.
            <br />
            Formação: Técnico(a) em Informática 👩🏻‍💻
          </p>

          <a href="/Projects" className={styles.button}>
            Ver projetos
          </a>

          {/* FERRAMENTAS AQUI EMBAIXO DO TEXTO */}
          <div className={styles.techGrid}>
            <img src={jsLogo} alt="JS" className={styles.techIcon} />
            <img src={tsLogo} alt="tsLogo" className={styles.techIcon} />
            <img src={cssLogo} alt="CSS" className={styles.techIcon} />
            <img src={htmlLogo} alt="HTML" className={styles.techIcon} />
            <img src={nodeLogo} alt="node" className={styles.techIcon} />
            <img src={gitLogo} alt="git" className={styles.techIcon} />
            <img src={gitPage} alt="gitPage" className={styles.techIcon} />
            <img src={figmaLogo} alt="figmaLogo" className={styles.techIcon} />
            <img src={mysqlLogo} alt="mysqlLogo" className={styles.techIcon} />
          </div>

        </div>

        <div className={styles.right}>
          <img src={heroImage} alt="Marina" className={styles.heroImg} />
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
