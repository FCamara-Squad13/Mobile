import React from "react";
import { ArrowRight } from "react-feather";
import "./style.css";

const ButtonNextPage: React.FC = () => {
  return (
    <div className="buttonNextPage">
      <div className="container">
        <button type="button" className="next-page-button">
          Próxima página
          <ArrowRight color="#FFFFFF" className="icon-arrow" />
        </button>
      </div>
    </div>
  );
};

export default ButtonNextPage;
