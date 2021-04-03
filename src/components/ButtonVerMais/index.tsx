import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

type Props = {
  path: string;
};

const ButtonVerMais: React.FC<Props> = ({ path }) => {
  return (
    <Link to={path} className="view-more-button">
      Ver mais
    </Link>
  );
};

export default ButtonVerMais;
