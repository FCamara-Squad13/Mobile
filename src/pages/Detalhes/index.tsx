import React from "react";
import BackToHome from "../../components/BackToHome";

import "./style.css";

import lapis1 from "../../assets/images/Lapis.jpg";
import lapis2 from "../../assets/images/Lapis2.jpg";
import lapis3 from "../../assets/images/Lapis3.jpg";
import avatar from "../../assets/avatar.png";

const Detalhes: React.FC = () => {
  return (
    <div className="container">
      <div className="details-content">
        <BackToHome />
        <div className="details-data">
          <h1 className="details-title">Lápis de cor 24 cores</h1>
          <p className="announcement-data">
            Anunciado em 26/03/2021 | Status: Em negociação
          </p>
        </div>
        <div className="grid-wrapper">
          <div className="product-details-wrapper">
            <div className="product-pictures">
              <span className="product-tag product-tag-details">Usado</span>
              <div className="pictures-column">
                <img
                  className="product-picture"
                  src={lapis1}
                  alt="alguns lápis de cor"
                />
                <img
                  className="product-picture"
                  src={lapis2}
                  alt="alguns lápis de cor"
                />
                <img
                  className="product-picture"
                  src={lapis3}
                  alt="alguns lápis de cor"
                />
              </div>
              <img
                className="product-main-picture"
                src={lapis1}
                alt="alguns lápis de cor"
              />
            </div>
            <div className="product-description">
              <h3 className="announcement-title">Descrição do anúncio</h3>
              <p className="announcement-description">
                Estou doando esses lápis da marca Faber Castell, estão todos
                apontados e foram usados poucas vezes.
              </p>
            </div>
          </div>
          <aside className="person-data">
            <img src={avatar} alt="foto de perfil" />
            <p className="person-name">Pamela Halpert</p>
            <p className="person-location">Curitiba, PR</p>
            <p className="person-rate">5 * Avaliação</p>
            <p className="person-donations-amount">Doações realizadas 3</p>
            <p className="person-received-donations-amount">
              Pedidos de doação 1
            </p>
            <p className="person-registration">Está aqui desde 20/02/2021</p>
            <div className="edit-announcement">
              <button className="edit-announcement-button" type="button">
                Editar anúncio
              </button>
              <p className="edit-instruction">
                Você deve editar o status do anúncio quando estiver em
                negociação com alguém ou quando ele for finalizado.
              </p>
            </div>
          </aside>
        </div>
        <div className="more-details">
          <h3 className="more-details-title">Detalhes</h3>
          <h4 className="more-details-subtitle">Condições de entrega</h4>
          <span className="delivery-tag-details">Envio</span>
          <h4 className="more-details-subtitle">Categoria</h4>
          <span className="category-tag">Canetas, lápis e borrachas</span>
        </div>
      </div>
    </div>
  );
};

export default Detalhes;
