import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Anunciar: React.FC = () => {
  return (
    <>
      <Navbar />
      <h1>Página Anunciar</h1>
      <Link to="/">
        <p>Voltar</p>
      </Link>
    </>
  );
};

export default Anunciar;
