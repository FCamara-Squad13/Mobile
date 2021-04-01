import React from "react";
import "./style.css";

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-content">
          <h4 className="hero-title">Olá, Fulano!</h4>
          <h6 className="hero-subtitle">Que bom te ver por aqui :)</h6>
        </div>
      </div>
    </div>
  );
};

export default Hero;
