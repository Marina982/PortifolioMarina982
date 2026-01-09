import React from "react";
import Header from "../Components/Header";
import styles from "../Styles-Pages/Projects.module.css";
import Footer from "../Components/Footer";

import projeto2 from "../images/projeto2.png";
import projeto3 from "../images/projeto3.png";
import projeto4 from "../images/projeto4.png";

export default function Projects() {
  return (
    <div className={styles.container}>
      <Header />

      <section className={styles.content}>
        <h1 className={styles.title}>Meus Projetos</h1>
        <p className={styles.subtitle}>
          Aqui estão alguns dos projetos que desenvolvi utilizando HTML, CSS,
          JavaScript e React.
        </p>

        <div className={styles.grid}>
         

          {/* CARD 2 */}
          <div className={styles.card}>
            <img src={projeto2} alt="Projeto 2" className={styles.image} />
            <h3 className={styles.projectTitle}>E-commerce Básico
</h3>
            <p className={styles.projectDesc}>
Descrição: Protótipo de uma loja virtual simples, desenvolvido com React.
              <br/>
Diferenciais:
Interface intuitiva e responsiva,
Gráficos dinâmicos para visualização de dados em tempo real (como vendas e estoque),
Estrutura modular, permitindo expansão futura (carrinho de compras, login de usuários, etc.) e 
Tecnologias: React, CSS Modules, JavaScript.

            </p>
            <a
              href="#"
              target="_blank"
              className={styles.button}
            >
              Ver Projeto
            </a>
          </div>

          {/* CARD 3 */}
          <div className={styles.card}>
            <img src={projeto3} alt="Projeto 3" className={styles.image} />
            <h3 className={styles.projectTitle}>Aplicativo para registro de plantas</h3>
            <p className={styles.projectDesc}>
             Descrição: Aplicação responsiva para catalogar e registrar informações sobre plantas.
<br/>
Diferenciais:
Interface amigável com animações suaves,
Foco em performance e experiência do usuário,
Possibilidade de adicionar, editar e visualizar registros de forma práticae
Tecnologias: React, CSS responsivo, animações com bibliotecas JS.

            </p>
            <a
              href="#"
              target="_blank"
              className={styles.button}
            >
              Ver Projeto
            </a>
          </div>

          {/* CARD 4 */}
          <div className={styles.card}>
            <img src={projeto4} alt="Projeto 4" className={styles.image} />
            <h3 className={styles.projectTitle}>Lista de exercicios</h3>
            <p className={styles.projectDesc}>
             Descrição: Sistema que consome dados de uma API externa para exibir exercícios de forma dinâmica.
<br/>
Diferenciais:
Funções de busca e filtros para facilitar a navegação,
Componentes reutilizáveis para exibição dos dados,
Integração com API para manter os exercícios sempre atualizadose
Tecnologias: React, JavaScript, integração com API REST.

            </p>
            <a
              href="#"
              target="_blank"
              className={styles.button}
            >
              Ver Projeto
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
