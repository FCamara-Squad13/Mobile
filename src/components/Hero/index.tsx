import React from "react";
import "./style.css";

type Props = {
  title: string;
  subtitle: string;
  heroPath: string;
};

const Hero: React.FC<Props> = ({ title, subtitle, heroPath }) => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.6)), url(${heroPath})`,
  };

  return (
    <div
      className={`hero${heroPath === "" ? " no-hero-image" : ""}`}
      style={heroStyle}
    >
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
