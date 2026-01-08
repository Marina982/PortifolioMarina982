import React from "react";
import Header from "../Components/Header";
import styles from "../Styles-Pages/Home.module.css";
import heroImage from "../images/hero-image.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <section className={styles.hero}>
        <div className={styles.left}>
          <h1 className={styles.title}>Marina Goes 🤖👾👩🏻</h1>
          <p className={styles.subtitle}>
            Sou desenvolvedora focada em Full Stack. Aqui você encontra projetos dos mais diversos temas, com ênfase em desenvolvimento com a linguagem JS.
            
            <br/>
            Formação: Técnico(a) em Informática 👩🏻‍💻
          </p>

          <a href="#projects" className={styles.button}>
            Ver meus projetos
          </a>
        </div>

        <div className={styles.right}>
          <img src={heroImage} alt="Marina" className={styles.heroImg} />
        </div>
      </section>
    </div>
  );
}
