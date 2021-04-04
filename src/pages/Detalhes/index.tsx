import React from "react";
import BackToHome from "../../components/BackToHome";

import "./style.css";

import lapis1 from "../../assets/images/Lapis.jpg";
import lapis2 from "../../assets/images/Lapis2.jpg";
import lapis3 from "../../assets/images/Lapis3.jpg";
import avatar from "../../assets/avatar.png";
import blackStar from "../../assets/images/blackstar.png";
import editPencil from "../../assets/images/pencil-button.svg";

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
            <div className="personal-data">
              <div className="profile-picture">
                <img
                  className="profile-picture-image"
                  src={avatar}
                  alt="foto de perfil"
                />
              </div>
              <div className="name-wrapper">
                <p className="person-name">Pamela Halpert</p>
                <p className="person-location">Curitiba, PR</p>
              </div>
              <div className="rate-wrapper">
                <div className="person-rate">
                  <p className="person-rate-number">5</p>
                  <img
                    className="rate-star"
                    src={blackStar}
                    alt="estrela preta"
                  />
                </div>
                <p className="person-rate">Avaliação</p>
              </div>
            </div>
            <div className="donations-data">
              <div className="amount">
                <p className="donations-amount">Doações realizadas</p>
                <span className="donations-number">3</span>
              </div>
              <div className="amount">
                <p className="donations-amount">Pedidos de doação</p>
                <span className="donations-number">1</span>
              </div>
            </div>
            <p className="person-registration">
              Está aqui desde
              <br />
              20/02/2021
            </p>
            <div className="edit-announcement">
              <button className="edit-announcement-button" type="button">
                Editar anúncio
              </button>
              <img
                className="edit-announcement-icon"
                src={editPencil}
                alt="pencil icon"
              />
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
