import React from "react";
import { ArrowRight } from "react-feather";
import "./style.css";

const ButtonNextPage: React.FC = () => {
  return (
    <button type="button" className="next-page-button">
      Próxima página
      <ArrowRight color="#FFFFFF" className="icon-arrow" />
    </button>
  );
};

export default ButtonNextPage;
