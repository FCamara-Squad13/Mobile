import React from "react";
import "./style.css";

type Props = {
  imagePath: string;
};

const Card: React.FC<Props> = ({ imagePath }) => {
  return (
    <div className="card">
      <div className="product">
        <img src={imagePath} alt="canetas" className="product-image" />
        <span className="product-tag">Usado</span>
      </div>
      <div className="product-data">
        <h3 className="product-title">Lápis de cor 24 cores</h3>
        <p className="product-location">Curitiba | PR</p>
        <p className="product-description">
          Estou doando esses lápis de cor da marca Faber Castell, estão todos
          apontados e foram usados poucas vezes.
        </p>
      </div>
      <div className="announcement-data">
        <p className="announcement">Anunciado em 28/03/2021</p>
      </div>
      <div className="delivery-conditions">
        <h3 className="delivery-conditions__title">Condições de entrega</h3>

        <span className="delivery-tag">Entrego pessoalmente</span>
        <span className="delivery-tag">Envio</span>
      </div>
      <button type="button" className="see-details-button">
        Detalhes
      </button>
    </div>
  );
};

export default Card;
