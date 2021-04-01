import React from "react";
import CardHolder from "../../components/CardHolder";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import "./style.css";

const pedindoDoacoes: React.FC = () => {
  const subtitle = `Que tal ajudar alguém doando aquele material escolar que está parado aí, na sua casa?
Ou então, doar aquele material novinho, que você nunca usou e não vai fazer falta. Vamos espalhar sorrisos por aí?`;

  return (
    <>
      <Navbar />
      <Hero title="Tem alguém precisando?" subtitle={subtitle} />
      <CardHolder title="" />
      <Footer />
    </>
  );
};

export default pedindoDoacoes;
