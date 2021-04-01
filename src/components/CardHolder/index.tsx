import React from "react";
import "./style.css";

import { ChevronLeft, ChevronRight } from "react-feather";
import HomeCard from "../HomeCard";

import canetas from "../../assets/images/Canetas.png";
import lapis from "../../assets/images/Lapis.jpg";
import lancheira from "../../assets/images/Lancheira.jpg";
import ButtonVerMais from "../ButtonVerMais";

const CardHolder: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section-content">
          <h3 className="section-title">O que estão doando na sua região</h3>
          <div className="card-holder">
            <HomeCard imagePath={canetas} />
            <HomeCard imagePath={lapis} />
            <HomeCard imagePath={lancheira} />
          </div>
          <ButtonVerMais />
        </div>
      </div>
    </section>
  );
};

export default CardHolder;
