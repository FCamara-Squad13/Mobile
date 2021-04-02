import React from "react";

import Hero from "../../components/Hero";
import CardHolder from "../../components/CardHolder";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero title="Olá, Pamela!" subtitle="Que bom te ver por aqui :)" />
      <CardHolder title="O que estão doando na sua região" />
      <CardHolder title="Quem está precisando de doação na sua região" />
      <Footer />
    </>
  );
};

export default Home;
