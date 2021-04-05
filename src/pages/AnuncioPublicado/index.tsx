import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

import criancasFelizes from "../../assets/images/criancas-felizes.svg";

const AnuncioPublicado: React.FC = () => {
  return (
    <div className="container">
      <div className="published-content">
        <img
          className="published-ad-image"
          src={criancasFelizes}
          alt="Crianças felizes"
        />
        <h1 className="published-title">Seu anúncio foi publicado!</h1>
        <p className="published-text">
          Você pode visualizar o seu anúncio ou voltar para a página iniciar,
          para explorar mais um pouco :)
        </p>
        <div className="published-buttons-wrapper">
          <Link to="/detalhes" className="published-button">
            Visualizar anúncio
          </Link>
          <Link to="/" className="published-button go-home-button">
            Voltar à página inicial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnuncioPublicado;
