import React from "react";
import "./style.css";

import Hero from "../../components/Hero";
import CardHolder from "../../components/CardHolder";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Home: React.FC = () => {
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

export default Home;
