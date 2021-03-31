import React from "react";
import "./style.css";

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="container">
        <h4 className="title">Olá, Fulano!</h4>
        <h6 className="subtitle">Que bom te ver por aqui :) </h6>
      </div>
    </div>
  );
};

export default Hero;
