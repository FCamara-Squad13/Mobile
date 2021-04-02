import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";

const Anunciar: React.FC = () => {
  const heroTitle = "Escolha o que você precisa fazer hoje";
  const heroSubtitle = "Procurou e não achou? Então vamos anunciar";
  const heroPath = "";

  return (
    <>
      <Navbar />
      <Hero title={heroTitle} subtitle={heroSubtitle} heroPath={heroPath} />
      <Link to="/">
        <p>Voltar</p>
      </Link>
      <Footer />
    </>
  );
};

export default Anunciar;
