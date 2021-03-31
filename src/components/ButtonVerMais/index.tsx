import React from "react";
import "./style.css";

const ButtonVerMais: React.FC = () => {
  return (
    <div className="buttonMoreView">
      <div className="container">
        <button type="button" className="more-view-button">
          Ver mais
        </button>
      </div>
    </div>
  );
};

export default ButtonVerMais;
