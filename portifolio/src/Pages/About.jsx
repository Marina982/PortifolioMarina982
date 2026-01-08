import React from "react";
import Header from "../Components/Header";
import styles from "../Styles-Pages/About.module.css";
import profileImage from "../images/profile.jpeg"; // ajuste o caminho se necessário

export default function About() {
  return (
    <div className={styles.container}>
      <Header />

      <section className={styles.content}>
        <div className={styles.left}>
          <h1 className={styles.title}>Sobre mim</h1>

          <p className={styles.text}>
            Olá! Meu nome é Marina e sou desenvolvedora Frontend interessada por tecnologia,
            interfaces intuitivas e experiências digitais criativas. 
          </p>

          <p className={styles.text}>
            Tenho experiência com HTML, CSS, JavaScript e frameworks modernos como React.
            Gosto de transformar ideias em telas funcionais e interativas, prezando sempre
            por um design limpo, estratégia visual e performance.
          </p>

          <p className={styles.text}>
            Busco constantemente aprender novas ferramentas e evoluir como profissional,
            explorando áreas como UI/UX, animações web e projetos responsivos.
          </p>

          <a href="/projetos" className={styles.button}>
            Ver meus projetos
          </a>
        </div>

        <div className={styles.right}>
          <img src={profileImage} alt="Foto de Marina" className={styles.profileImg} />
        </div>
      </section>
    </div>
  );
}
