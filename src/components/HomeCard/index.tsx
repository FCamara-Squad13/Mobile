/* eslint-disable react/prop-types */
import React from "react";
import "./style.css";
import ImagePlaceholder from "../../assets/image-placeholder.svg";

type Props = {
  imagePath: string;
};

const HomeCard: React.FC<Props> = ({ imagePath }) => {
  return (
    <div className="home-card">
      <img src={imagePath} alt="canetas" className="product-image" />
      <div className="product-data">
        <h3 className="product-title">Lápis de cor 24 cores</h3>
        <p className="product-location">Curitiba | PR</p>
      </div>
      <div className="announcement-data">
        <p className="announcement">
          Anunciado em <span className="annoucement-date">28/03/2021</span>
        </p>
        <span className="product-tag">Usado</span>
      </div>
      <div className="delivery-conditions">
        <span className="delivery-tag">Entrego pessoalmente</span>
        <span className="delivery-tag">Envio</span>
      </div>
      <button type="button" className="more-details-button">
        Ver detalhes
      </button>
    </div>
  );
};

export default HomeCard;
