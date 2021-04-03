import React from "react";
import "./style.css";

import HomeCard from "../HomeCard";

import canetas from "../../assets/images/Canetas.png";
import lapis from "../../assets/images/Lapis.jpg";
import lancheira from "../../assets/images/Lancheira.jpg";

type Props = {
  title: string;
};

const CardHolder: React.FC<Props> = ({ title }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="section-content">
          <h3 className="section-title">{title}</h3>
          <div className="card-holder">
            <HomeCard imagePath={canetas} />
            <HomeCard imagePath={lapis} />
            <HomeCard imagePath={lancheira} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardHolder;
