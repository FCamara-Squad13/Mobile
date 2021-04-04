import React from "react";
import BackToHome from "../../components/BackToHome";

import lapis from "../../assets/images/Lapis-12.png";
import avatar from "../../assets/avatar.png";

const Detalhes: React.FC = () => {
  return (
    <div className="container">
      <div className="details-content">
        <BackToHome />
        <div className="details-data">
          <h1>Detalhes</h1>
          <p>Anunciado em 26/03/2021 | Status: Em negociação</p>
        </div>
        <div className="product-data">
          <img src={lapis} alt="alguns lápis de cor" />
          <img src={lapis} alt="alguns lápis de cor" />
          <img src={lapis} alt="alguns lápis de cor" />
          <img src={lapis} alt="alguns lápis de cor" />
        </div>
        <div className="person-data">
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
              Você deve editar o status do anúncio quando estiver em negociação
              com alguém ou quando ele for finalizado.
            </p>
          </div>
        </div>
        <div className="product-description">
          <h3>Descrição do anúncio</h3>
        </div>
        <div className="more-details">
          <h3 className="more-details">Detalhes</h3>
          <h4 className="more-details-subtitle">Categoria</h4>
          <h4 className="more-details-subtitle">Condições de entrega</h4>
          <h4 className="more-details-subtitle">Condições de uso</h4>
        </div>
      </div>
    </div>
  );
};

export default Detalhes;
