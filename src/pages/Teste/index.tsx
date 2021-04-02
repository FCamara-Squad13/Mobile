import React from "react";
import "./style.css";

import CardHolder from "../../components/CardHolder";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Card from "../../components/Card";
import Search from "../../components/SearchBar";

import canetas from "../../assets/images/Canetas.png";
import lapis from "../../assets/images/Lapis.jpg";
import lancheira from "../../assets/images/Lancheira.jpg";

const Teste: React.FC = () => {
  return (
    <>
      <Navbar />
      <Search />
      <Hero title="" subtitle="" />
      <CardHolder title="O que estão doando na sua região" />
      <CardHolder title="Quem está precisando de doação na sua região" />
      <Card imagePath={canetas} />
      <Card imagePath={lapis} />
      <Card imagePath={lancheira} />
      <Footer />
    </>
  );
};

export default Teste;
