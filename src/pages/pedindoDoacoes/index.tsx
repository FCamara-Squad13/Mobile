import React from "react";
import CardHolder from "../../components/CardHolder";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import "./style.css";

const pedindoDoacoes: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CardHolder title="O que estão doando na sua região" />
      <CardHolder title="Quem está precisando de doação na sua região" />
      <Footer />
    </>
  );
};

export default pedindoDoacoes;
