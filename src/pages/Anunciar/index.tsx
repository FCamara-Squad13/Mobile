import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

import Hero from "../../components/Hero";
import anuncioDoacao from "../../assets/images/anuncio-doacao.png";
import pedidoDoacao from "../../assets/images/pedido-doacao.png";
import BackToHome from "../../components/BackToHome";

const Anunciar: React.FC = () => {
  const heroTitle = "Escolha o que você precisa fazer hoje";
  const heroSubtitle = "Procurou e não achou? Então vamos anunciar";
  const heroPath = "";

  return (
    <>
      <Hero title={heroTitle} subtitle={heroSubtitle} heroPath={heroPath} />
      <div className="container">
        <div className="anunciar-page-content">
          <BackToHome />
          <div className="images-container">
            <div className="announcement-wrapper">
              <Link to="/nova-doacao">
                <img
                  src={anuncioDoacao}
                  alt="caixa de presente com rosto sorridente, com uma mão colocando coraçõeszinhos dentro dela"
                  className="action-image"
                />
              </Link>
              <h3 className="call-to-action">Anúncio de doação</h3>
            </div>
            <div className="announcement-wrapper">
              <Link to="/novo-pedido">
                <img
                  src={pedidoDoacao}
                  alt="três caixas abertas, com desenho de coração e corações flutuando por sobbre elas"
                  className="action-image"
                />
              </Link>
              <h3 className="call-to-action">Pedido de doação</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Anunciar;
