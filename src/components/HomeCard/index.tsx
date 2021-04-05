import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

type Props = {
  title: string;
  location: string;
  description: string;
  date: string;
  category: string;
  delivery: string[];
  status: string;
  imagePath: string;
};

const HomeCard: React.FC<Props> = ({
  imagePath,
  title,
  location,
  date,
  category,
  delivery,
  status,
}) => {
  return (
    <div className="home-card">
      <div className="product">
        <img src={imagePath} alt="canetas" className="product-image" />
        <span className="product-tag">{status}</span>
      </div>
      <div className="product-data">
        <h2 className="product-title">{title}</h2>
      </div>
      <div className="announcement-data">
        <p className="product-location">{location}</p>
        <p className="announcement">
          Anunciado em: <br />
          {date}
        </p>
      </div>
      <div className="product-category">
        <h3 className="tag-area-title category-title">Categoria</h3>
        <span className="category-tag">{category}</span>
      </div>
      <div className="delivery-conditions">
        <h3 className="tag-area-title delivery-title">Condições de entrega</h3>
        {delivery.map((item) => (
          <span className="delivery-tag">{item}</span>
        ))}
      </div>
      <Link to="/detalhes" className="see-details-button">
        Detalhes
      </Link>
    </div>
  );
};

export default HomeCard;
