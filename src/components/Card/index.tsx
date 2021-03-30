import React from "react";
import "./style.css";
import { ReactComponent as ImagePlaceholder } from "../../assets/image-placeholder.svg";

const Card: React.FC = () => {
  return (
    <div className="card">
      <ImagePlaceholder className="product-image" />
      <div className="product-data">
        <h3 className="product-title">Lápis de cor 24 cores</h3>
        <p className="product-location">Curitiba | PR</p>
        <p className="product-description">
          Estou doando esses lápis de cor da marca Faber Castell, estão todos
          apontados e foram usados poucas vezes.
        </p>
      </div>
      <div className="announcement-data">
        <p className="announcement">
          Anunciado em <span className="annoucement-date">28/03/2021</span>
        </p>
        <span className="product-tag">Usado</span>
      </div>
      <div className="delivery-conditions">
        <h3 className="delivery-conditions__title">Condições de entrega</h3>

        <span className="delivery-tag">Entrego pessoalmente</span>
        <span className="delivery-tag">Envio</span>
      </div>
      <button type="button" className="more-details-button">
        Ver detalhes
      </button>
    </div>
  );
};

export default Card;
