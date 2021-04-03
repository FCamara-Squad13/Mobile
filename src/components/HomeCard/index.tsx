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
        <h3 className="product-title">Lápis de cor 24 cores</h3>
      </div>
      <div className="announcement-data">
        <p className="product-location">Curitiba | PR</p>
        <p className="announcement">
          Anunciado em: <br />
          28/03/2021
        </p>
      </div>
      <div className="delivery-conditions">
        <span className="delivery-tag">Entrego pessoalmente</span>
        {/* <span className="delivery-tag">Envio</span> */}
      </div>
      <Link to="/detalhes" className="see-details-button">
        Detalhes
      </Link>
    </div>
  );
};

export default HomeCard;
