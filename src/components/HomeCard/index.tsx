import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

type Props = {
  imagePath: string;
};

const HomeCard: React.FC<Props> = ({ imagePath }) => {
  return (
    <div className="home-card">
      <div className="product">
        <img src={imagePath} alt="canetas" className="product-image" />
        <span className="product-tag">Usado</span>
      </div>
      <div className="product-data">
        <h2 className="product-title">Lápis de cor 24 cores</h2>
      </div>
      <div className="announcement-data">
        <p className="product-location">Curitiba | PR</p>
        <p className="announcement">
          Anunciado em: <br />
          28/03/2021
        </p>
      </div>
      <div className="product-category">
        <h3 className="tag-area-title category-title">Categoria</h3>
        <span className="category-tag">Canetas, lápis e borrachas</span>
      </div>
      <div className="delivery-conditions">
        <h3 className="tag-area-title delivery-title">Condições de entrega</h3>
        <span className="delivery-tag">Entrego pessoalmente</span>
        <span className="delivery-tag">Envio</span>
      </div>
      <Link to="/detalhes" className="see-details-button">
        Detalhes
      </Link>
    </div>
  );
};

export default HomeCard;
