import React from "react";
import "./style.css";

type Props = {
  title: string;
  subtitle: string;
};

const Hero: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-content">
          <h4 className="hero-title">{title}</h4>
          <h6 className="hero-subtitle">{subtitle}</h6>
        </div>
      </div>
    </div>
  );
};

export default Hero;
