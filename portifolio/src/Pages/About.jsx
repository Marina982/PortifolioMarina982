import React from "react";
import Header from "../Components/Header";
import styles from "../Styles-Pages/About.module.css";
import profileImage from "../images/profile.jpeg"; 
import Footer from "../Components/Footer";

export default function About() {
  return (
    <>
      <div className={styles.container}>
        <Header />

        <section className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.title}>Sobre mim</h1>

            <p className={styles.text}>
              Sou a Marina Goes, desenvolvedora Full Stack apaixonada por tecnologia, aprendizado contínuo 
              e pela criação de soluções que realmente fazem diferença. A programação começou como curiosidade 
              e rapidamente se tornou parte essencial da minha vida — um espaço onde transformo ideias em projetos 
              reais e funcionais.
            </p>

            <p className={styles.text}>
              Meu foco principal é JavaScript, tanto no Frontend quanto no Backend. No desenvolvimento de interfaces, 
              valorizo acessibilidade, design limpo e experiências fluidas que conectam pessoas e ideias. No Backend, 
              gosto de estruturar APIs eficientes e organizadas utilizando Node.js, sempre com boas práticas em mente.
            </p>

            <p className={styles.text}>
              Tenho experiência com tecnologias como HTML, CSS, JavaScript, Node.js, Git, PostgreSQL e também com 
              ferramentas de design como Figma. Estou em constante evolução, buscando aprender mais sobre UI/UX, 
              animações web, estruturas modernas e desenvolvimento responsivo.
            </p>

            <p className={styles.text}>
              Meu objetivo é participar de projetos que desafiem a criatividade e a lógica, colaborando com outras 
              pessoas desenvolvedoras e crescendo junto com cada experiência. Acredito que tecnologia é sobre criar, 
              conectar e transformar.
            </p>

            <a href="/projects" className={styles.button}>
              Ver meus projetos
            </a>
          </div>

          <div className={styles.right}>
            <img 
              src={profileImage} 
              alt="Foto de Marina" 
              className={styles.profileImg} 
            />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
