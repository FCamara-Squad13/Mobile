import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const BackToHome: React.FC = () => {
  return (
    <Link to="/" className="back-to-home-link">
      Voltar à página inicial
    </Link>
  );
};

export default BackToHome;
