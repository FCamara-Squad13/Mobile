import React from "react";
import { Link } from "react-router-dom";

const Anunciar: React.FC = () => {
  return (
    <>
      <h1>Página Anunciar</h1>
      <Link to="/">
        <p>Voltar</p>
      </Link>
    </>
  );
};

export default Anunciar;
